import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    const currentTime = event.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
};

const savedCurrentTime = localStorage.getItem("videoplayer-current-time");
if (savedCurrentTime !== null) {
    const currentTime = JSON.parse(savedCurrentTime);
    player.setCurrentTime(currentTime);
};