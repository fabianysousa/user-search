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
  globalUsers = dateResponse.results.map(({ gender, name, dob, picture }) => {
    return {
      gender,
      name,
      age: dob.age,
      name_lowercase: (name.first + ' ' + name.last).toLowerCase(),
      picture,
    };
  });
}

function searchUsers(name) {
  const filteredUsers = filterUsers(name, globalUsers);
  const elementListStatistics = document.getElementsByClassName(
    'list-statistics'
  );
  const elementListUserFound = document.getElementsByClassName('users-info');

  if (filteredUsers.length > 0) {
    let infoUserElement = '';

    filteredUsers.forEach((user) => {
      infoUserElement += `
      <div class="user-info">
      <img class="perfilUser" src="${user.picture.medium}"/></li>
      <h2 class="info-user">${user.name.first} ${user.name.last}, ${user.age}</h2>
      </div>
      `;
    });
    elementListUserFound[0].innerHTML = infoUserElement;
    const statistics = statisticsUsers(filteredUsers);
    if (name !== '') {
      elementListStatistics[0].innerHTML = `<li class="list-item">Sex female:${statistics.sumWomen}</li>
      <li class="list-item">Sex male:${statistics.sumMen}</li>
      <li class="list-item">Sum of ages:${statistics.sumAge}</li>
      <li class="list-item">Average of ages:${statistics.averageAge}</li>`;
    }
  } else {
    elementListStatistics[0].innerHTML = `<span> No filtered users </span>`;
  }
}

function statisticsUsers(users) {
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
  averageAge = (sumAge / users.length).toFixed(2);
  return {
    sumMen: countSumGenderMale,
    sumWomen: countSumGenderFemale,
    sumAge,
    averageAge,
  };
}

function filterUsers(name, users) {
  const filteredUsers = users.filter(({ name_lowercase }) =>
    name_lowercase.indexOf(name.toLowerCase()) != -1 ? true : false
  );
  return filteredUsers;
}

// // aguardando
// function hideSpinner() {
//   const spinner = document.querySelectorAll('.spinner');
//   spinner.classList.add('hide');
// }
