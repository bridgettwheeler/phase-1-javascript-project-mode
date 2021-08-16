
//Notes from instructor: You need an event listener on submit. listener for the form inside that. Take out the values from the form. Then fetch
  
//1. event listener for submit - stop the default and create var for input value. then fetch for those key/values. once the data is returned display it.
// use this three times to get input values: const newEmoji = evt.target['emoji'].value
//create a div for an image that is empty then change the source 
//need two more event listeners
const kittyForm = document.querySelector(".kittyForm")

kittyForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const catTag = evt.target['tag'].value
    const catText = evt.target['text'].value
    const catColor = evt.target['color'].value


    fetch(`https://cataas.com/cat/${catTag}/says/${catText}?color=${catColor}`)
    .then(function(object) {
        const catPic = document.querySelector(".catPic")
        catPic.img.src = object.url
    });  
    

})


    
