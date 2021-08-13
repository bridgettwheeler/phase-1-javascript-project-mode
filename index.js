// /api/tags => Will return all tags. Use to poulate dropdown.

// /cat/:tag/says/:text?color=:color=> I think this will return a random cat with a :tag, :text, and :color selected. 

const formData = {
    //form.helloKitty
  };
  
  const configurationObject = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  fetch("https://cataas.com/cat/:tag/says/:text?color=:color", configurationObject)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    }); 