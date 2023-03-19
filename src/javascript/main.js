const navContentLink = document.querySelectorAll('.navContentLink');
function linkAct() {
    navContentLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

navContentLink.forEach(n=>n.addEventListener('click', linkAct));

TweenMax.from('.leftMenu',1,{
    delay:1.5,
    opacity:0,
    x:-50,
    ease:Expo.easeInOut
})

TweenMax.from('.navContentLinks ul li',1,{
    delay:1.5,
    opacity:0,
    x:100,
    ease:Expo.easeInOut
},0.08)


TweenMax.from('.largerTextContent',1,{
    delay:2,
    opacity:0,
    y:-100,
    ease:Expo.easeInOut
})


TweenMax.from('.descripContent',1,{
    delay:2,
    opacity:0,
    x:100,
    ease:Expo.easeInOut
})

gsap.timeline().to('.overlay',2,{
    yPercent:-100,
    ease:Expo.easeInOut
})

