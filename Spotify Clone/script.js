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

let pausePlayIcon = document.getElementById('masterPlay')

function playPause() {
    if (pausePlayIcon.classList.contains("fa-pause")) {
        music.pause();
        pausePlayIcon.classList.remove("fa-pause");
        pausePlayIcon.classList.add("fa-play");
    } else {
        music.play();
        pausePlayIcon.classList.remove("fa-play");
        pausePlayIcon.classList.add("fa-pause");
    }
}
