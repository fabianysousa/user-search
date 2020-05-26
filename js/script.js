let globalUsers = null;

start();

function start() {
  fetchPeople();
  //hideSpinner();
}

async function fetchPeople() {
  const response = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const dateResponse = await response.json();
  console.log(dateResponse);
  globalUsers = dateResponse.results.map(({ gender, name, dob }) => {
    return {
      gender,
      name,
      age: dob.age,
      name_lowercase: (name.first + ' ' + name.last).toLowerCase(),
    };
  });
}

function statistics(users) {
  let countSumGenderFemale = 0;
  let countSumGenderMale = 0;
  let sumAge = 0;
  let averageAge = 0;
  users.forEach((user) => {
    sumAge += user.age;
    if (user.gender === 'female') {
      countSumGenderFemale++;
    } else {
      countSumGenderMale++;
    }
  });
  averageAge = sumAge / users.length;
  return {
    sumMen: countSumGenderMale,
    sumWomen: countSumGenderFemale,
    sumAge,
    averageAge,
  };
}

// // aguardando
// function hideSpinner() {
//   const spinner = document.querySelectorAll('.spinner');
//   spinner.classList.add('hide');
// }
