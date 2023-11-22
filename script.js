/*SEARCH*/
//This code handles the click event on an element with the class "circle" and performs a series of actions, including toggling classes on various elements and removing classes from the element with the class "box".
document.querySelector(".circle").addEventListener("click", () => {
    for (let i = 0; i <= 3; i++) {
      document.getElementsByClassName("nav-items")[i].classList.remove("show-menu");
      document.getElementsByClassName("box-line")[i].classList.remove("box-line-show");
    }
    document.querySelector(".box").classList.remove("box-show");
    document.querySelector(".add").classList.toggle("go");
    document.querySelector(".search").classList.toggle("search-focus");
    document.querySelector(".search").focus();
    document.querySelector(".circle").classList.toggle("color");
    document.querySelector(".line1").classList.toggle("move");
    document.querySelector(".line2").classList.toggle("mov");
    document.querySelector(".effect").classList.toggle("big");
});

/*MENU*/
//This code handles the click event on an element with the class "menu" and performs a series of actions, including toggling classes on elements with the classes "nav-items" and "box-line" and removing a class from an element with the class "box".
document.querySelector(".menu").addEventListener("click", () => {
  for (let i = 0; i <= 3; i++) {
    document.querySelector(".box").classList.remove("box-show");
    document.getElementsByClassName("nav-items")[i].classList.toggle("show-menu");
    document.getElementsByClassName("box-line")[i].classList.remove("box-line-show");
  }
});

/*GALLERY*/
//This code shows or hides a dialog box (represented by the element with the class "box") and toggles the classes of the elements with the classes "box-line" and "nav-items" when the element with the class "gallery" is clicked.
document.querySelector(".gallery").addEventListener("click", () => {
  document.querySelector(".box").classList.toggle("box-show");
  for (let i = 0; i <= 3; i++) {
    document
      .getElementsByClassName("box-line")
      [i].classList.toggle("box-line-show");
    document
      .getElementsByClassName("nav-items")
      [i].classList.remove("show-menu");
  }
});