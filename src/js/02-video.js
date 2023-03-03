import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) { 
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (seconds) {
    console.log(seconds)
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            console.log('Wrong time')
            break;

        default:
            console.log(error)
            break;
    }
});