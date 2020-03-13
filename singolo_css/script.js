let left = -20;
let right = 0;
let left_arr = [0,900];
let poz_left = left;
let poz_right = right;
const color = ['#648BF0','#f06c64'];
const headerList = document.querySelector('.header__list');
const slider_first = document.querySelector('.slider-block__slider__first');
const slider_second = document.querySelector('.slider-block__slider__second');
const chek_right = document.querySelector("body > section.slider-block > div > div:nth-child(3) > a");



let back_start = document.querySelector("body > section.slider-block");
back_start.style.background = "linear-gradient(90deg, #323746 0%, #f06c64 0%)";
let back = document.querySelectorAll("body > section.slider-block");

const chek_left = document.querySelector("body > section.slider-block > div > div:nth-child(1) > a");

//смена цвета ссылок при нажатии
headerList.addEventListener('click', (event) =>  {
    headerList.querySelectorAll('.header__list__item')
    .forEach(el => el.classList.remove('header__list__item_mod'));
    event.target.classList.add('header__list__item_mod');
} )
// плавный переход якорей
for (let scroll of headerList.querySelectorAll('a')) {
    scroll.addEventListener('click', (event) => {
        event.preventDefault()
        const sectionID = scroll.getAttribute('href').substr(1)
        document.getElementById(sectionID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
    })
};

// SLIDER
chek_left.addEventListener('click', (() => {
    let l1 = -left_arr[0];
    let l2 = left_arr[0]-1800;
    let interval = setInterval(() =>
    back.forEach((item) =>{
        let deg = 90;
        item.style.background = `linear-gradient(${deg}deg, ${color[0]} ${poz_left}%, ${color[1]} ${poz_right}%)`;
        slider_first.style.left = `${l1}px`;
        slider_second.style.left = `${l2}px`;
        if (poz_left === 100){
            left_arr = left_arr.reverse();
            color.reverse();
            poz_left = left;
            poz_right = right;
            clearInterval(interval);
            return ;
        }
        l2= l2+900/240;
        l1= l1+900/240;
        poz_right+=0.5  ;
        poz_left+=0.5;
    })
    , 3)
}))
chek_right.addEventListener('click', 
    (() => {
        let l1 = left_arr[0];
        let l2 = -left_arr[0];
        let interval = setInterval(() => { 
            back.forEach((item) =>{
                let deg = -90;
                item.style.background = `linear-gradient(${deg}deg, ${color[0]} ${poz_left}%, ${color[1]} ${poz_right}%)`;
                slider_first.style.left = `${l1}px`;
                slider_second.style.left = `${l2}px`;
                if (poz_left === 100){
                    left_arr = left_arr.reverse();
                    color.reverse();
                    poz_left = left;
                    poz_right = right;
                    clearInterval(interval);
                    return ;
                }
                l2= l2-900/240;
                l1= l1-900/240;
                poz_right+=0.5  ;
                poz_left+=0.5;
            })
        }, 3)

    })
)

//DISPLAY
let dis_vert = document.querySelector('.slider-block__vertical');
dis_vert.addEventListener(('click'),
    (() => {
        if(document.querySelector('.slider-block__vertical__body img').style.display === "none" ){
            document.querySelector('.slider-block__vertical__body img').style.display = '';
        }
        else{ 
            document.querySelector('.slider-block__vertical__body img').style.display = 'none'
    }
    })
)
let dis_hor = document.querySelector('.slider-block__horizontal');
dis_hor.addEventListener(('click'),
    (() => {
        if(document.querySelector('.slider-block__horizontal__body img').style.display === "none" ){
            document.querySelector('.slider-block__horizontal__body img').style.display = '';
        }
        else{ 
            document.querySelector('.slider-block__horizontal__body img').style.display = 'none'
    }
    })
)
   


