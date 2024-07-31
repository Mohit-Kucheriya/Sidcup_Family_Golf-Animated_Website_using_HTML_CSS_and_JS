gsap.to("#nav", {
    backgroundColor: "#000",
    height: "17vh",
    duration: "0.5",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub: 2,
    },
});



document.addEventListener("mousemove", function (dets) {
    let cursor = document.querySelector("#cursor");
    let cursorBlur = document.querySelector("#cursorBlur")
    let x = dets.clientX;
    let y = dets.clientY;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    cursorBlur.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
});

document.addEventListener("mouseenter", function (dets) {
    let cursor = document.querySelector("#cursor");
    cursor.style.opacity = 1;

});

document.addEventListener("mouseleave", function (dets) {
    let cursor = document.querySelector("#cursor");
    cursor.style.opacity = 0;

});