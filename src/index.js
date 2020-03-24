import './styles/styles.scss';
import yosemite from './img/Yosemite.jpg';
import sunset from './img/sunset.jpg';

//Task 3
//При прокрутке, шапка страницы должна фиксироваться вверху окна, при этом высота шапки должна плавно уменьшиться до 70 пикселей, 
//логотип должен пропорционально масштабироваться.

function changeHead(){
    if(document.documentElement.clientWidth >=768){
        let scroll = window.pageYOffset; //Расстояние от верхнего пикселя экрана до верха страницы
        let hg = 160 - scroll; // Задаем в переменную hg высоту шапки, которая плавно уменьшается с 160 до 70 (получается эффект сплющивания)
        let header = document.querySelector('header'); 

        header.style.top = scroll + 'px'; //Фиксируем шапку в верхней части экрана
        header.style.height = hg + 'px'; //Присваиваем высоту шапки их меременной hg
        if(scroll >= 90 && hg <= 70){ //70 - минимальная высота шапки
            header.style.height = 70 + 'px';
        }

        let logo = document.querySelector('svg'); //Присваиваем переменной logo - dom элемент svg(логотип)
        let logoHg = header.offsetHeight / 160 * 120; //Получаем высоту шапки в реальном моменте, сравниваем полученное значение с изначальной высотой шапки, получаем пропорции. Пропорции умножаем на начальную высоту логотипа.
        logo.style.height = logoHg + 'px'; //Присваиваем значение высоты логотипу относительно высоты шапки сайта

        //На случай если ширина поменяется без перезагрузки странцы
        header.style.paddingTop = 20 + 'px';
        header.style.paddingBottom = 20 + 'px';
    } else{
        let scroll = window.pageYOffset; //Расстояние от верхнего пикселя экрана до верха страницы
        let padding = (scroll)/2; // Величина на которую будут уменьшаться паддинги
        let header = document.querySelector('header'); 
        header.style.top = scroll + 'px'; //Фиксируем шапку в верхней части экрана
        //Сейчас высота шапки получается 84px
        //Уменьшим до 70 за счёт padding-bottom и padding-top которые сейчас по 20px 
        header.style.paddingTop = (20 - padding) + 'px';
        header.style.paddingBottom = (20 - padding) + 'px';
        if(scroll >= 14){ //Если скррол больше 14 значит с каждого паддинга отняли по 7 и высота шапки становится 70 - минимальная высота шапки
            header.style.paddingTop = 13 + 'px';
            header.style.paddingBottom = 13 + 'px';
        }
        // header.style.height = 70 + 'px'; нужно допилить, при ресайзе криво встаёт!
    }
}

window.addEventListener('scroll', changeHead);
window.addEventListener('resize', changeHead); // Если поменяется ширина экрана без перезагруки
//End of Task3

//Task 4
//Task 4-1 При ширине экрана менее 768 пикселей, табы должны превращаться в выпадающий список
//Task 4-2 Заголовок активного таба должен отображаться в качестве выбранного пункта списка
//Task 4-3 Желательно придумать красивую анимацию разворачивания списка

let list = document.querySelectorAll('.js-tab-header'); //Получаем все элементы списка
for (let i =0; i < list.length; i++){
    list[i].onclick = listShow; //На каждый элемент вешаем функцию
}

function listShow(){
    let id = this.getAttribute('data'); //В атрибуте "data" лежит значение = id элемента который нужно отобразить
    for (let i =0; i < list.length; i++){
        if(list[i].classList.contains('active')){ //Если у какого-либо элемента есть класс active
            list[i].classList.remove('active'); //Удаляем его
        }
    }
    this.classList.add('active'); //На элемент по которому произвоели клик вешаем active

    let content = document.querySelectorAll('.js-tab-content'); //Получаем "блоки" которые нужно отобразить
    for (let i =0; i < content.length; i++){
        if(content[i].classList.contains('active')){ //Если у какого-либо элемента есть класс active
            content[i].classList.remove('active'); //Удаляем его
        }
    }
    document.querySelector(`#${id}`).classList.add('active'); //Присваиваем класс active элементу с соответствующим id (который хранится в атрибуте data у элементов в навигации)
}
//End of Task4

//Task 5
//Добавить таб с блоком, внутри которого должно находиться изображение (любое, на ваше усмотрение), превышающее этот блок по размерам.
//У блока должен быть установлен overflow: hidden
//Нужен механизм перетаскивания изображения мышью в пределах блока, чтобы увидеть скрытые части картинки.

