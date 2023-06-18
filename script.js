const container=document.getElementsByClassName("content-container");
console.log(container);
const answer=document.querySelectorAll(".answer");
console.log(answer);

Array.from(container).forEach(function(element,index,array){
   element.addEventListener('click',function(e){
    this.classList.toggle("active");
   })
})


