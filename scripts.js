const openEls = document.querySelector("[data-open]");
const closeEls = document.querySelector("[data-close]");
const isVisible = "is-visible";

//Revela el modal
openEls.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
});


//Cierra el modal en la X
closeEls.addEventListener("click", function() {
    this.parentElement.parentElement.classList.remove(isVisible);
  });

//Cierra el modal en cualquier lugar fuera del modal
document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

//Cierra el modal si se presiona ESC
document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});


//Codigo fuente original//

/* https://webdesign.tutsplus.com/es/tutorials/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500
*/
