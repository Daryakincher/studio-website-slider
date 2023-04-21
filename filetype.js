const images = [
  {
    src: "img/slaider1.jpg",
    city: "Rostov-on-Don <br />LCD admiral",
    apartmentArea: "81 m2",
    repairTime: "3.5 months",
    repairCost: "Upon request",
    link: "Rostov-on-Don, Admiral",
  },
  {
    src: "img/slaider2.jpg",
    city: "Sochi <br />Thieves",
    apartmentArea: "105 m2",
    repairTime: "4 months",
    repairCost: "Upon request",
    link: "Sochi, Thieves",
  },
  {
    src: "img/slaider3.jpg",
    city: "Rostov-on-Don <br />Patriotic",
    apartmentArea: "93 m2",
    repairTime: "3 months",
    repairCost: "Upon request",
    link: "Rostov-on-Don, Patriotic",
  },
];

function initSlaider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".projects-photo-slaider");
  let sliderCity = document.querySelector(".city");
  let sliderArea = document.querySelector(".area");
  let sliderTime = document.querySelector(".time");
  let sliderCost = document.querySelector(".cost");
  let sliderArrow = document.querySelectorAll(".projects-arrow");
  let sliderDots = document.querySelector(".projects-dot");
  let sliderLink = document.querySelector(".projects-list");

  initImages();
  initInfo();
  initArrow();
  initDots();
  initLink();

  if (options.autoplay) {
    initAutoplay();
  }

  function initImages() {
    images.forEach((image, index) => {
      let elementImg = `<img class="projects-photo-img n${index} ${
        index === 0 ? "active" : ""
      }" src="./${image.src}" alt="Project" data-index="${index}">`;
      sliderImages.innerHTML += elementImg;
    });
  }

  function initInfo() {
    images.forEach((elem, index) => {
      let elementCity = `<p class="projects-look-text n${index} ${
        index === 0 ? "active" : ""
      }" data-index='${index}'>${elem.city}</p>`;
      let elementArea = `<p class="projects-look-text n${index} ${
        index === 0 ? "active" : ""
      }" data-index='${index}'>${elem.apartmentArea}</p>`;
      let elementTime = `<p class="projects-look-text n${index} ${
        index === 0 ? "active" : ""
      }" data-index='${index}'>${elem.repairTime}</p>`;
      let elementCost = `<p class="projects-look-text n${index} ${
        index === 0 ? "active" : ""
      }" data-index='${index}'>${elem.repairCost}</p>`;

      sliderCity.innerHTML += elementCity;
      sliderArea.innerHTML += elementArea;
      sliderTime.innerHTML += elementTime;
      sliderCost.innerHTML += elementCost;
    });
  }

     
  function initArrow() {
    sliderArrow.forEach(arrow => {
      arrow.addEventListener("click", function () {
        let indexNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("back-arrow")) {
          nextNumber = indexNumber === 0 ? images.length - 1 : indexNumber - 1;
        } else {
          nextNumber = indexNumber === images.length - 1 ? 0 : indexNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dots = `<div class="dot-item n${index} ${
        index === 0 ? "active" : ""
      }" data-index='${index}'></div>`;
      sliderDots.innerHTML += dots;
    });
    sliderDots.querySelectorAll(".dot-item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + this.dataset.index).classList.add("active");
      })
    })
  }

  function initLink() {
    images.forEach((image, index) => {
      let link = `<a class="projects-list-item n${index} ${
        index === 0 ? "active" : ""
      }" href="#" data-index='${index}'>${image.link}</a>`;
      sliderLink.innerHTML += link;
    });
    sliderLink.querySelectorAll(".projects-list-item").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        moveSlider(this.dataset.index);
      });
    });
  }
  function moveSlider(numb) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + numb).classList.add("active");

    sliderCity.querySelector(".active").classList.remove("active");
    sliderCity.querySelector(".n" + numb).classList.add("active");

    sliderArea.querySelector(".active").classList.remove("active");
    sliderArea.querySelector(".n" + numb).classList.add("active");

    sliderTime.querySelector(".active").classList.remove("active");
    sliderTime.querySelector(".n" + numb).classList.add("active");

    sliderCost.querySelector(".active").classList.remove("active");
    sliderCost.querySelector(".n" + numb).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + numb).classList.add("active");

    sliderLink.querySelector(".active").classList.remove("active");
    sliderLink.querySelector(".n" + numb).classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", initSlaider);

  





  
