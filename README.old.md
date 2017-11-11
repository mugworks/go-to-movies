Let's Go to the Movies
===

## Description

Create an app that shows movie data from http://www.omdbapi.com/ and allows users
to search by title. Use the API_KEY from the class Ryver channel and append to url as `http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json&apikey=<key goes here>`

You are free to query the data for a genre, actor, whatever that you want. Use `encodeURI` to change `Star Wars` into `Star%20Wars`.

* Use `create-react-app` to create your react app project

* Your need to manage state for:
  * `loading` - indicates app should display "loading" info
  * `movies` - the list of movies to display
 
* Decompose into meaningful components (logical parts). Use multiple modules when it makes sense

* Use `key` to track list items (goes on top-level component tag or element under `map(` operation

* Add at least a moderately acceptable level of css style. You can either use:
  * Imported `index.css` in index.js
  * Use inline styles directly on your elements

## Rubric *10pts*

* Renders movies *1pts*
* Correct/idiomatic jsx and React *3pts*
* Component (de)composition *3pts*
* HTML/CSS *1pts*
* Project structure/org *1pts*
* Curiosity/creativity *1pts*
