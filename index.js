const axios = require('axios');


let fact;
const getFacts = () => {
  // Make a request for a user with a given ID
  axios.get('https://catfact.ninja/fact', {
      headers: {
        "Content-Type": "application/json"
      },
      mode: "no-cors"
    })
    .then(function (response) {
      // handle success
      document.getElementById("fact").innerHTML = response.data.fact;
      document.getElementById('kitten').src = `http://placekitten.com/${Math.floor(Math.random() * 600 + 200)}/${Math.floor(Math.random() * 600 + 200)}`
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   
}

catButton = document.querySelector(".catButton");
catButton.addEventListener('click', () => {
  console.log("button clicked");
  getFacts();
})













// let gridHTML = "";

// for (let row = 0; row < 25; row++) {
//     gridHTML += `
//     <div class="custom-row">
//     `;

//     for (let column = 0; column < 60; column++) {
//         gridHTML += `<div class="column border"></div>`;
//     }
     
//     gridHTML += `
//     </div>
//     `;
    
// }

// canvas.innerHTML = gridHTML;



