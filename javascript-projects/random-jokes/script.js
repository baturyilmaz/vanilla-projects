const button = document.querySelector("button");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

function getJoke() {
  // const xhr = new XMLHttpRequest();
  // xhr.open("GET", "http://api.icndb.com/jokes/random", true);
  // xhr.onload = function () {
  //   if (this.status === 200) {
  //     const joke = JSON.parse(this.responseText);
  //     if (joke.type === "success") {
  //       h3.innerHTML = joke.value.joke;
  //     }
  //   } else {
  //     console.log("Something went wrong");
  //   }
  // };
  // xhr.send();

  fetch("http://api.icndb.com/jokes/random")
    .then((respond) => respond.json())
    .then((data) => {
      h3.innerHTML = data.value.joke;
    })
    .catch((e) => console.log("Something went wrong."));
}

button.addEventListener("click", getJoke);
