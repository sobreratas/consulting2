const homeBtn = document.querySelector(".home-btn");
const aboutBtn = document.querySelector(".about-btn");
const aboutBox = document.querySelector(".about-box");
const clientsBtn = document.querySelector(".clients-btn");
const clientsBox = document.querySelector(".clients-box");
const contactBtn = document.querySelector(".contact-btn");
const contactBox = document.querySelector(".contact-box");
const here = document.querySelector(".here");
const body = document.querySelector("body");
const navBtns = document.querySelectorAll(".nav-btn");

homeBtn.addEventListener("click", (e) => {
  showHomeBox();
  manageNavBtnActiveState(e);
});

contactBtn.addEventListener("click", (e) => {
  showContactBox();
  manageNavBtnActiveState(e);
});

clientsBtn.addEventListener("click", (e) => {
  showclientsBox();
  manageNavBtnActiveState(e);
});

aboutBtn.addEventListener("click", (e) => {
  showAboutBox();
  manageNavBtnActiveState(e);
});

here.addEventListener("click", () => {
  showContactBox();
  manageNavBtnActiveStateWhenHereIsClicked();

});

function manageNavBtnActiveState(e){
  navBtns.forEach(navBtn => {
    navBtn.classList.remove("active");
  })
  e.target.classList.add("active");
}

function manageNavBtnActiveStateWhenHereIsClicked(){
  navBtns.forEach(navBtn => {
    navBtn.classList.remove("active");
  })
  contactBtn.classList.add("active");
}

function showHomeBox() {
  aboutBox.style.top = "100%";
  clientsBox.style.top = "100%";
  contactBox.style.top = "100%";
}

function showContactBox() {
  aboutBox.style.top = "100%";
  clientsBox.style.top = "100%";
  contactBox.style.top = "70px";
}

function showclientsBox() {
  aboutBox.style.top = "100%";
  contactBox.style.top = "100%";
  clientsBox.style.top = "70px";
}

function showAboutBox() {
  contactBox.style.top = "100%";
  clientsBox.style.top = "100%";
  aboutBox.style.top = "70px";
}
