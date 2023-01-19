// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let userImage= document.querySelector(".display-image");
let userSong= document.querySelector(".display-song");
let userArtis= document.querySelector(".display-artist");
let userLink= document.querySelector("display-link");
// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let imageArray = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Fjamesmarriott-music%2Fgrapes&psig=AOvVaw1yJ1xDA1V78iLDb1qVKwcq&ust=1674173750135000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNi4_q-t0vwCFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F3VMeAc0SlgLaS9RzA8TSxH&psig=AOvVaw1Wj0B0z_UujLJIRTmsHvj9&ust=1674173847773000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKDkrt6t0vwCFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrbxL5BVEkRs&psig=AOvVaw15p3mvg-WIIevIyM3uwH38&ust=1674173983241000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLj2iZ-u0vwCFQAAAAAdAAAAABAE","https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenius.com%2FJvke-golden-hour-lyrics&psig=AOvVaw3MCUItQkLZRZaeFXKUfr_Q&ust=1674173943730000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNj_9ouu0vwCFQAAAAAdAAAAABAD"];
let songNameArray = ["Grapes","Deep End","Golden Hour","Touch Tone Telephone"];
let songLinkArray = ["","","",""];
let artistArray = ["","","","Lemon Demon"];

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





    () => {
        // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
        // task 10: use `.push()` to add each input value to the correct array.
    }




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
