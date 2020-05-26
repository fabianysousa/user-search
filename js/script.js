let genderFemaleSum = null;
let countGenderFemaleSum = 0;

let genderMaleSum = null;
let cauntGenderMaleSum = 0;

let ageSum = null;
let cauntAgeSum = 0;

let averageAges = null;

window.addEventListener('load', function () {
  doFetch();
  usersFound();
  statistics();
});

async function doFetch() {
  const response = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const dataResponse = await response.json();
  const arrayDataResponse = dataResponse.results;
  console.log(arrayDataResponse);
}

function usersFound() {
  quantityUsersFound();
  quantityRenderUsers();
}

function statistics() {
  quantityGenderFemale();
  quantityGenderMale();
  quantityAge();
  averageAge();
}

function quantityUsersFound() {}

function quantityRenderUsers() {}

function quantityGenderFemale() {}

function quantityGenderMale() {}

function quantityAge() {}

function averageAge() {}
