const btn = document.querySelector("#btn");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

btn.addEventListener("click", () => {
  // [img1.src, img2.src] = [img2.src, img1.src];

  var temp = img1.src;
  var temp2 = img2.src;
  img1.src = temp2;
  img2.src = temp;
});
var h2= document.createElement("h2"); 
var form= document.querySelector("form");
// var nameInput= document.querySelector("#name");
// var ageInput= document.querySelector("#age");
var inps= document.querySelectorAll("input[type='text'], input[type='number']");
form.addEventListener("submit", (event)=>{
  event.preventDefault();
  console.log(nameInput.value);
  console.log(ageInput.value); 
  if(nameInput.value ==="" || ageInput.value ===""){
    // alert("Please fill in all fields");
    document.querySelector("form").appendChild(h2);
    h2.textContent="Please fill in all fields";
    h2.style.color="red";
  }
  else{ 
    alert("Form submitt ed successfully");
  }
})