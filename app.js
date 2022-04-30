"use strict";
"use strict";
// selecting elements
const stickyNavbar = document.querySelector(".navbar-sticky");
const section1 = document.querySelector(".section-1");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links");
const mainNavLinks = document.querySelectorAll(".main-nav-links");

//implementing scrolling behavior and changing color of a link when it is active
const ScrollClick = function (links) {
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      links.forEach((ele) => (ele.style.color = "#fff"));
      link.style.color = "#20c997";
      sections.forEach(function (ele) {
        if (ele.id == e.target.getAttribute("href").slice(1)) {
          ele.scrollIntoView();
        }
      });
    });
  });
};
ScrollClick(navLinks);
// ScrollClick(mainNavLinks);
const changeOnScroll = function (links) {
  links.forEach(function (mainLink) {
    mainLink.style.color = "#fff";
    if (ele.getAttribute("id") == mainLink.hash.slice(1)) {
      mainLink.style.color = "#20c997";
    }
  });
};
//implementing changing of a link color in main nav when a window is scrolled up or down
window.addEventListener("scroll", function () {
  const coords = section1.getBoundingClientRect();
  if (coords.top < -135) {
    stickyNavbar.classList.remove("bg-transparent");
    stickyNavbar.classList.add("bg-black");
  } else {
    stickyNavbar.classList.add("bg-transparent");
    stickyNavbar.classList.remove("bg-black");
  }
  sections.forEach(function (ele) {
    const height = ele.getBoundingClientRect().height;
    if (
      ele.getBoundingClientRect().y < 5 &&
      ele.getBoundingClientRect().y > -height
    ) {
      mainNavLinks.forEach(function (mainLink) {
        mainLink.style.color = "#fff";
        if (ele.getAttribute("id") == mainLink.hash.slice(1)) {
          mainLink.style.color = "#20c997";
        }
      });
      navLinks.forEach(function (mainLink) {
        mainLink.style.color = "#fff";
        if (ele.getAttribute("id") == mainLink.hash.slice(1)) {
          mainLink.style.color = "#20c997";
        }
      });
    }
  });
});

// revealing elements
const reveal = function () {
  const reveals = document.querySelectorAll(".anime-div");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};
window.addEventListener("scroll", reveal);
