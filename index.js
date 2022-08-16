console.log("welcome to spotify")
let audioElement = new Audio("spacenight.mp3")
let songl = [
    { songname: "spacenight", classpath: "spacenight.mp3", cover: "imgf/spacenight.jpg" },
    { songname: "loverboy", classpath: "loverboy.mp3", cover: "imgf/Astrocover.jpg" },
    { songname: "no sleep", classpath: "nosleep.mp3", cover: "imgf/ishqiacover.jpg" },
    { songname: "Astroworld", classpath: "Astroworld.mp3", cover: "imgf/Astrocover.jpg" },
    { songname: "lsd trip", classpath: "bellalsd.mp3", cover: "imgf/spacenight.jpg" },
    { songname: "ishqia", classpath: "isq.mp3", cover: "imgf/ishqiacover.jpg" },
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
let songs=document.getElementsByClassName("songs")
let flag = 0;
let cont = 0;
let index = 0;



const Makeallplay = () => {
    splay.forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
//information.
slis.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songl[i].cover;
    element.getElementsByClassName("name")[0].innerText = songl[i].songname
  
});
//bottom main bar
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
    if (progress == 100) {
        forwardi(index);
    }

})
progressbar.addEventListener("change", () => {
    progress = progressbar.value
    audioElement.currentTime = progress * audioElement.duration / 100
    console.log(progress)
})
//for each small bar.
splay.forEach((element) => {
    element.addEventListener("click", (e) => {
        Makeallplay();
        if (audioElement.paused && index != cont || audioElement.currentTime <= 0) {
            index = parseInt(e.target.id)
            info.innerHTML = `${songl[index].songname}-Bella`
            flag = index;
            audioElement.src = songl[index].classpath
            audioElement.play()

            e.target.classList.remove("fa-play-circle")
            e.target.classList.add("fa-pause-circle")
            masterplay.classList.remove("fa-play-circle")
            masterplay.classList.add("fa-pause-circle")
            gif.style.opacity = 1;

        }
        else if (audioElement.paused && index == cont || audioElement.currentTime <= 0) {
            audioElement.play()
            e.target.classList.remove("fa-play-circle")
            e.target.classList.add("fa-pause-circle")
            masterplay.classList.remove("fa-play-circle")
            masterplay.classList.add("fa-pause-circle")
            gif.style.opacity = 1;
        }
        else {
            let index2 = parseInt(e.target.id)
            console.log(index)
            console.log(index2)
            console.log(cont)
            if (index != index2) {
                audioElement.src = songl[index].classpath
                audioElement.pause()
                audioElement.src = songl[index2].classpath
                audioElement.play()
                info.innerHTML = `${songl[index2].songname}-Bella`
                e.target.classList.remove("fa-play-circle")
                e.target.classList.add("fa-pause-circle")
                masterplay.classList.remove("fa-play-circle")
                masterplay.classList.add("fa-pause-circle")
                gif.style.opacity = 1;
                index = index2
                flag=index2

            }
            else {
                audioElement.pause()
                masterplay.classList.remove("fa-pause-circle")
                masterplay.classList.add("fa-play-circle")
                Makeallplay();
                gif.style.opacity = 0;
                cont=index
            }
        }
    })
})


//forward and backward
var forwardi = () => {
    if (index == 9) {
        index = 0;
        flag = 0;
        info.innerHTML = `${songl[index].songname}-Bella`
        audioElement.src = songl[index].classpath
        audioElement.play()
        audioElement.currentTime = 0;

        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
        Makeallplay()
        let fpau = document.getElementById(index);
        fpau.classList.remove("fa-play-circle")
        fpau.classList.add("fa-pause-circle")
    }
    else {
        index += 1;
        flag += 1
        info.innerHTML = `${songl[index].songname}-Bella`
        audioElement.src = songl[index].classpath
        audioElement.play()
        audioElement.currentTime = 0;

        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
        Makeallplay();
        let fpau = document.getElementById(index);
        fpau.classList.remove("fa-play-circle")
        fpau.classList.add("fa-pause-circle")
    }
}
forward.addEventListener("click", () => {
    forwardi();
})
backward.addEventListener("click", () => {
    if (index == 0) {
        index = 9;
        flag = 9;
        info.innerHTML = `${songl[index].songname}-Bella`
        audioElement.src = songl[index].classpath
        audioElement.play()
        audioElement.currentTime = 0;
        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
        Makeallplay()
        let fpau = document.getElementById(index);
        fpau.classList.remove("fa-play-circle")
        fpau.classList.add("fa-pause-circle")
    }
    else {
        index -= 1;
        flag -= 1;
        info.innerHTML = `${songl[index].songname}-Bella`
        audioElement.src = songl[index].classpath
        audioElement.play()
        audioElement.currentTime = 0;
        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
        Makeallplay()
        let fpau = document.getElementById(index);
        fpau.classList.remove("fa-play-circle")
        fpau.classList.add("fa-pause-circle")
    }
})





