const actionBtn=document.querySelector(".btn-action")
const leftSnackbar=document.querySelector(".snackbar-left-button");
const centerSnackbar=document.querySelector(".snackbar-center-button");
const rightSnackbar=document.querySelector(".snackbar-right-button");
const snackBar=document.querySelector(".snackbar");
leftSnackbar.addEventListener("click",()=>{
    snackBar.style.marginLeft="-8px"
    snackBar.style.display="";
})
centerSnackbar.addEventListener("click",()=>{
    snackBar.style.marginLeft="350px"
    snackBar.style.display="";
})
rightSnackbar.addEventListener("click",()=>{
    snackBar.style.marginLeft="750px"
    snackBar.style.display="";
})
actionBtn.addEventListener("click",()=> snackBar.style.display="none")
