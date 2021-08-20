
const kittyForm = document.querySelector(".kittyForm");

kittyForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const catTag = evt.target['tag'].value
    const catText = evt.target['text'].value
    const catColor = evt.target['color'].value
console.log(catColor)

    fetch(`https://cataas.com/cat/${catTag}/says/${catText}?color=${catColor}`)
    .then(function(object) {
        document.querySelector("#catPic").src = object.url
        console.log(object)
    });  
    

})
let imageArea = document.querySelector("#catPic")
imageArea.addEventListener('mouseover', (evt) => {
    evt.target.style.cursor = "pointer";
    
})

imageArea.addEventListener('click', (evt) => {
    // var audioElement = new Audio('Meow.wav')
    // audioElement.play()

    // var audio = document.createElement('audio');
    // audio.src = 'Meow.wav'
    // audio.play();

    var myAudio1 = document.getElementById("audio1");
    myAudio1.play()
    
})


    
