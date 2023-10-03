// const element=document.querySelector(".button");
// document.addEventListener("click",button_publish);
// // var model=document.querySelector(".model").innerHTML
// //const model
const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
