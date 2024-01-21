// audioElement.play();

let songIndex=0;
let audioElement = new Audio('./music/1.mp3');
let masterPlay =document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')

let songItems = document.getElementsByClassName('songItem')
let songs=[
    {songname:"salame isq1",filePath:"music/1.mp3",coverpath:"img/1.jpg"},
    {songname:"salame isq2",filePath:"music/2.mp3",coverpath:"img/2.jpg"},
    {songname:"salame isq3",filePath:"music/3.mp3",coverpath:"img/3.jpg"},
    {songname:"salame isq4",filePath:"music/4.mp3",coverpath:"img/4.jpg"},
    {songname:"salame isq5",filePath:"music/5.mp3",coverpath:"img/5.jpg"},
    {songname:"salame isq6",filePath:"music/6.mp3",coverpath:"img/6.jpg"},
    {songname:"salame isq7",filePath:"music/7.mp3",coverpath:"img/7.jpg"},
    {songname:"salame isq8",filePath:"music/8.mp3",coverpath:"img/8.jpg"},
]

// songItems.forEach((element) => {
//     element.getElementsByTagName('img[0]')
    
// });

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
        
        
        
        
        // masterPlay.classList.add("./img/pause-solid.svg")
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;


    }
})

//listen
audioElement.addEventListener('timeupdate',()=>{
    //update sek bar
    console.log("time update");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value =progress
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =( myProgressBar.value * audioElement.duration)/100;
})