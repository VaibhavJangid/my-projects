// throttleFunction: Decreasing the number of execution of a particular code.

const throttleFunction=(func, delay)=>{
 let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now - prev> delay){
    prev = now;
    return func(...args); 
    }
  }
}

document.querySelector("#center").addEventListener("mousemove",
  throttleFunction((dets)=>{
    // less repeting code
    let div = document.createElement("div");
    div.classList.add("imagediv")
    
    // this create new div at tip of mouse
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';
    
    let img = document.createElement('img');
    img.setAttribute("src", "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")
    div.appendChild(img)

    // here we are adding the div in body.
    document.body.appendChild(div);

    // Animation through GSAP
    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: .6
    });

    gsap.to(img, {
      y: "100%",
      delay: .6,
      ease: Power2
    });

    // this will remove the div after 2 sec.
    setTimeout(function(){
      div.remove();
    }, 2000)

  }, 500)
);
