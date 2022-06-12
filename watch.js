





let orangecolor = document.querySelector('.orangecolor')
let headimg = document.querySelector('#imgscreen')
let blackcolor = document.querySelector('.blackcolor')
let purplecolor = document.querySelector('.purplecolor')
let graycolor = document.querySelector('.graycolor')
let pink = document.querySelector('.pink')






let time_btn = document.querySelector('.time-btn')
let heart_btn = document.querySelector('.heart-btn')

let show = document.querySelector('.show')
let hide = document.querySelector('.hide')


let heart = document.querySelector('.heart')
let heartcount = document.querySelector('.heartratecount')


let localtime = document.querySelector('.localtime')
let watchDisplay = document.querySelector('imgscreen')



// color change 
orangecolor.addEventListener('click', () => {
    headimg.src = 'imag/PTgQlim.png'
});
blackcolor.addEventListener('click', () => {
    headimg.src = 'imag/iOeUBV7.png'
});
purplecolor.addEventListener('click', () => {
    headimg.src = 'imag/xSIK4M8.png'
});
graycolor.addEventListener('click', () => {
    headimg.src = 'imag/Mplj1YR.png'
});
pink.addEventListener('click', () => {
    headimg.src = 'imag/Zygu7I3.png'
});




// time



time_btn.addEventListener('click', () => {
    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        localtime.innerHTML = time
    }, 1000)

    if (localtime.classList.contains('hide')) {
        localtime.classList.remove('hide');
        localtime.classList.add('show')
    }
    heart.classList.remove('show')
    heartcount.classList.add('hide')
}
)




// heart

heart_btn.addEventListener('click', () => {
    heart.classList.add('show')
    let randomNo = Math.floor(Math.random() * 100)
    heartcount.innerHTML = randomNo;
    localtime.classList.add('hide')
    if (heartcount.classList.contains('hide')) {
        heartcount.classList.remove('hide');
        heartcount.classList.add('show')
    }
})
