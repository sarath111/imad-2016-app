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
//var counter = 0;

button.onclick = function () {
    //Create a req object
    var request=new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
                //successfull completion of req
                var counter = request.responseText;
                document.getElementById('count').innerHTML=counter.toString();
            }
        }
        
    };
    
    //Make a request to counter endpoint
    request.open('GET','http://sarath111.imad.hasura-app.io/counter',true);
    request.send(null);
    
};


var nameText=document.getElementById('name').value;
var submit=document.getElementById('submit_btn');
submit.onclick = function() {
    
};
