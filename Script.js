let show = document.querySelector("#show");
let hero =document.querySelector(".hero-section");
let scroll1 =document.getElementById("img1");
let scroll2 = document.getElementById("img2");

let scrollcontainer = document.querySelector(".card-section");


show.addEventListener("click" , function(){
    document.querySelector(".popup").classList.add("active");
   
});

document.querySelector("#close-btn").addEventListener("click" , function(){
    document.querySelector(".popup").classList.remove("active");
});


scrollcontainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
})

scroll1.addEventListener("click" , ()=>{
    scrollcontainer.scrollLeft -= 900;
})
scroll2.addEventListener("click" , ()=>{
    scrollcontainer.scrollLeft += 900;
})
