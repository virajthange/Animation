gsap.from(
    ".imgcont img",
    {
        ease:Expo.easeInOut,
        // x:600,
        opacity:0,
        scale:0.3,
        rotate:90,
        repeat:-1,
        stagger:2,
        duration:2,
        yoyo:true
    }
)
gsap.to(
    ".imgcont img",
    {
        ease:Expo.easeInOut,
        width:"100%",
        duration:2,
        stagger:2,
        repeat:-1,
        yoyo:true
    }
)

gsap.to(
    ".text h1",
    {
        top:-50,
        duration:2,
        stagger:2,
        repeat:-1,
        yoyo:true
    }
)