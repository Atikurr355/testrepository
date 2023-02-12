function changeText(){
    document.getElementById("text").innerHTML="আমার প্রথম জাভাস্ক্রিপ্ট"
}

function newsAlert(){
    window.alert("Welcome to my Website!");
}

function Calculate(){
    var a = parseInt(document.getElementById("texta").value);
    var b = parseInt(document.getElementById("textb").value);
    var g = 0;
    if(a>b){
        g=a;
    }
    else if(b>a){
        g=b;
    }
    var c = a + b;
    document.getElementById("textc").value=""+c;
    document.getElementById("greater").value=""+g;
   }

   function saleCalculate(){
    var sa = parseInt(document.getElementById("textamount").value);
    var disc = 0.0;
    var np = 0.0;
    if(sa>0){
        if(sa<=5000){
            disc = sa*0.05;
        }
        else if(sa<=15000){
            disc = sa*0.15;
        }
        else if(sa<=30000){
            disc = sa*0.25;
        }
        else{
            disc= sa*0.4;
        }
        document.getElementById("textdisc").value=""+disc;
        var np = sa - disc;
        document.getElementById("textnp").value=""+np;
    }
    else{
        alert("Invalid sales Amount!");
    }
   }