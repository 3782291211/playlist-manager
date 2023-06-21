# Spotify playlist manager 

[Click here to go to the live app.](https://playlist-manager-omega.vercel.app/)

## What is it?
This React application links directly to your Spotify account and allows you to search through the entire Spotify music library, discover new songs, create new playlists and save those playlists to your account.

## How to use the application
See below for relevant screenshots.
1. [Click here to go to the app](https://playlist-manager-omega.vercel.app/). 
2. Once you're there, you will be redirected to Spotify's login page. 
3. After that, you will have to authorise this app to enable it to add new playlists to your account. Don't worry, the app doesn't have access to any of your private information, just the public stuff.
4. Once you've authorised the app, you can use it to search Spotify's music library by song/artist/album, add/remove songs to a new playlist, and save the playlist to your account.

## Application features
- This app makes GET and POST requests to the Spotify web API using temporary access tokens acquired through a client-side authorisation workflow.
- The interface allows you to cycle back and forth between different pages as well as add and remove songs to your playlist.
- Give your new playlist a name by typing into the input box at the top of the playlist section.

## Home view

<img src="home.png" width=500>

## Redirect to Spotify login page
<img src="redirect.jpg" width=300>

## Authorisation message

<img src="auth.png" width=400>