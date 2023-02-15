// console.log("Hello from src/index.js!");

// const button = document.querySelector("#click-me");
// button.addEventListener("click", (event) => {
//   event.currentTarget.innerText = "Please wait";
//   event.currentTarget.setAttribute("disabled", "");
// });

// const results = document.querySelector("#results");

// const searchMovies = (query) => {
//   fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
//     .then(response => response.json())
//     .then((data) => {
//       data.Search.forEach((result) => {
//         const movieTag = `<li class="list-inline-item">
//           <img src="${result.Poster}" alt="">
//           <p>${result.Title}</p>
//         </li>`;
//         results.insertAdjacentHTML("beforeend", movieTag);
//       });
//     });
// };

// const form = document.querySelector("#search-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const input = event.currentTarget.querySelector(".form-control");
//   results.innerHTML = "";
//   searchMovies(input.value);
// });

const signUp = (event) => {
  event.preventDefault();
  const emailValue = document.querySelector("#email").value;
  const passwordValue = document.querySelector("#password").value;
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email: emailValue, password: passwordValue })
  })
    .then(response => response.json())
    .then((data) => {
      console.dir(data);
    });
};

const form = document.querySelector("#form");
form.addEventListener("submit", signUp);
