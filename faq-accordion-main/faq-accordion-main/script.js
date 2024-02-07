const plusBtn = document.querySelectorAll(".plus");
const minusBtn = document.querySelectorAll(".minus");
const answerDiv = document.querySelectorAll(".answer");


for (let i = 0; i < plusBtn.length; i++){
    plusBtn[i].addEventListener('click', function () {
       plusBtn[i].classList.toggle('hidden');
       minusBtn[i].classList.toggle('hidden');
       answerDiv[i].classList.toggle('hidden');
    })
}

for (let i = 0; i < minusBtn.length; i++){
    minusBtn[i].addEventListener('click', function () {
        plusBtn[i].classList.toggle('hidden');
        minusBtn[i].classList.toggle('hidden');
       answerDiv[i].classList.toggle('hidden');
    })
}

for (let i = 0; i < answerDiv.length; i++){
   answerDiv[i].addEventListener('click', function () {
        plusBtn[i].classList.toggle('hidden');
       minusBtn[i].classList.toggle('hidden');
       answerDiv[i].classList.toggle('hidden');
    })
}



