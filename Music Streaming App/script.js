var music = new Audio("./audio/Shotto Mitthey.mp3");
// music.play();


const songs = [
    {
        id: '0',
        Name: 'Shotto Mitthey', // Poster and url should have the same name!
        artist: 'Level-Five',
        poster: 'Shotto Mitthey',
        url: './audio/Shotto Mitthey.mp3'
    },
    {
        id: '1',
        Name: 'Alag Aasmaan', // Poster and url should have the same name!
        artist: 'Anuv Jain',
        poster: 'Alag Aasmaan',
        url: './audio/Alag Aasmaan.mp3'
    },
    {
        id: '2',
        Name: 'Amar Shotto', // Poster and url should have the same name!
        artist: 'Karnival',
        poster: 'Amar Shotto',
        url: './audio/Amar Shotto.mp3'
    },
    {
        id: '3',
        Name: 'Iraaday', // Poster and url should have the same name!
        artist: 'Abdul Hannan',
        poster: 'Iraaday',
        url: './audio/Iraaday.mp3'
    },
    {
        id: '4',
        Name: 'Let Her Go', // Poster and url should have the same name!
        artist: 'Passenger',
        poster: 'Let Her Go',
        url: './audio/Let Her Go.mp3'
    },
    {
        id: '5',
        Name: 'Matir Roud', // Poster and url should have the same name!
        artist: 'Aftermath',
        poster: 'Matir Roud',
        url: './audio/Matir Roud.mp3'
    },
    {
        id: '6',
        Name: 'Na Pawar Golpo', // Poster and url should have the same name!
        artist: 'Encore',
        poster: 'Na Pawar Golpo',
        url: './audio/Na Pawar Golpo.mp3'
    },
    {
        id: '7',
        Name: 'Night Changes', // Poster and url should have the same name!
        artist: 'One Direction',
        poster: 'Night Changes',
        url: './audio/Night Changes.mp3'
    },
    {
        id: '8',
        Name: 'No Lie', // Poster and url should have the same name!
        artist: 'Dua Lipa',
        poster: 'No Lie',
        url: './audio/No Lie.mp3'
    },
    {
        id: '9',
        Name: 'Prem Nagar', // Poster and url should have the same name!
        artist: 'Abhinibesh',
        poster: 'Prem Nagar',
        url: './audio/Prem Nagar.mp3'
    },
];
const artists = [
    'encore',
    'abdulhannan',
    'abhinibesh',
    'aftmath',
    'anuvjain',
    'dualipa',
    'karnival',
    'oddsignature',
    'onedirection',
    'passenger',
    'Shotto Mitthey',
];


// Load All Popular Songs
const pop_song = document.querySelector('.pop_song');
function loadPopSongs() {

    // Maps All Popular Songs
    pop_song.innerHTML = `${songs.map(function (song) {
        return `<li class="song_item song_item_popular">
        <div class="img_play">
            <img src="./posters/${song.poster}.jpg">
            <i class="bi playListPlay bi-play-circle-fill" id="${song.id}" onclick="playSong(${song.url})"></i>
        </div>
        <h5>
            ${song.Name}
            <div class="artist_name">${song.artist}</div>
        </h5>
    </li>`;
    }).join('')}`;
};
loadPopSongs();

// Load All Popular Artists
const pop_artist = document.querySelector('.pop_artist');
function loadPopArtist() {

    // Maps All Popular Songs
    pop_artist.innerHTML = `${artists.map(function (artist) {
        return `<li class="item song_item_artist">
        <img src="./artists/${artist}.jpg">
    </li>`;
    }).join('')}`;
};
loadPopArtist();


/* This Part contains codes which control play pause and img, title, audio etc. */
const pausePlayIcon = document.getElementById('masterPlay');
const masterPlayArtistSong = document.getElementById('masterPlayArtistSong');
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
        console.log(index);
        makeAllPlays();

        e.target.classList.remove("bi-play-circle-fill");
        e.target.classList.add("bi-pause-circle-fill");

        music.src = `${songs[index].url}`;
        masterPlayIcon.src = `./posters/${songs[index].poster}.jpg`;
        title.innerHTML = `${songs[index].Name} <br>
        <div class="artist_name">${songs[index].artist}</div>`

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
        Array.from(document.querySelectorAll(".song_item"))[`${index}`].style.background = 'rgb(105, 105, 170, .1)';

    })
});
/* This Part contains codes which control play pause and img, title, audio etc. */




