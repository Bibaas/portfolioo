var typed = new Typed('#typed', {
  strings: ['Bibas Thapa',],
  typeSpeed: 50,
  loop: true
});
var typed = new Typed('#typedd', {
  strings: ['eCommerce Expert'],
  typeSpeed: 50,
  loop: true
});

// document.getElementById("testing1").style.color="red";
// document.getElementsByClassName("testing0").style.color="red";

document.getElementById("right-btn").addEventListener("click", function(){
  console.log("clicked");
  // document.getElementById("check").style.color = "red";
  document.querySelector(".feedback").scrollBy({
    left: 100 ,
    behavior : "smooth"
  })
})


document.getElementById("left-btn").addEventListener("click", function(){
  console.log("clicked");
  // document.getElementById("check").style.color = "red";
  document.querySelector(".feedback").scrollBy({
    left: -100,
    behavior : "smooth"
  })
})


function validateForm(){
  var name = document.getElementById("name").value;
  // var phone = document.getElementById("phone").value;
  // var phone = document.getElementById("phone").value;
  // var phone = document.getElementById("phone").value;
  var pass1 = document.getElementById("password1").value;
  var pass2 = document.getElementById("password2").value;
  if(name.length == 0){
    document.getElementById("name-error").innerHTML = "Name is required";
    return false;
  }else{
    document.getElementById("name-error").innerHTML = "";
  }
  if(pass1.length == 0){
    document.getElementById("password1-error").innerHTML = "Password is required";
    return false;
  }
  if(pass1.length < 8){
    document.getElementById("password1-error").innerHTML = "Must contain more than 8 letters";
    return false;
  }else{
    document.getElementById("password1-error").innerHTML = "";
  }
  if(pass2.length == 0){
    document.getElementById("password2-error").innerHTML = "COnfirm password";
  }
  if(pass1 != pass2){
    document.getElementById("password2-error").innerHTML = "Passwords must match";
    return false;
  }
  else{
    document.getElementById("password2-error").innerHTML = "";
  }
}