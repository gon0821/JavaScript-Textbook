
const forHere = confirm('店内でご利用ですか？');
const taxRate = calc(forHere);
console.log('消費税 ' + taxRate);

function calc(here) {
  let tax = 1.08;
  if(here) {
    tax = 1.1;
  }
  return tax;
}
const total = calc(forHere) * 600;
document.querySelector('#total').textContent = total;
