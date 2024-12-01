let range=document.getElementById("range");
let copy=document.getElementById("copy");
let nature=document.getElementById("nature");
let aplha=document.querySelectorAll("label");
let button=document.querySelector("button");
let scale=document.getElementById("rangeno.");
let uppercase=document.getElementById("Uppercase");
let lowercase=document.getElementById("Lowercase");
let special_char=document.getElementById("Special characters");
let numbers=document.getElementById("Numbers");
let genbtn=document.getElementById("genbtn");
let passbox=document.getElementById("passbox");
let alpha=document.querySelectorAll('input[type="checkbox"]');
let copybtn=document.getElementById("copy");


scale.textContent=range.value;
range.addEventListener('input', ()=>{
    scale.textContent=range.value;
});

nature.textContent="";
range.addEventListener('input', ()=>{
    if(range.value>4){
        nature.textContent="strong";
        nature.style.cssText="color:blue";
    }
    else if(range.value<4){
       nature.textContent="weak";
       nature.style.cssText="color:red";
    }
    else{
        nature.textContent="";
    }
});

genbtn.addEventListener('click', ()=>{
    passbox.value=generatepassword();
});

let upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchar="abcdefghijklmnopqrstuvwxyz";
let specialchar="@$&_";
let numb="0123456789";

function generatepassword(){
    let generate="";
    let allchars="";

    allchars+=uppercase.checked?upperchar:"";
    allchars+=lowercase.checked?lowerchar:"";
    allchars+=special_char.checked?specialchar:"";
    allchars+=numbers.checked?numb:"";
    
    for(let i=1;i<=range.value;i++){
    generate+=allchars.charAt(Math.floor(Math.random()*allchars.length));
}
        return generate;
}

copybtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(passbox.value);
    copybtn.title="Password Copied";
    copybtn.innerText="check";

    setTimeout(()=>{
        copybtn.title="";
        copybtn.innerHTML="content_copy";
     }, 2000);
});














