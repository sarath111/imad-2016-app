//console.log('Loaded!');
//alert("Hello");
//var txtfield=document.getElementById("id1");
//txtfield.innerHTML="Hello";
//move the img element
//var img=document.getElementById('img1');
//var marginleft=1;
//img.onclick= function() {
//  alert("clicked on img");
//  setInterval(moveright,50);
//};
//function moveright() {
//   marginleft=marginleft+1; 
//  img.style.marginLeft=marginleft+"px";
//}

var button=document.getElementById('counter');
button.onclick = function () {
    //Make a req to counter endpoint
    
    
    //Capture the response and store it in a variable
    
    //Rendering the variable in the correct span
    counter = counter+1;
    document.getElementById('count').innerHTML=counter.toString();
    
};
