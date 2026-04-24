const loginForm = document.querySelector('#loginForm');
const dashboard = document.querySelector('#dashboard');
const resetDemo = document.querySelector('#resetDemo');
const clientName = document.querySelector('#clientName');
const totalValue = document.querySelector('#totalValue');
const capitalValue = document.querySelector('#capitalValue');
const interestValue = document.querySelector('#interestValue');
const rateValue = document.querySelector('#rateValue');

const demoAccount = {
  capital: 185000,
  annualRate: 0.0842,
  monthsInvested: 9
};

const currency = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN'
});

function calculateInterest(capital, annualRate, months) {
  return capital * (annualRate / 12) * months;
}

function showDashboard(userName) {
  const interest = calculateInterest(demoAccount.capital, demoAccount.annualRate, demoAccount.monthsInvested);
  const total = demoAccount.capital + interest;

  clientName.textContent = userName || 'Cliente Prime';
  capitalValue.textContent = currency.format(demoAccount.capital);
  interestValue.textContent = currency.format(interest);
  totalValue.textContent = currency.format(total);
  rateValue.textContent = `${(demoAccount.annualRate * 100).toFixed(2)}%`;
  dashboard.classList.add('is-visible');
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  window.location.href = "cliente.html";
});

resetDemo.addEventListener('click', () => {
  dashboard.classList.remove('is-visible');
  loginForm.reset();
});
