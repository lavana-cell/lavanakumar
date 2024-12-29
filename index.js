let bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    let posX = event.offsetX
    let posY = event.offsetY
    let spanEl = document.createElement("span");
    spanEl.style.left = posX+"px";
    spanEl.style.top = posY+"px";
    let size = Math.random()*100;
    spanEl.style.width = size+"px";
    spanEl.style.height = size+"px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
       spanEl.remove(); 
    },3000);
})