document.querySelector("#rect").addEventListener("mousemove", function(details){
    let rect = document.querySelector("#rect")

    let gap = gsap.utils.mapRange(
        0, 
        window.innerWidth, 
        100 + rect.getBoundingClientRect().width/2, // this step is to stop card at 0th positon and  get the card half inside.
        window.innerWidth - (100 + rect.getBoundingClientRect().width/2),
        details.clientX
    )
    gsap.to('#rect',{
        left: gap,
        ease: Power3
    }) 
})