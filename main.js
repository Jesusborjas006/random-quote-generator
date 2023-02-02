const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const btn = document.querySelector(".btn");

window.addEventListener("load", () => {
  fetchApi()
})
btn.addEventListener("click", getNextQuote)

function getNextQuote() {
  fetchApi()
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0e6f9b1cbbmshdefcb8c0cf0e83bp177fafjsnb2f574cee52b",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

function fetchApi() {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    .then((response) => response.json())
    .then((data) => {
      const newQuote = new Quote(data);
      quote.innerHTML = `"${newQuote.content}"`;
      person.innerHTML = newQuote.person;
    })
    .catch((err) => console.error(err));
}




