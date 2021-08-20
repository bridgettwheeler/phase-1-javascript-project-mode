
const kittyForm = document.querySelector(".kittyForm");

kittyForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const catTag = evt.target['tag'].value
    const catText = evt.target['text'].value
    const catColor = evt.target['color'].value


    fetch(`https://cataas.com/cat/${catTag}/says/${catText}?color=${catColor}`)
    .then(function(object) {
        document.querySelector("#catPic").src = object.url
        
    });  

    para = document.querySelector("#pokeInstructions")
    const node = document.createTextNode("Now, poke the kitty with your finger and listen to it's response!");
    para.appendChild(node)  

})

let imageArea = document.querySelector("#catPic")
imageArea.addEventListener('mouseover', (evt) => {
    evt.target.style.cursor = "pointer";
    
})

imageArea.addEventListener('click', (evt) => {
    var myAudio1 = document.getElementById("audio1");
    myAudio1.play()
    
})


    
