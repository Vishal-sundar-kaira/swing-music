console.log("welcome to spotify")
let audioElement = new Audio("spacenight.mp3")
let songl = [
    { songname: "spacenight", classpath: "spacenight.mp3", cover: "imgf/spacenight.jpg"},
    { songname: "loverboy", classpath: "loverboy.mp3", cover: "imgf/Astrocover.jpg" },
    { songname: "no sleep", classpath: "nosleep.mp3", cover: "imgf/ishqiacover.jpg" },
    { songname: "Astroworld", classpath: "Astroworld.mp3", cover: "imgf/Astrocover.jpg" },
    { songname: "lsd trip", classpath: "bellalsd.mp3", cover: "imgf/spacenight.jpg" },
    { songname: "ishqia", classpath: "isq.mp3", cover: "imgf/ishqiacover.jpg" }
]
let slis = Array.from(document.getElementsByClassName("songitems"))
let masterplay = document.getElementById("masterc")
let smallplay = document.getElementById("small")
let progressbar = document.getElementById("barrange")
let gif = document.getElementById("gif")
let splay = Array.from(document.getElementsByClassName("splay"))
let info = document.getElementById("info")
let forward = document.getElementById("forward")
let backward = document.getElementById("backward")
let flag = 0;



const Makeallplay = () => {
    splay.forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
slis.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songl[i].cover;
    element.getElementsByClassName("name")[0].innerText = songl[i].songname
});
masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
        let paus = document.getElementById(flag)
        paus.classList.remove("fa-play-circle")
        paus.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause()
        masterplay.classList.remove("fa-pause-circle")
        masterplay.classList.add("fa-play-circle")
        Makeallplay();
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener("timeupdate", () => {  //timeupdate increase time.
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    progressbar.value = progress;

})
progressbar.addEventListener("change", () => {
    progress = progressbar.value
    audioElement.currentTime = progress * audioElement.duration / 100
    console.log(progress)
})

splay.forEach((element) => {
    element.addEventListener("click", (e) => {
        Makeallplay();
        index = parseInt(e.target.id)
        flag = index;
        info.innerHTML = `${songl[index].songname}-Bella`
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.src = songl[index].classpath
            audioElement.play()
            audioElement.addEventListener("timeupdate", () => {  //timeupdate increase time.
                console.log("timeupdate")
                progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
                progressbar.value = progress;
            })
            e.target.classList.remove("fa-play-circle")
            e.target.classList.add("fa-pause-circle")
            masterplay.classList.remove("fa-play-circle")
            masterplay.classList.add("fa-pause-circle")
            gif.style.opacity = 1;

        }
        else {
            audioElement.pause()
            e.target.classList.remove("fa-pause-circle")
            e.target.classList.add("fa-play-circle")
            masterplay.classList.remove("fa-pause-circle")
            masterplay.classList.add("fa-play-circle")
            gif.style.opacity = 0;
        }
    })
})



forward.addEventListener("click", () => {
    if (index == 5) {
        index = 0;
        info.innerHTML = `${songl[index].songname}-Bella`
        audioElement.src = songl[index].classpath
        audioElement.play()
        audioElement.currentTime = 0;
        audioElement.addEventListener("timeupdate", () => {  //timeupdate increase time.
            console.log("timeupdate")
            progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
            progressbar.value = progress;
        })
        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
        Makeallplay()
        let fpau=document.getElementById(index);
        fpau.classList.remove("fa-play-circle")
        fpau.classList.add("fa-pause-circle")
    }
    else {
        index += 1;
        info.innerHTML = `${songl[index].songname}-Bella`
        audioElement.src = songl[index].classpath
        audioElement.play()
        audioElement.currentTime = 0;
        audioElement.addEventListener("timeupdate", () => {  //timeupdate increase time.
            console.log("timeupdate")
            progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
            progressbar.value = progress;
        })
        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
        Makeallplay();
        let fpau=document.getElementById(index);
        fpau.classList.remove("fa-play-circle")
        fpau.classList.add("fa-pause-circle")
    }
})
backward.addEventListener("click", () => {
    if (index == 0) {
        index = 5;
        info.innerHTML = `${songl[index].songname}-Bella`
        audioElement.src = songl[index].classpath
        audioElement.play()
        audioElement.currentTime = 0;
        audioElement.addEventListener("timeupdate", () => {  //timeupdate increase time.
            console.log("timeupdate")
            progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
            progressbar.value = progress;
        })
        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
        Makeallplay()
        let fpau=document.getElementById(index);
        fpau.classList.remove("fa-play-circle")
        fpau.classList.add("fa-pause-circle")
    }
    else {
        index -= 1;
        info.innerHTML = `${songl[index].songname}-Bella`
        audioElement.src = songl[index].classpath
        audioElement.play()
        audioElement.currentTime = 0;
        audioElement.addEventListener("timeupdate", () => {  //timeupdate increase time.
            console.log("timeupdate")
            progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
            progressbar.value = progress;
        })
        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
        Makeallplay()
        let fpau=document.getElementById(index);
        fpau.classList.remove("fa-play-circle")
        fpau.classList.add("fa-pause-circle")
    }
})




