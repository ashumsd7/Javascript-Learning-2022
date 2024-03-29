'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, -1200],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


//showing movements
const displayMovements = function (movements) {
  containerMovements.innerHTML=``
  movements.forEach(function (mov, i) {
    // <div class="movements__date">3 days ago</div>;
    const type= mov>0 ? 'deposit' :'withdrawal'

    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}₹</div>
        </div>`;
    
        containerMovements.insertAdjacentHTML('afterbegin',html);
  });
};

displayMovements(account1.movements);





//inserting Users Names
const createUsernames = function(accs) {
  accs.forEach(acc => {
  acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
}




//Calculating All Balance
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, curr, _, _2) => {
    return acc + curr;
  }, 0);
 
  labelBalance.textContent = `${balance} ₹`;
}

calcDisplayBalance(account1.movements);



//Display Summery
const calcDisplaySummery = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr);
  
  labelSumIn.textContent = `${incomes}₹`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr);
  
  labelSumOut.textContent = `${Math.abs(outcomes)}₹`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100).filter(int=>int>=1)
    .reduce((acc, int) => a
    cc + int);
  labelSumInterest.textContent = `${Math.abs(interest)}₹`;

}

calcDisplaySummery(account1.movements)

//Event Handlers

btnLogin.addEventListener('click', function () {
  console.log("Login");
})











