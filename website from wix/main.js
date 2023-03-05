
const bg = document.querySelector('.bg'); 
const info = document.querySelector('.info'); 

const nav = document.querySelector('nav');
const textBox = document.querySelector('.text-box'); 

const img1 = document.querySelector('.photos-box img:first-child');
const img2 = document.querySelector('.photos-box img:last-child');

 const titleBox1 = document.querySelector('.title-box h2'); 
const titleBox2 = document.querySelector('.title-box p');  

const card1 = document.querySelector('.card1'); 
const card2 = document.querySelector('.card2');

const card3 = document.querySelector('.card3');

const spirit = document.querySelector('.spirit'); 

const phone = document.querySelector('#phone'); 

const skeleton = document.querySelector('.skeleton'); 
const cat4 = document.querySelector('.cat4')
window.addEventListener('scroll',function() {
   
    

    let value = window.scrollY;  
    let value2 = window.scrollY;  

      
      /*  bg.style.left = `${(-value - 1550) / 2}px`;  */

        bg.style.left = `${(-value - 4450) / 5}px`;  


        if(value2 < 200) {
            value2 = 200;
        }
        info.style.left = `${value2}`  

        if(window.scrollY > bg.clientHeight / 2) {
          
          nav.classList.add('active'); 
          
        }else if(window.scrollY < bg.clientHeight / 2) {
          nav.classList.remove('active'); 

        } 
        console.log(value2);
        if(value2 > 1100) { 
          
          textBox.style.animation =  'text-box 2s ease-in-out both';
        } 
        if(value2 > 1840 )  {
        
        img1.style.animation =  'photo 2.2s linear both';
        img2.style.animation =  'cat 1.8s .8s ease-in both'; 
      } 
      if(value2 > 2496 )  {
        
        titleBox1.style.animation = 'text-box 2.3s linear both';
       titleBox2.style.animation = 'text-box 2.3s linear both'; 
      }

      if(value2 > 2540) { 
    
        card1.style.animation = 'card 1.2s ease-in-out both';
        card2.style.animation = 'card  1.2s .3s ease-in-out both';

        }
      
      if(value2 > 3200) {
        card3.style.animation = 'card 1.2s ease-in-out both'; 

        spirit.style.animation = 'spirit 1.2s .4s ease-in-out both'; 
      } 
       


     
      phone.style.opacity = `${value2 / 3500}`; 

      console.log(value2 / 3500);
         
    
       if(value2 > 5700) {
        skeleton.style.display = 'none';
       }
        else if(value2 > 3800) {
        skeleton.style.display = 'block';
      }
       if(value < 3800) {
        skeleton.style.display = 'none';
      } 
      if(value2 > 4300) {
        cat4.style.animation='cat4 1s ease-in-out'
      }
     
})


