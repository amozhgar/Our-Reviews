// local reviews data
const reviews = [
  {
    id: 1,
    name: "Ameen Bahroz",
    job: "Back-End Developer",
    img: "ame.jpg",
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
  },
  {
    id: 2,
    name: "Amozhgar Saade",
    job: "Front-End Developer",
    img: "amo.JPG",
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ype and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    name: "Arkan Akram",
    job: "UX/UI Designer",
    img: "ark.jpg",
    text: "is simply dtting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    name: "Rizgar Hassan",
    job: "Software Developer",
    img: "r.jpg",
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the , when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
