console.log('Loaded!');
alert("Hello");
var txtfield=document.getElementById("id1");
txtfield.innerHTML="Hello";
//move the img element
var img=document.getElementById('img1');
img.onclick= function() {
  alert("clicked on img");
  img.style.marginLeft+="100px";
};
