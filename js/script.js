let total = 5000;
let time = 1; 
let hourRate; //цена часа
let tabLeft = document.querySelector('.tab-left');
let tabRight = document.querySelector('.tab-right');
let blocksBlock = document.getElementById('blocks-block');
let pagesBlock = document.getElementById('pages-block');
let counterBlock = document.getElementById('counter-block');
let counterPages = document.getElementById('counter-pages');
let counterHours = document.getElementById('counter-hours');
let counterRate = document.getElementById('counter-rate');
let changesCheck = document.getElementById('changes-check');
let cmsCheck = document.getElementById('changes-cms');
let totalValue = document.getElementsByClassName('total-count')[0];
let input = document.getElementsByTagName('input');

const land = 5000; //мин цена лендинга 
const corp = 12000; //мин цена корп сайта
const cms = 4000; //цена посадки на cms
const changes = 1000; // цена изменения 
const blocks = 500; //цена за блок
const pages = 2500; //цена за страницу

window.addEventListener('DOMContentLoaded', () => {
    tabLeft.addEventListener('click', () => {
        for(let i = 0; i < input.length; i++){
            input[i].value = '';
        };

        blocksBlock.style.display = 'flex';
        pagesBlock.style.display = 'none';

        tabLeft.classList.add('active');
        tabRight.classList.remove('active');

        if(changesCheck.checked){
            changesCheck.checked = false;
        };

        if(cmsCheck.checked){
            cmsCheck.checked = false;
        };

        total = land;
        totalValue.value = total;
      });

      tabRight.addEventListener('click', () => {
        for(let i = 0; i < input.length; i++){
            input[i].value = '';
        };

        pagesBlock.style.display = 'flex';
        blocksBlock.style.display = 'none';

        tabRight.classList.add('active');
        tabLeft.classList.remove('active');

        if(changesCheck.checked){
            changesCheck.checked = false;
        };

        if(cmsCheck.checked){
            cmsCheck.checked = false;
        };

        total = corp;
        totalValue.value = total;
      });

      counterBlock.addEventListener('change', () => {
          counterHours.value = '';
          counterRate.value = '';
          total = counterBlock.value * blocks;
          totalValue.value = total;
      });

      counterPages.addEventListener('change', () => {
        counterHours.value = '';
        counterRate.value = '';
        total = counterPages.value * pages;
        totalValue.value = total;
    });

    counterHours.addEventListener('change', () => {
        counterBlock.value = '';
        counterPages.value = '';
        total = 0;
        time = counterHours.value;
        hourRate = time * counterRate.value;
        totalValue.value = hourRate;
        total = hourRate;
    });

    counterRate.addEventListener('change', () => {
        counterBlock.value = '';
        counterPages.value = '';
        total = 0;
        hourRate = time * counterRate.value;
        totalValue.value = hourRate;
        total = hourRate;
    });

    changesCheck.addEventListener('change', () => {
        if(changesCheck.checked){
            total += changes;
            totalValue.value = total;
        }
        else{
            total -= changes;
            totalValue.value = total;
        }
    });

    cmsCheck.addEventListener('change', () => {
        if(cmsCheck.checked){
            total += cms;
            totalValue.value = total;
        }
        else{
            total -= cms;
            totalValue.value = total;
        }
    });

    for(let i = 0; i<input.length; i++)
    {
        input[i].addEventListener('keydown', (event) =>{
            event.target.classList.toggle('blink');
        });
    }
});
