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
    //Make a req to counter endpoint
    var request=new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readystate==XMLHttpRequest.DONE){
            if(request.status==200){
                //successfull completion of req
                var counter = request.responseText;
                counter = counter+1;
                document.getElementById('count').innerHTML=counter.toString();
            }
        }
        
    };
    
    //Rendering the variable in the correct span
   
    
};
