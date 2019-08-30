fetch('https://api.spacexdata.com/v3/launches')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });