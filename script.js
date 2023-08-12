function message(){
  alert("You cart is empty")
}
function del(){
  const message= document.querySelector(".alert")
  message.remove()
  console.log(message)
}
function change(){
  img="images/assets/succulents-2.jpg"
  document.querySelector(".bloc-left2 img").src=img;
}
function ret(){
  img="images/assets/succulents-1.jpg"
  document.querySelector(".bloc-left2 img").src=img;
}