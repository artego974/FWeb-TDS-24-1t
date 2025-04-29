const elemts = document.querySelectorAll(".hidden");
const header = document.querySelector("header");
const sentinela = document.querySelector("#sentinela");

const myO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

elemts.forEach((elemnt) => {
  myO.observe(elemnt);
});

const headerObserver = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}, {
  rootMargin: "-100% 0px 0px 0px",
  threshold: 0
});

headerObserver.observe(sentinela);
