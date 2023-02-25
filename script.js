'use strict';
let co = console.log;

const question = document.querySelectorAll('.question');

question.forEach(ques => {
    ques.addEventListener('click', function (e) {

        const parent = e.target.closest('.question');

        question.forEach(ele => ele.classList.remove('active'));

        parent.classList.add('active');

    })

})