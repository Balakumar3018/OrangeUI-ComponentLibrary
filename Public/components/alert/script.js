const alertBox=document.querySelector(".close-alert");
const closeButton=document.querySelector(".close-button");
closeButton.addEventListener("click",()=>alertBox.style.display="none");
const resetButton=document.querySelector(".reset-button");
resetButton.addEventListener("click",()=>alertBox.style.display="")