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
   

let port = document.querySelectorAll(".portfolio__image");
let port_list = document.querySelector('.portfolio__list');
let port_link = document.querySelector('.portfolio__list').querySelectorAll('a');
let port_imgs = document.querySelector('.portfolio__images').querySelectorAll('img');

port_link.forEach( el => el.addEventListener('click', (event) =>  {
    const port_arr = [];
    port.forEach(el => el.style.order = '')
    port_imgs.forEach((el) => {port_arr.push(el.className.split('').splice(18).join(''));
        for(let i=0; i< port_arr.length; i++){
            port[i].id = port_arr[i];
        }
        })
    console.log(port_arr);
    port_link.forEach(el => el.classList.remove('portfolio__link_color'));
    event.target.classList.add('portfolio__link_color');
   // let activ_link = port_list.querySelector('.portfolio__link_color')
    switch(event.target){
        case port_link[0]:
            port.forEach(
                (item)=>{
                    item.style.order = item.id;
            })
            break;
        case port_link[1]:
           port_arr.sort((a, b) => a - b ).reverse();
           for (let i = 0 ; i < port_arr.length; i++){
               port[i].style.order = port_arr[i];
           }
            
            break;
            case port_link[2]:
                let p_3 =  port_arr.splice(4,4);
                console.log(p_3);
                console.log(port_arr);
                port.forEach(
                    (item) => {
                        for (let i=0 ; i<p_3.length; i++){
                        if(item.id === p_3[i] )
                        {
                            item.style.order = '-1';
                        }
                        }
                    }
                )
            break;
            case port_link[3]:
                let p_4 =  port_arr.splice(4);
                console.log(p_4);
                console.log(port_arr);
                port.forEach(
                    (item) => {
                        for (let i=0 ; i<p_4.length; i++){
                        if(item.id === p_4[i] )
                        {
                            item.style.order = '-1';
                        }
                        }
                    }
                )
            break;
    }
    
})
)


let port_img = document.querySelector('.portfolio__images');

port_imgs.forEach((el) => {
    el.addEventListener('click', (event) =>  {
        port_imgs.forEach(el => el.id = '');
        event.target.id='portfolio__image_activ';
    } )
} )


// нахождения номера кортинки
//document.querySelector('.portfolio__images').querySelectorAll('img')[11].className.split('').splice(18).join('')