let inner = document.querySelector('.inner');
let over = document.querySelector('.over');
inner.onclick = moveImg;

let click = 0;

function moveImg(e){
    click = 0;   
    let x = e.x;
    let y = e.y;
    let leftOut = inner.offsetLeft;
    let topOut = inner.offsetTop;
    inner.style.cursor = 'move';

        inner.onmousemove = (e) => {
            if(click == 1){
                click = 0;
                inner.onmousemove = () => {} // Очистим событие 
            }
           
            let left = e.clientX - x;
            let top = e.clientY - y;
            
            if((left + leftOut) >= (over.offsetWidth - inner.offsetWidth) && (left + leftOut) <=0){
                inner.style.left = left + leftOut + 'px';
            }
            if((top + topOut) >= (over.offsetHeight - inner.offsetHeight) && (top + topOut) <=0){
                inner.style.top = top + topOut + 'px'; 
            }
           
        }
    //При клике по изображению отключаем функцию перемещения
    inner.onclick = () =>{
        click = 1;
        inner.onclick = moveImg;
        inner.style.cursor = 'pointer';
    }
    //При выходе мышкой за пределы изображения так же выключаем функцию перемещения
    inner.onmouseout = () => {
        click = 1;
        inner.onclick = moveImg;
        inner.style.cursor = 'pointer';
    }

}



//Task 6
//Добавить ещё один таб с блоком, внутри которого должно находиться изображение (любое, на ваше усмотрение), превышающее этот блок по размерам.
//У блока должен быть установлен overflow: hidden
//Нужен механизм плавного перемещения изображения по наведению мышкой в пределах блока, чтобы увидеть скрытые части картинки 
//(Навели в правую часть контейнера - увидели правую часть изображения).

let over2 = document.querySelector('.over2');
let inner2 = document.querySelector('.inner2');
let inter; //Чтобы очищать clearInterval вывожу его в глобальную область видимости
let enter = 0; //Вводим переменную - счётчик, что бы не запускать функцию несколько раз (без нее дергается изображение)

//Функция перемещения картинки. Принимает два параметра 
//whereto - left(лево), `any`(вверх) и 
//plus - 'plus' (увеличиваем величину), `any` (уменьшаем величину)
function moveImg2(whereto, plus){
    let count = 0;
    if(whereto == 'left'){
        count = inner2.offsetLeft;
    } else{
        count = inner2.offsetTop;
    }
    
    inter = setInterval(() => {
        if(plus == 'plus'){ 
            count += 1;
        } else {
            count -= 1;
        }
        //Движение изображение проиходит пока край перемещаемого изображения не поравняется с краем родительского блока (а то улетит далеко далеко, у меня так было один раз)
        if(whereto == 'left'){ //указзываем это правило для горизонталей
            if(count >= (over2.offsetWidth - inner2.offsetWidth) && count <=0){
                inner2.style.left = count + 'px';
            }
        } else{ //указываем для вертикалей
            if(count >= (over2.offsetHeight - inner2.offsetHeight) && count <=0){
                inner2.style.top = count + 'px';
            }
        }
    }, 5);
    enter = 1;
    inner2.style.cursor = 'pointer';
}

over2.onmousemove = e => {
    //Перечисляем при наведении на какие области родителького блока будем запускать функцию moveImg2 в указанными параметрами
    if(e.pageX >= (over2.offsetWidth + over2.offsetLeft - 80) && enter == 0){
        moveImg2('left', 'minus');
    } else if(e.pageX <= (over2.offsetLeft + 80) && enter == 0){
        moveImg2('left', 'plus');
    } else if(e.pageY <= (over2.offsetTop + 80) && enter == 0){
        moveImg2('top', 'plus');
    } else if(e.pageY >= (over2.offsetTop + over2.offsetHeight - 80) && enter == 0){
        moveImg2('top', 'minus');
        //Указываем области родительского блока, при наведении на которые функция moveImg2 остановится
    } else if(e.pageX > (over2.offsetLeft + 80) && e.pageX < (over2.offsetWidth + over2.offsetLeft - 80) && 
             e.pageY >= (over2.offsetTop + 80) && e.pageY <= (over2.offsetTop+over2.offsetHeight - 80)) {
        clearInterval(inter);
        enter = 0;
        inner2.style.cursor = 'default';
    }
}



