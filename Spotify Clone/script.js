var music = new Audio("./audio/1.mp3");
// Store Musics in Array


/* This Part of Code contains images, names and url of songs and Artist */
const songs = [
    {
        id: '1',
        songName: `Koshtooo <br>
        <div class="artist_name">Shahriar Fahim</div>`,
        poster: '/img/1.jpg',
        songUrl: './1.mp3'
    },
];
const popularSongs = [
    {
        id: '1',
        songName: `Koshtooo <br>
        <div class="artist_name">Shahriar Fahim</div>`,
        poster: '/img/1.jpg',
        songUrl: './1.mp3'
    },
];
const popularArtist = ['./img/1.jpg',]
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
const masterPlayArtistSong = document.getElementById('masterPlayArtistSong');
const wave = document.querySelector('.wave');





/* This Part contains codes which control play pause and img, title, audio etc. */
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

const makeAllPlays = () => {
    Array.from(document.querySelectorAll(".playListPlay")).forEach((element) => {
        element.classList.add("bi-play-circle-fill");
        element.classList.remove("bi-pause-circle-fill");
    })
}
const makeAllBackgrounds = () => {
    Array.from(document.querySelectorAll(".song_item")).forEach((element) => {
        element.style.background = 'rgb(105, 105, 170, 0)';
    })
}

let masterPlayIcon = document.getElementById('masterPlayIcon');
let title = document.getElementById('title');
let index = 0;

Array.from(document.querySelectorAll(".playListPlay")).forEach((element) => {
    element.addEventListener("click", (e)=>{
        index = e.target.id;
        makeAllPlays();

        e.target.classList.remove("bi-play-circle-fill");
        e.target.classList.add("bi-pause-circle-fill");

        music.src = `audio/${index}.mp3`;
        masterPlayIcon.src = `img/${index}.jpg`;
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        });
        song_title.forEach(ele => {
            let {songName} = ele;
            title.innerHTML = songName
        });
        pausePlayIcon.classList.remove("bi-play-fill");
        pausePlayIcon.classList.add("bi-pause-fill");
        wave.classList.add("active2");

        music.play();

        music.addEventListener('ended', () => {
            pausePlayIcon.classList.remove("bi-pause-fill");
            pausePlayIcon.classList.add("bi-play-fill");
            wave.classList.remove("active2");
        });
        makeAllBackgrounds();
        Array.from(document.querySelectorAll(".song_item"))[`${index}-1`].style.background = 'rgb(105, 105, 170, .1)';

    })
});
/* This Part contains codes which control play pause and img, title, audio etc. */



const currentStart = document.getElementById('current_start');
const currentEnd = document.getElementById('current_end');
const seek = document.getElementById('seek');
const bar2 = document.getElementById('bar2');
const dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if(sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if(sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;


    let progressBar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration/100;
    bar2.style.transition = 'none';
    dot.style.transition = 'none';
})

music.addEventListener('ended', ()=>{
    pausePlayIcon.classList.remove("bi-pause-fill");
    pausePlayIcon.classList.add("bi-play-fill");
    wave.classList.remove("active2");
})

const vol_icon = document.getElementsByClassName('vol_icon')[0];
const vol = document.getElementById('vol');
const vol_bar = document.querySelector('header .master_play .vol .vol_bar');
const vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up");
    } else if (vol.value > 0) {
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up");
    } else if (vol.value > 50) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-up-fill");
    };

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`
    vol_bar.style.transition = `none`
    vol_dot.style.left = `${vol_a}%`
    vol_dot.style.transition = `none`

    music.volume = vol_a/100;
    
})


