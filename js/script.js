function validate(){
    var a= document.getElementById("a1");
    var b= document.getElementById("b1");
    var c1= document.getElementById("c1");
    var d1= document.getElementById("d1");
    if(a.value.trim()=="") {
        alert("Enter the username");
        a.style.border = "2px solid red";
        //  document.getElementById("one").style.visibility = "visible";
        return false;
    }
    else  if(b.value.trim()=="") {
        alert("Enter the password");
        b1.style.border = "2px solid red";
        //  document.getElementById("two").style.visibility = "visible";
        return false;
    }
    else if (c1.value.trim()=="") {
        c1.style.border = "2px solid red";
        // document.getElementById("two").style.visibility = "visible";
        return false;
    }
    else if(d1.value.trim()==""){
        b.style.border = "2px solid red";
        document.getElementById("two").style.visibility = "visible";
    }
    else {

        alert("Submitted sucessfully");
        alert(" Thanku!")
        return true;
    }
}


