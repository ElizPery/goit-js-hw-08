import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) { 
    localStorage.setItem(VIDEO_TIME, JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(localStorage.getItem(VIDEO_TIME));