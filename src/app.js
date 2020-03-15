//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;



function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var arr = []
  arr.push(managerName)
  arr.push(managerAge)
  arr.push(currentTeam)
  arr.push(trophiesWon)
  return arr
}





//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];


function createFormation(list) {
  var res = {
    defender: 'undefined',
    midfield: 'undefined',
    forward: 'undefined'
  }
  if (list.length == 0)
    return null
  res.defender = list[0]
  res.midfield = list[1]
  res.forward = list[2]
  return res
}

//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year


function filterByDebut(year) {
  var res = []
  for (var index = 0; index < players.length; index++) {
    if (players[index].debut == year)
      res.push(players[index])
  }
  return res
}





//Progression 4 - Filter players that play at the position _______

function filterByPosition(posit) {
  var res = []
  for (var index = 0; index < players.length; index++) {
    if (players[index].position == posit)
      res.push(players[index])
  }
  return res
}







//Progression 5 - Filter players that have won ______ award



function filterByAward(award) {
  if (award == null)
    return []
  var res = [],
    count = 0
  for (var index = 0; index < players.length; index++) {
    for (var index1 = 0; index1 < players[index].awards.length; index1++) {
      if (players[index].awards[index1].name == award)
        res.push(players[index])
    }
  }
  return res
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardNumber(index, award) {
  var count = 0
  count = 0
  for (var index1 = 0; index1 < players[index].awards.length; index1++) {
    if (players[index].awards[index1].name == award)
      count += 1
  }
  return count
}



function filterByAwardxTimes(awardName, noOfTimes) {
  var res = []
  if (awardName == null)
    return []
  for (var index = 0; index < players.length; index++) {
    if (filterByAwardNumber(index, awardName) == noOfTimes)
      res.push(players[index])
  }
  return res
}




//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(award, conn) {
  if (award == null)
    return []
  var res = [],
    count = 0
  for (var index = 0; index < players.length; index++) {
    for (var index1 = 0; index1 < players[index].awards.length; index1++) {
      if ((players[index].awards[index1].name == award) && (players[index].country == conn)) res.push(players[index])
    }
  }
  return res
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____


function filterByNoOfAwardsxTeamxAge(noAwards, team, age) {
  var res = []
  if ((typeof (noAwards) == 'undefined') && (typeof (team) == 'undefined') && (typeof (age) == 'undefined')) return []
  for (var index = 0; index < players.length; index++) {
    if ((players[index].awards.length >= noAwards) && (players[index].team == team) && (players[index].age < age))
      res.push(players[index])
  }
  return res
}






//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order