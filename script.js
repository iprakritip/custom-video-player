// Get our elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer")
const progress = player.querySelector(".progress")
const progressBar = player.querySelectorAll(".progress__filled")
const toggle = player.querySelector(".toggle")
const skipButtons = player.querySelectorAll("[data-skip]")
const ranges = player.querySelectorAll('.player__slider')

// Build functions

function togglePlay() {
    // if(video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // }

    // OR 
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.innerHTML = icon
}

function skip(){  
    video.currentTime += parseFloat(this.dataset.skip);
}

function hnadleRangeUpdate(){
    video[this.name]=this.value
    // console.log(this.value);
    // console.log(this.name);
}

// Hook up event listeners

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button=>[
    button.addEventListener('click', skip)
])
ranges.forEach(range=>{
    range.addEventListener("change", hnadleRangeUpdate)
    range.addEventListener("mousemove", hnadleRangeUpdate)
})