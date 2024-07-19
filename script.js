let num =document.getElementById("num");
let colorbar = document.getElementById("color");
let dropdown = document.getElementById("shape");
let addbtn = document.getElementById("addbtn");
let cont = document.querySelector(".cont");

addbtn.addEventListener("click" , function (){
  let n = num.value;
  let color = colorbar.value;
  let shape = dropdown.value ;
//   console.log(n , color,shape);

cont.innerHTML= "";

for (let i = 1; i<=n ; i++){
let div = document.createElement("div");
div.classList.add(shape);
div.style.backgroundColor = color ;

cont.appendChild(div);

}

});
