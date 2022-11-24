import Notiflix from 'notiflix';


const formRef = document.querySelector('.form');
console.log(formRef);
formRef.addEventListener('submit', getInfoFromForm);

function getInfoFromForm(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let i = 0; i <= amountValue; i++) {
    const delaym = delayValue + stepValue * (i - 1);
    createPromise(i, delaym).then(promiseSuccess).catch(promiseError);
  }
  
}
function createPromise(position, delay) {
    const promise= new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
      setTimeout(() => {
      if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
    },delay);

    })
  return promise;
}

function promiseSuccess({ position, delay }) {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  console.log(`Fulfilled promise ${position} in ${delay}ms`);
}
function promiseError({ position, delay }) {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  console.log(`Rejected promise ${position} in ${delay}ms`);
}



