const rectangle = document.getElementById("center");

rectangle.addEventListener("mousemove", function(details){
    let rectangleLocation = rectangle.getBoundingClientRect();
    let insideRectVal = details.clientX - rectangleLocation.left;

    if(insideRectVal < (rectangleLocation.width / 2)){
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insideRectVal);
        gsap.to(rectangle, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        })
    }
    else{
        var blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.right, 0, 255, insideRectVal);
        gsap.to(rectangle, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        })
    }
})

rectangle.addEventListener("mouseleave", function(){
    gsap.to(rectangle, {
        backgroundColor: "white"
    })
})
