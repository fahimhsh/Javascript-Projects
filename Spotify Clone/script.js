var music = new Audio("./siu.mp3");
// Store Musics in Array

const songs = [
    {
        id: '1',
        songName: `Koshtooo <br>
        <div class="artist_name">Shahriar Fahim</div>`,
        poster: './img/fahim.jpg',
    },
];

Array.from(document.getElementsByClassName('song_item')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

const pausePlayIcon = document.getElementById('masterPlay');
console.log(pausePlayIcon)

function playPause() {
    if (pausePlayIcon.classList.contains("bi-pause-fill")) {
        music.pause();
        pausePlayIcon.classList.remove("bi-pause-fill");
        pausePlayIcon.classList.add("bi-play-fill");
    } else {
        music.play();
        pausePlayIcon.classList.remove("bi-play-fill");
        pausePlayIcon.classList.add("bi-pause-fill");
    }
}
