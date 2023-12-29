var music = new Audio("./siu.mp3");
// Store Musics in Array


/* This Part of Code contains images, names and url of songs and Artist */
const songs = [
    {
        id: '1',
        songName: `Koshtooo <br>
        <div class="artist_name">Shahriar Fahim</div>`,
        poster: '/img/fahim.jpg',
        songUrl: './siu.mp3'
    },
];
const popularSongs = [
    {
        id: '1',
        songName: `Koshtooo <br>
        <div class="artist_name">Shahriar Fahim</div>`,
        poster: './img/fahim.jpg',
        songUrl: './siu.mp3'
    },
];
const popularArtist = ['./img/fahim.jpg',]
/* This Part of Code contains images, names and url of songs and Artist */



/* This Part of Code controls images and names of songs and Artist */
Array.from(document.getElementsByClassName('song_item')).forEach((element, i) => {
    let posterUrl;
    let title;

    if (songs[i] && songs[i].poster) {
        posterUrl = songs[i].poster;
    } else {
        posterUrl = '';
    }

    if (songs[i] && songs[i].songName) {
        title = songs[i].songName;
    } else {
        title = 'Unknown Song';
    }

    element.getElementsByTagName('img')[0].src = posterUrl;
    element.getElementsByTagName('h5')[0].innerHTML = title;
});
Array.from(document.getElementsByClassName('song_item_popular')).forEach((element, i) => {
    let posterUrl;
    let title;

    if (popularSongs[i] && popularSongs[i].poster) {
        posterUrl = popularSongs[i].poster;
    } else {
        posterUrl = '';
    }

    if (popularSongs[i] && popularSongs[i].songName) {
        title = popularSongs[i].songName;
    } else {
        title = 'Unknown Song';
    }

    element.getElementsByTagName('img')[0].src = posterUrl;
    element.getElementsByTagName('h5')[0].innerHTML = title;
});
Array.from(document.getElementsByClassName('song_item_artist')).forEach((element, i) => {
    let artistPic;

    if (popularArtist[i]) {
        artistPic = popularArtist[i];
    } else {
        artistPic = './img/bg.jpg';
    }

    element.getElementsByTagName('img')[0].src = artistPic;
});
/* This Part of Code controls images and names of songs and Artist */




const pausePlayIcon = document.getElementById('masterPlay');
const wave = document.querySelector('.wave');

function playPause() {
    if (pausePlayIcon.classList.contains("bi-pause-fill")) {
        music.pause();
        pausePlayIcon.classList.remove("bi-pause-fill");
        pausePlayIcon.classList.add("bi-play-fill");
        wave.classList.remove("active2");
    } else {
        music.play();
        pausePlayIcon.classList.remove("bi-play-fill");
        pausePlayIcon.classList.add("bi-pause-fill");
        wave.classList.add("active2");
    }
};


// Another unknow Part

let index = 0;

Array.from(document.querySelectorAll(".playListPlay")).forEach((element) => {
    element.addEventListener("click", (e)=>{
        index = e.target.id;
        e.classList.add("bi-pause-fill");
        e.classList.remove("bi-play-fill");
        // if (music.paused) {
        //     music.play();
        //     e.classList.remove("bi-play-fill");
        //     e.classList.toggle("bi-pause-fill");
        // } else {
        //     music.pause();
        //     e.classList.remove("bi-pause-fill");
        //     e.classList.toggle("bi-play-fill");
        // }
    })
})
