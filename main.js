let song_image = document.getElementById("cover_photo")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")



console.log(song_play)

let songs_list = [
    {
        Image : 'images/love.jpg',
        Song : 'music/aankhen bandh karke.mp3',
        Singer : 'Udit Narayan / Alka Yagnik'
    },
    {
        Image : 'images/love1.jpg',
        Song : 'music/Dhadang Dhang.mp3',
        Singer : 'Shreya Ghoshal / Sajid Wajid'
    },
    {
        Image : 'images/love3.jpg',
        Song : 'music/Gandibat.mp3',
        Singer : 'Mika Singh'
    },
    {
        Image : 'images/love4.jpg',
        Song : 'music/KisiseTum pyar.mp3',
        Singer : 'Kumar Sanu / Alka Yagnik'

    },
    {
        Image : 'images/love5.jpg',
        Song : 'music/lonely.mp3',
        Singer : 'Yo Yo Honey Singh'
    },
    {
        Image : 'images/love1.jpg',
        Song : 'music/main diwana.mp3',
        Singer : 'Udit Narayan'
    },
    {
        Image : 'images/love.jpg',
        Song : 'music/Mannata.mp3',
        Singer : 'Sonu Nigam / Kavita Krishnamurthy'
    },
    {
        Image : 'images/love3.jpg',
        Song : 'music/Marjaani.mp3',
        Singer : 'Sukhwinder Singh, Sunidhi Chauhan'
    },
    {
        Image : 'images/love4.jpg',
        Song : 'music/mera dil na todo.mp3',
        Singer : 'Abhijeet'
    },
    {
        Image : 'images/love5.jpg',
        Song : 'music/Pyaar Do Pyaar Lo.mp3',
        Singer : 'Mika Singh'
    },
    {
        Image : '',
        Song : 'music/Tujya Bhaktanana.mp3',
        Singer : ''
    },
    {
        Image : 'images/love1.jpg',
        Song : 'music/Bhai.MP3',
        Singer : 'Anu Malik'
    },
    {
        Image : 'images/love3.jpg',
        Song : 'music/Ye Tune Kya Kiya.mp3',
        Singer : 'Javed Bashir'
    }
]

let i=0;
let flag=false;

var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_singer.innerHTML = songs_list[i].Singer

song_play.addEventListener("click", function(){

    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    else{
        audio.pause()
        flag=false;
        console.log(flag)
    }
})

song_next.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
        
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
})

song_prev.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
    
})