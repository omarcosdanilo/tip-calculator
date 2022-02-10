const bill = document.querySelector('#bill');
const percentButtons = document.querySelectorAll('.percent-button');
const payers = document.querySelector('#number-of-people');
const tipAmount = document.querySelector('.total-tip-amount')
const totalPerPerson = document.querySelector('.total-person-pay')
const calculateButton = document.querySelector('#calculateButton');
const resetButton = document.querySelector('.reset');


const addClassSelected = (event) => {

  percentButtons.forEach(btn => {
    if (btn.classList.contains('selected')) {
      btn.classList.remove('selected')
      btn.style.backgroundColor = 'hsl(183, 100%, 15%)';
    }
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'hsl(172, 67%, 45%)'
  })
}

const calculateTip = () => {
  const tipSelected = document.querySelector('.selected').innerText.replace(/%/, '');
  const tipSelectedNumber = parseInt(tipSelected);
  const billValue = parseFloat(bill.value);
  const payersValue = parseInt(payers.value);
  
  const tipPerPerson = (billValue + (billValue * tipSelectedNumber/100)) - billValue;

  tipAmount.innerHTML = `$${(tipPerPerson / payersValue).toFixed(2)}`;
}

const calculateTotal = () => {
  const tipSelected = document.querySelector('.selected').innerText.replace(/%/, '');
  const tipSelectedNumber = parseInt(tipSelected);
  const billValue = parseFloat(bill.value);
  const payersValue = parseInt(payers.value);
  
  const total = (billValue + (billValue * tipSelectedNumber/100)) / payersValue;

  totalPerPerson.innerHTML = `$${(total).toFixed(2)}`;
}

const reset = () => {
  tipAmount.innerHTML = 0;
  totalPerPerson.innerHTML = 0;
  bill.value = ''
  payers.value = ''

  percentButtons.forEach(btn => {
    if (btn.classList.contains('selected')) {
      btn.classList.remove('selected')
      btn.style.backgroundColor = 'hsl(183, 100%, 15%)';
    }
  })
  
}

percentButtons.forEach(button => button.addEventListener('click', addClassSelected));

calculateButton.addEventListener('click', calculateTip);
calculateButton.addEventListener('click', calculateTotal);

resetButton.addEventListener('click', reset)
