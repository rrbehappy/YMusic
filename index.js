console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterplay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");
let progress = 0;
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Warriyo-Mortals",
    filePath: "./songs/1.mp3",
    coverPath: "./images/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "./songs/2.mp3",
    coverPath: "./images/2.jpg",
  },
  {
    songName: "DEAF KEV - INVINCIBLE",
    filePath: "./songs/3.mp3",
    coverPath: "./images/3.jpg",
  },
  {
    songName: "Different Heaven & Hide - My Heart",
    filePath: "./songs/4.mp3",
    coverPath: "./images/4.jpg",
  },
  {
    songName: "Janji-Heroes",
    filePath: "./songs/5.mp3",
    coverPath: "./images/5.jpg",
  },
  {
    songName: "Kesariya Tera ",
    filePath: "./songs/6.mp3",
    coverPath: "./images/6.jpg",
  },
  {
    songName: "ROYALTY",
    filePath: "./songs/7.mp3",
    coverPath: "./images/7.jpg",
  },
  {
    songName: "Fearless",
    filePath: "./songs/8.mp3",
    coverPath: "./images/8.jpg",
  },
  {
    songName: "Middle of the Night",
    filePath: "./songs/9.mp3",
    coverPath: "./images/9.jpg",
  },
  {
    songName: "RANJHA",
    filePath: "./songs/10.mp3",
    coverPath: "./images/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});
// audioElement.play();

//Handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//Listen to events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);

      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-play-circle");
      masterplay.classList.add("fa-pause-circle");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;

  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
