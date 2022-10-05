const form = document.querySelector('#form');
const email = document.querySelector('#email');
// console.log(form);
// console.log(email);

form.addEventListener('submit',e => {
    e.preventDefault();
    const emailValue = email.value;
    console.log(emailValue);

    var validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    var possible = false;

      if(emailValue.match(validRegex)){
        possible = true;
      }

      console.log(possible);

      if(!possible){
        form.classList.add('error');
      } else {
        form.classList.remove('error');
      }
})


