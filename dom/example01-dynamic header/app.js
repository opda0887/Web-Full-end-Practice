// make the nav bar dynamic
let headerE = document.querySelector("header");
// let aE = document.querySelector("header nav ul li a");

window.addEventListener("scroll", () => {
  // window.pageYOffset: 取得滾輪滑動後的y座標
  let scrollTop = window.pageYOffset;
  
  // if header is not at the original position
  if (scrollTop != 0){
    headerE.style = "background-color: rgba(79, 58, 58, 0.93);\
      font-size: 1.25rem;";
  } else 
    headerE.style = "";

})