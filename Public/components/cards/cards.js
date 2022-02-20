const CloseBtn=document.querySelector(".closebtn")
const hideElement=document.querySelector(".dismissible-card")
const resetCardButton=document.querySelector(".card-button");
CloseBtn.addEventListener("click",()=> hideElement.style.display="none");
resetCardButton.addEventListener("click",()=>hideElement.style.display="");