/* This Part of code contains Music progress bar behaviour */
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
/* This Part of code contains Music progress bar behaviour */




/* This Part of code contains Voume Bar behaviour */
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

const back = document.getElementById('back');
const next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    music.src = `${songs[index].url}`;
    masterPlayIcon.src = `./posters/${songs[index].poster}.jpg`;
    title.innerHTML = `${songs[index].Name} <br>
    <div class="artist_name">${songs[index+1].artist}</div>`
    makeAllPlays();
    document.getElementById(`${index}`).classList.remove("bi-play-fill");
    document.getElementById(`${index}`).classList.add("bi-pause-fill");
    makeAllBackgrounds();
    music.play();
})
next.addEventListener('click',()=>{
    index += 1;
    music.src = `${songs[index].url}`;
    masterPlayIcon.src = `./posters/${songs[index].poster}.jpg`;
    title.innerHTML = `${songs[index].Name} <br>
    <div class="artist_name">${songs[index].artist}</div>`
    makeAllPlays();
    document.getElementById(`${index}`).classList.remove("bi-play-fill");
    document.getElementById(`${index}`).classList.add("bi-pause-fill");
    makeAllBackgrounds();
    music.play();

    console.log(index);
})
/* This Part of code contains Voume Bar behaviour */





/* This Part of code contains scrolling of popsong and popartist */
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');

left_scrolls.addEventListener('click', ()=>{
    pop_artist.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    pop_artist.scrollLeft += 330;
})
/* This Part of code contains scrolling of popsong and popartist */





/* This Part of code contains Add Playlist and Toggle fullscreen */
const playlistSelected = document.getElementsByClassName('play_list_selected')[0];
const new_playlist_info = document.getElementsByClassName('new_playlist_info')[0];
const new_playlist_btn = document.getElementById('new_playlist_btn');
const play_list_options = document.querySelector('.play_list_options');


const addToPlaylist = () => {
    if (playlistSelected.style.display == 'none') {
        playlistSelected.style.display = 'block';
    } else {
        playlistSelected.style.display = 'none'
    }
    
}
const new_playlist_info_appears = () => {
    new_playlist_info.style.display = 'block';
    new_playlist_btn.style.display = 'none';
}




/* This Part of code contains Add Playlist and Toggle fullscreen */

const create_playlist_button_1 = document.getElementById('create_playlist_button_1');
const create_playlist_input_1 = document.getElementById('create_playlist_input_1');
const create_playlist_input = document.querySelector('.create_playlist_input');
const playListItems = document.querySelector('.playListItems');
const playListItems2 = document.querySelector('.playListItems2');
const add_playlist_button_1 = document.getElementById('add_playlist_button_1');
const playlist_area = document.querySelector('.playlist');

function createPlaylist() {
    create_playlist_button_1.style.display = 'none'
    create_playlist_input_1.style.display = 'block'
    add_playlist_button_1.style.display = 'block'

}
function addPlaylist() {
    create_playlist_button_1.style.display = 'block';
    create_playlist_input_1.style.display = 'none';
    add_playlist_button_1.style.display = 'none';


    let playList = document.createElement('div');
    playList.innerHTML = `<button class='playListItems' id="${create_playlist_input_1.value}"><span></span>${create_playlist_input_1.value} <i class="bi bi-x-circle"></i> </button>`;
    playlist_area.appendChild(playList);
    
    let selectPlaylistButton = document.createElement('div');
    selectPlaylistButton.innerHTML = `<button class='playListItems2' id='${create_playlist_input_1.value}'><i class="bi bi-check-circle"></i> ${create_playlist_input_1.value}</button>`;
    play_list_options.appendChild(selectPlaylistButton);
    
    saveData();
};
