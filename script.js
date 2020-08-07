 var overlay = document.querySelector('#overlay');

 var closebtn = document.querySelector('#closebtn');

 var tl2 = gsap.timeline();

 closebtn.addEventListener('click', function(){
     tl2.reverse();
 });
 let timeline = gsap.timeline();


timeline.to('#overlay',{
    width : 4000,
    height: 4000,
    duration: 1,
    ease:'ease.inOut'
})
.to('#overlay h1 span',{
    top:0,
    duration: 1,
    ease:'ease.inOut'
})

.to('#overlay h1 span',{
    top:'-100%',
    duration: 1,
    delay:.2,
    ease:'ease.inOut'
})
.to('#overlay',{
    opacity:0,
    duration: 2,
    onComplete: function(){
        overlay.style.display ='none';
    },
    ease:'ease.inOut'
})

timeline.from('#nav h3',{
    opacity:0,
    duration:1,
    x:40,
    ease:'expo.inOut'
})
.from('#nav #icon i',{
    stagger:.2,
    opacity:0,
    duration:.8,
    x:20,
    ease:'expo.inOut'
})

.from('#mainDets .line',{
    stagger:.3,
    width:.3,
    duration: 2,
    delay:-1.5,
    ease:'expo.inOut'
})

.from('#mainDets .mainanim',{
    stagger:.3,
    y:15,
    opacity:0,
    duration: 1.5,
    delay:-1.2,
    ease:'expo.inOut'
})

.from('#mainDets #scroll',{
    opacity:0,
    duration: 1.2,
    delay:-1,
    ease:'expo.inOut'
})

.from('#right #links a',{
    stagger:.3,
    opacity:0,
    x:30,
    duration: 1.2,
    delay:-2,
    ease:'expo.inOut'
})

function animateThelayer(){
    tl2.to('#rightoverlay',{
        duration:1.5,
        ease:'expo.inOut',
        left:0,
        onComplete: function(){
            var worksample = document.querySelector('#worksample');
            worksample.style.display ='initial';
        }
    })
    .from('#rightoverlay h3',{
        duration:1.5,
        x:40,
        delay:-.5,
        opacity:0,
        ease:'expo.inOut'
    })
    .from('#rightoverlay h3 span',{
        duration:1,
        delay:-.8,
        opacity:0,
        ease:'expo.inOut'
    })
    .from('#rightoverlay .work',{
        duration:.5,
        opacity:0,
        ease:'expo.inOut'
    })
    .from('#rightoverlay .work h4',{
        stagger:.3,
        duration:1,
        x:30,
        opacity:0,
        ease:'expo.inOut'
    })
    .from('#rightoverlay .work .holder img',{
        stagger:.3,
        duration:1,
        delay:-1.4,
        x:'100%',
        ease:'expo.inOut'
    })
}

// animateThelayer();  

gsap.from('#center img', {
    opacity:0,
    duration:2,
    delay:7.5,
    ease: 'expo.inOut'
})
