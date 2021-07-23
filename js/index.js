const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);

function handlePlay(){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('Click play');
}

function handlePause(){
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    console.log('Click pausa');
}

function handleBackward(){
    $video.currentTime -= 10;
}

function handleForward(){
    $video.currentTime += 10;
}

const $progress = document.querySelector("#progress");
$video.addEventListener('loadedmetadata',handleLoaded);

function handleLoaded(){
    $progress.max = $video.duration;
    console.log("Duración: ",$video.duration);
}

$video.addEventListener('timeupdate',handleTimeUpdate);

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input',handleInput);

function handleInput(){
    $video.currentTime = $progress.value;
}