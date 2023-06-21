class Spotify {
    static accessToken;
    static clientID = process.env.REACT_APP_CLIENT_ID;
    static redirectURI = "https://playlist-manager-omega.vercel.app";

    static getAccessToken() {
        if (this.accessToken) {
            return this.accessToken;
        }
        const url = window.location.href;
        const token = url.match(/access_token=([^&]*)/)?.[1];
        const expirationTime = url.match(/expires_in=([^&]*)/)?.[1];

        if (token && expirationTime) {
            this.accessToken = token;
            window.setTimeout(() => this.accessToken = '', Number(expirationTime) * 1000);
            window.history.pushState('Access Token', null, '/');
            return this.accessToken;
        } else {
           window.location = `https://accounts.spotify.com/authorize?client_id=${this.clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${this.redirectURI}`;
        }
    }

    static async search(searchTerm, token, offset) {
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}&offset=${offset}`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('Unable to fetch data.')
        } catch(err) {
            console.log(err);
        }
    }

    static async savePlaylist(playlistName, trackURIs) {
        if (!playlistName.trim() || !trackURIs.length) return;
        try {
            const headers = { Authorization: 'Bearer ' + this.getAccessToken() };
            const idResponse = await fetch('https://api.spotify.com/v1/me', { headers });
            if (idResponse.ok) {
                const { id: user_id } = await idResponse.json();

                const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, { 
                    headers, 
                    method: 'POST', 
                    body: JSON.stringify({ name: playlistName })
                });

                if (playlistResponse.ok) {
                    const { id: playlist_id } = await playlistResponse.json();
                    const playlist = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
                        headers,
                        method: 'POST',
                        body: JSON.stringify({ uris: trackURIs })
                    });
                    return playlist;
                }
            }
            throw new Error('Unable to complete request.');
        } catch(err) {
            console.log(err);
        }
    }
}

export default Spotify;