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
let userLink= document.querySelector(".display-link");
// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let imageArray = ["pic/grapes.png","pic/deepend.jpg","pic/gold.jpg","pic/lemondramon.jpg"];
let songNameArray = ["Grapes","Deep End","Golden Hour","Touch-Tone Telephone"];
let songLinkArray = ["https://www.youtube.com/watch?v=-uk3GwgNc3o","https://www.youtube.com/watch?v=ZVHPTVzadCg","https://www.youtube.com/watch?v=PEM0Vs8jf1w","https://www.youtube.com/watch?v=rbxL5BVEkRs"];
let artistArray = ["James Marriott","Felix (Stray Kids)","JVKE","Lemon Demon"];

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
let Grapes ={
  picture:"pic/grapes.png",
  nombre:"Grapes",
  artista:"James Marriott",
  URL:"https://www.youtube.com/watch?v=-uk3GwgNc3o"
};
let Deep-End ={
  picture:"pic/deepend.jpg",
  nombre:"Deep End",
  artista:"Felix (Stray Kids)",
  URL:"https://www.youtube.com/watch?v=ZVHPTVzadCg"
};
let Golden-Hour={
  picture:"pic/gold.jpg",
  nombre:"Golden Hour",
  artista:"JVKE",
  URL:"https://www.youtube.com/watch?v=PEM0Vs8jf1w"
};
let lemon={
  picture:"pic/lemondramon.jpg",
  nombre:"Touch-Tone Telephone",
  artista:"Lemon Demon",
  URL:"https://www.youtube.com/watch?v=rbxL5BVEkRs"
};
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let SongInfoArray=[Deep-End,Golden-Hour,lemon,Grapes];
//REFACTOR LOOPS DAY 
function addSongInfo() {
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
Song
// task 16: update your `.push()` so the input object is added to your array of objects.
  
// task 17: update your loops based on your new array of objects.
  
        // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
      let SaveUrl = songLink;
      let SaveImage = image;
      let saveSong = songName;
      let saveArtist= artist;
        // task 10: use `.push()` to add each input value to the correct array.
    artistArray.push(saveArtist);
    imageArray.push(SaveImage);
    songNameArray.push(saveSong);
    songLinkArray.push(SaveUrl);
    
      
    }



/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {
// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song link
for (let index= 0; index < imageArray.length; index++){
  let imagehaha= imageArray[index];
  userImage.insertAdjacentHTML('beforeend', `<img src="${imagehaha}">`);
}
  for (let list= 0; list < songLinkArray.length; list++){
  let songshe= songLinkArray[list];
  userLink.insertAdjacentHTML('beforeend', `<a href="${songshe}" target="_blank">Link To Song</a>`);
}
for (let i=0; i<artistArray.length; i++){
  let artistname= artistArray[i];
  userArtis.insertAdjacentHTML(`beforeend`,`<p>${artistname}</p>`)
    }
for (let x=0; x < songNameArray.length; x++){
  let Namesongs= songNameArray[x];
  userSong.insertAdjacentHTML(`beforeend`,`<p>${Namesongs}</p>`)
}
// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
}};

// function call to display stored songs
displaySongInfo();
