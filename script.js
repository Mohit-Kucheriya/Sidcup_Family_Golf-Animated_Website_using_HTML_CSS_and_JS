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



gsap.from("#about>img, #about-text", {
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 2
    }
})
gsap.from(".card", {
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#card-container",
        scroller: "body",
        start: "top 60%",
        end: "50% 50%",
        scrub: 2,
    }
})

gsap.from("#col1", {
    y: -60,
    x: -60,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#col1",
        scroller: "body",
        start: "top 40%",
        end: "start 35%",
        scrub: 4,
    }
})
gsap.from("#col2", {
    y: 70,
    x: 70,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#col1",
        scroller: "body",
        start: "top 40%",
        end: "start 35%",
        scrub: 4,
    }
})

gsap.from("#page4 h1", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "start 70%",
        scrub: 2,
    }
})


