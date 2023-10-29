const container = document.querySelector('.nav');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const answer = document.querySelector('p');



container.addEventListener('click', () => {
    console.log("Martin !");
    container.style.background = "pink";
    container.style.border = "5px solid red";
    
});

btn1.addEventListener('click', () => {
    answer.style.visibility = "visible";
    answer.style.background = "red";
})

btn2.addEventListener('click', () => {
    answer.style.visibility = "visible";
    answer.style.background = "green";
})

document.querySelector('.box').style.borderRadius = "240px";

