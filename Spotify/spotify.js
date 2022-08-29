

//song List
let songIndex = 0;
let audioElement = new Audio('music/1.mp3');

let myprogressbar = document.getElementById("range");
let songItem = Array.from(document.getElementsByClassName("songitem"));

let song = [
    {songName: "2 Raflaan",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName: "Thaa",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName: "Evergreen",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName: "Sira 320",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName: "Raatan Lambiyan",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName: "Dil Galti Kar",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName: "Mast Nazron Se",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName: "Tribute to Legend",filePath:"8.mp3",coverPath:"6.jpg"},
    {songName: "Baapu",filePath:"9.mp3",coverPath:"6.jpg"},
    {songName: "Fuck Em All ",filePath:"10.mp3",coverPath:"6.jpg"},
    {songName: "Never Fold",filePath:"11.mp3",coverPath:"6.jpg"},
    {songName: "The Last Ride",filePath:"12.mp3",coverPath:"6.jpg"},
    {songName: "SYL",filePath:"13.mp3",coverPath:"6.jpg"},
    {songName: "295 ",filePath:"14.mp3",coverPath:"6.jpg"}
    

]
songItem.forEach((element,i) => {
    element.getElementsByTagName("img").src=song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
   
    
});
//play pause click
let play = () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        changeDirection();
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        changeDirection();
    }
}


//Time update Event
audioElement.addEventListener('timeupdate',()=>{
    

//Update Seek Bar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myprogressbar.value = progress;
document.getElementById("timerun").innerHTML = progress;
})

let change = () =>{
    audioElement.currentTime = myprogressbar.value *audioElement.duration/100;
}

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        play().classList.remove("fa-play-circle");
        play().classList.add("fa-pause-circle");
    })
})

//Next Click
let next = () =>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }

        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        changeDirection();
        play().classList.remove("fa-play-circle");
        play().classList.add("fa-pause-circle");
}


//Previous Click

let previous = () =>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }

        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        changeDirection();
        play().classList.remove("fa-play-circle");
        play().classList.add("fa-pause-circle");
}

function changeDirection(event){
    const keyPressed = event.keyCode;
    
    const pause = 32 ;
    const previous = 38 ;
    const next = 39 ;
    
}