//For controlling the divs on Navbar

function hideandshow(target, target2,target3,target4,target5,target6) {
  	if(document.getElementById(target).style.display = 'block'){
   		document.getElementById(target2).style.display = 'none';
   		document.getElementById(target3).style.display = 'none';
      document.getElementById(target4).style.display = 'none';
      document.getElementById(target5).style.display = 'none';
      document.getElementById(target6).style.display = 'none';
  }
 };

 function hideshowCV(target, target2,target3,target4,target5,target6) {
   	if(document.getElementById(target).style.display = 'block'){
    		document.getElementById(target2).style.display = 'block';
    		document.getElementById(target3).style.display = 'none';
       document.getElementById(target4).style.display = 'none';
       document.getElementById(target5).style.display = 'none';
       document.getElementById(target5).style.display = 'none';
   }
  };

//To check if field is empty
function checkNamefield(){
  if (formGroup.name.value.length==0){
    document.getElementById("errName").innerHTML="*Please enter a name";
  }
  else if(formGroup.name.value.length!=0){
    document.getElementById("errName").innerHTML="";
  }
}

function checkContactfield(){
  if (formGroup.name.value.length==0){
    document.getElementById("errContact").innerHTML="*Please enter an email";
  }
  else if(formGroup.name.value.length!=0){
    document.getElementById("errContact").innerHTML="";
  }
}

function checkMessagefield(){
  if (formGroup.name.value.length==0){
    document.getElementById("errMessage").innerHTML="*Please enter a message";
  }
  else if(formGroup.name.value.length!=0){
    document.getElementById("errMessage").innerHTML="";
  }
}
