function openDrawerFunction() {
    setTimeout(() => {
      
      document.getElementById("side-drawer-div").classList.remove("d-none");
      document
        .getElementById("side-drawer-title-div")
        .classList.remove("d-none");
      document.getElementById("body").style.overflow = "hidden";
    }, 501);
    document.getElementById("toggle-button1").classList.add("d-none");
    document.getElementById("side-drawer").style.width = "100vw";
  }
  function closeDrawerFunction() {
    document.getElementById("side-drawer-div").classList.add("d-none");
    document
      .getElementById("side-drawer-title-div")
      .classList.add("d-none");
    document.getElementById("body").style.overflowY = "scroll";
    document.getElementById("side-drawer").style.width = "0";
    document.getElementById("toggle-button1").classList.remove("d-none");

  }

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})