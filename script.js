var r = gsap.timeline()
r.from("h3", {
    y: -50,
    opacity: 0,
    delay: 0.2,
    duration: 1,
    stagger: 0.2
})


r.from("h1", {
    x: -50,
    opacity: 0,
    delay: 0.2,
    duration: 1,
    stagger: 0.2
})


r.from("img", {
    x: 100,
    rotate: 45,
    duration: 1,
    opacity: 0,
    stagger: 0.3
})