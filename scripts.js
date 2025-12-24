//Let write some Javascripts

const Circle =document.querySelector(".circle");
const BodyEl=document.querySelector("body");
const containerEl=document.querySelector(".container");
const toogleEl=document.querySelector('.toogle');
const heading=document.querySelector('h1');
const linksEl=document.querySelectorAll("a");
console.log(linksEl)

Circle.addEventListener("click",()=>{
Circle.classList.toggle('active');
BodyEl.classList.toggle("active");
containerEl.classList.toggle('active');
toogleEl.classList.toggle('active');
heading.classList.toggle('active');
linksEl.forEach(links=>{
  links.classList.toggle('active');
});
})

