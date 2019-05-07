const express = require('express');
const brain = require('brain.js');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

let date;
let ohioState;
let oregonState;
let rutgers;
let pennState;
let winMargin;
let winner;
let purdue;
let texasState;
let maryland;
let texasU;
let michigan;

// if (date == "09/01/2018") {
//   ohioState = {
//     firstDowns: 35,
//     rushAtt: 52,
//     rushYds: 377,
//     rushTD: 5,
//     passComp: 25,
//     passAtt: 34,
//     passYds: 346,
//     passTD: 5,
//     INT: 1,
//     totalYds: 723,
//     fumbles: 1,
//     fumLost: 1,
//     TOs: 2,
//     penalties: 6,
//     penYds: 50
//   }
//   oregonState = {
//     firstDowns: 15,
//     rushAtt: 39,
//     rushYds: 196,
//     rushTD: 2,
//     passComp: 14,
//     passAtt: 24,
//     passYds: 196,
//     passTD: 2,
//     INT: 0,
//     totalYds: 392,
//     fumbles: 5,
//     fumLost: 2,
//     TOs: 2,
//     penalties: 5,
//     penYds: 49
//   }
//   winMargin = 46;
//   winner = ohioState;
// }

// if (date == "09/08/2018") {
//   ohioState = {
//     firstDowns: 32,
//     rushAtt: 40,
//     rushYds: 225,
//     rushTD: 2,
//     passComp: 30,
//     passAtt: 33,
//     passYds: 354,
//     passTD: 5,
//     INT: 0,
//     totalYds: 579,
//     fumbles: 1,
//     fumLost: 0,
//     TOs: 0,
//     penalties: 11,
//     penYds: 120
//   }
//   rutgers = {
//     firstDowns: 12,
//     rushAtt: 31,
//     rushYds: 69,
//     rushTD: 0,
//     passComp: 11,
//     passAtt: 30,
//     passYds: 65,
//     passTD: 0,
//     INT: 2,
//     totalYds: 134,
//     fumbles: 1,
//     fumLost: 0,
//     TOs: 2,
//     penalties: 7,
//     penYds: 72
//   }
//   winMargin = 49;
//   winner = ohioState;
// }
// if (date == "09/29/2018") {
//   ohioState = {
//     firstDowns: 21,
//     rushAtt: 37,
//     rushYds: 119,
//     rushTD: 1,
//     passComp: 22,
//     passAtt: 39,
//     passYds: 270,
//     passTD: 3,
//     INT: 1,
//     totalYds: 389,
//     fumbles: 0,
//     fumLost: 0,
//     TOs: 1,
//     penalties: 10,
//     penYds: 105
//   }
//   pennState = {
//     firstDowns: 22,
//     rushAtt: 44,
//     rushYds: 206,
//     rushTD: 1,
//     passComp: 16,
//     passAtt: 32,
//     passYds: 286,
//     passTD: 2,
//     INT: 0,
//     totalYds: 492,
//     fumbles: 2,
//     fumLost: 1,
//     TOs: 1,
//     penalties: 7,
//     penYds: 64
//   }
//   winMargin = 1;
//   winner = ohioState;
// }

// if (date == "10/20/2018") {
//   ohioState = {
//     firstDowns: 31,
//     rushAtt: 25,
//     rushYds: 76,
//     rushTD: 0,
//     passComp: 49,
//     passAtt: 73,
//     passYds: 470,
//     passTD: 2,
//     INT: 1,
//     totalYds: 546,
//     fumbles: 0,
//     fumLost: 0,
//     TOs: 1,
//     penalties: 10,
//     penYds: 86
//   }
//   purdue = {
//     firstDowns: 24,
//     rushAtt: 29,
//     rushYds: 161,
//     rushTD: 3,
//     passComp: 25,
//     passAtt: 43,
//     passYds: 378,
//     passTD: 3,
//     INT: 0,
//     totalYds: 539,
//     fumbles: 1,
//     fumLost: 0,
//     TOs: 0,
//     penalties: 7,
//     penYds: 95
//   }
//   winMargin = 29;
//   winner = purdue;
// }

// if (date == "09/01/2018") {
//   rutgers = {
//     firstDowns: 23,
//     rushAtt: 46,
//     rushYds: 218,
//     rushTD: 3,
//     passComp: 20,
//     passAtt: 29,
//     passYds: 205,
//     passTD: 1,
//     INT: 3,
//     totalYds: 423,
//     fumbles: 2,
//     fumLost: 1,
//     TOs: 4,
//     penalties: 7,
//     penYds: 50
//   }
//   texasState = {
//     firstDowns: 12,
//     rushAtt: 30,
//     rushYds: 69,
//     rushTD: 0,
//     passComp: 9,
//     passAtt: 24,
//     passYds: 100,
//     passTD: 0,
//     INT: 1,
//     totalYds: 169,
//     fumbles: 2,
//     fumLost: 2,
//     TOs: 3,
//     penalties: 15,
//     penYds: 119
//   }
//   winMargin = 28;
//   winner = rutgers;
// }

// if (date == "10/13/2018") {
//   rutgers = {
//     firstDowns: 14,
//     rushAtt: 45,
//     rushYds: 171,
//     rushTD: 1,
//     passComp: 2,
//     passAtt: 17,
//     passYds: 8,
//     passTD: 0,
//     INT: 5,
//     totalYds: 179,
//     fumbles: 2,
//     fumLost: 0,
//     TOs: 5,
//     penalties: 4,
//     penYds: 23
//   }
//   maryland = {
//     firstDowns: 16,
//     rushAtt: 40,
//     rushYds: 290,
//     rushTD: 1,
//     passComp: 9,
//     passAtt: 20,
//     passYds: 85,
//     passTD: 3,
//     INT: 0,
//     totalYds: 375,
//     fumbles: 1,
//     fumLost: 1,
//     TOs: 1,
//     penalties: 9,
//     penYds: 85
//   }
//   winMargin = 27;
//   winner = maryland;
// }

// if (date == "09/01/2018") {
//   texasU = {
//     firstDowns: 20,
//     rushAtt: 36,
//     rushYds: 142,
//     rushTD: 2,
//     passComp: 21,
//     passAtt: 39,
//     passYds: 263,
//     passTD: 2,
//     INT: 2,
//     totalYds: 405,
//     fumbles: 2,
//     fumLost: 1,
//     TOs: 3,
//     penalties: 10,
//     penYds: 102
//   }
//   maryland = {
//     firstDowns: 21,
//     rushAtt: 46,
//     rushYds: 143,
//     rushTD: 2,
//     passComp: 21,
//     passAtt: 34,
//     passYds: 264,
//     passTD: 2,
//     INT: 0,
//     totalYds: 407,
//     fumbles: 1,
//     fumLost: 0,
//     TOs: 0,
//     penalties: 8,
//     penYds: 70
//   }
//   winMargin = 5;
//   winner = maryland;
// }

// if (date == "11/24/2018") {
//   pennState = {
//     firstDowns: 28,
//     rushAtt: 44,
//     rushYds: 310,
//     rushTD: 4,
//     passComp: 14,
//     passAtt: 24,
//     passYds: 255,
//     passTD: 1,
//     INT: 0,
//     totalYds: 565,
//     fumbles: 2,
//     fumLost: 1,
//     TOs: 1,
//     penalties: 3,
//     penYds: 23
//   }
//   maryland = {
//     firstDowns: 13,
//     rushAtt: 36,
//     rushYds: 74,
//     rushTD: 0,
//     passComp: 14,
//     passAtt: 23,
//     passYds: 185,
//     passTD: 0,
//     INT: 0,
//     totalYds: 259,
//     fumbles: 1,
//     fumLost: 0,
//     TOs: 0,
//     penalties: 7,
//     penYds: 65
//   }
//   winMargin = 35;
//   winner = pennState;
// }

// if (date == "10/06/2018") {
//   michigan = {
//     firstDowns: 24,
//     rushAtt: 40,
//     rushYds: 171,
//     rushTD: 1,
//     passComp: 20,
//     passAtt: 28,
//     passYds: 294,
//     passTD: 3,
//     INT: 1,
//     totalYds: 465,
//     fumbles: 0,
//     fumLost: 0,
//     TOs: 1,
//     penalties: 6,
//     penYds: 52
//   }
//   maryland = {
//     firstDowns: 11,
//     rushAtt: 37,
//     rushYds: 147,
//     rushTD: 2,
//     passComp: 7,
//     passAtt: 13,
//     passYds: 73,
//     passTD: 0,
//     INT: 1,
//     totalYds: 220,
//     fumbles: 0,
//     fumLost: 0,
//     TOs: 1,
//     penalties: 12,
//     penYds: 107
//   }
//   winMargin = 21;
//   winner = michigan;
// }
// if (date == "11/10/2018") {
//   michigan = {
//     firstDowns: 24,
//     rushAtt: 40,
//     rushYds: 193,
//     rushTD: 3,
//     passComp: 18,
//     passAtt: 27,
//     passYds: 260,
//     passTD: 3,
//     INT: 0,
//     totalYds: 453,
//     fumbles: 0,
//     fumLost: 0,
//     TOs: 0,
//     penalties: 2,
//     penYds: 20
//   }
//   rutgers = {
//     firstDowns: 11,
//     rushAtt: 33,
//     rushYds: 193,
//     rushTD: 1,
//     passComp: 9,
//     passAtt: 20,
//     passYds: 59,
//     passTD: 0,
//     INT: 1,
//     totalYds: 252,
//     fumbles: 1,
//     fumLost: 1,
//     TOs: 2,
//     penalties: 3,
//     penYds: 30
//   }
//   winMargin = 35;
//   winner = michigan;
// }

let scores = [{
  input: {ohioState: { 
    firstDowns: 35,
    rushAtt: 52,
    rushYds: 377,
    rushTD: 5,
    passComp: 25,
    passAtt: 34,
    passYds: 346,
    passTD: 5,
    INT: 1,
    totalYds: 723,
    fumbles: 1,
    fumLost: 1,
    TOs: 2,
    penalties: 6,
    penYds: 50
  },
  oregonState: {
    firstDowns: 15,
    rushAtt: 39,
    rushYds: 196,
    rushTD: 2,
    passComp: 14,
    passAtt: 24,
    passYds: 196,
    passTD: 2,
    INT: 0,
    totalYds: 392,
    fumbles: 5,
    fumLost: 2,
    TOs: 2,
    penalties: 5,
    penYds: 49
  }},
  output: {
    ohioState
  }
},
{
  input: {ohioState:{
    firstDowns: 32,
    rushAtt: 40,
    rushYds: 225,
    rushTD: 2,
    passComp: 30,
    passAtt: 33,
    passYds: 354,
    passTD: 5,
    INT: 0,
    totalYds: 579,
    fumbles: 1,
    fumLost: 0,
    TOs: 0,
    penalties: 11,
    penYds: 120
  },
  rutgers:{
    firstDowns: 12,
    rushAtt: 31,
    rushYds: 69,
    rushTD: 0,
    passComp: 11,
    passAtt: 30,
    passYds: 65,
    passTD: 0,
    INT: 2,
    totalYds: 134,
    fumbles: 1,
    fumLost: 0,
    TOs: 2,
    penalties: 7,
    penYds: 72
  }},
  output: {
    ohioState
  }
},
{
  input: {ohioState:{
    firstDowns: 21,
    rushAtt: 37,
    rushYds: 119,
    rushTD: 1,
    passComp: 22,
    passAtt: 39,
    passYds: 270,
    passTD: 3,
    INT: 1,
    totalYds: 389,
    fumbles: 0,
    fumLost: 0,
    TOs: 1,
    penalties: 10,
    penYds: 105
  },
  pennState:{
    firstDowns: 22,
    rushAtt: 44,
    rushYds: 206,
    rushTD: 1,
    passComp: 16,
    passAtt: 32,
    passYds: 286,
    passTD: 2,
    INT: 0,
    totalYds: 492,
    fumbles: 2,
    fumLost: 1,
    TOs: 1,
    penalties: 7,
    penYds: 64
  }},
  output: {
    ohioState
  }
},
{
  input: {ohioState:{
    firstDowns: 31,
    rushAtt: 25,
    rushYds: 76,
    rushTD: 0,
    passComp: 49,
    passAtt: 73,
    passYds: 470,
    passTD: 2,
    INT: 1,
    totalYds: 546,
    fumbles: 0,
    fumLost: 0,
    TOs: 1,
    penalties: 10,
    penYds: 86
  },
  purdue:{
    firstDowns: 24,
    rushAtt: 29,
    rushYds: 161,
    rushTD: 3,
    passComp: 25,
    passAtt: 43,
    passYds: 378,
    passTD: 3,
    INT: 0,
    totalYds: 539,
    fumbles: 1,
    fumLost: 0,
    TOs: 0,
    penalties: 7,
    penYds: 95
  }},
  output: {
    purdue
  }
},
{
  input: {rutgers:{
    firstDowns: 23,
    rushAtt: 46,
    rushYds: 218,
    rushTD: 3,
    passComp: 20,
    passAtt: 29,
    passYds: 205,
    passTD: 1,
    INT: 3,
    totalYds: 423,
    fumbles: 2,
    fumLost: 1,
    TOs: 4,
    penalties: 7,
    penYds: 50
  },
  texasState:{
    firstDowns: 12,
    rushAtt: 30,
    rushYds: 69,
    rushTD: 0,
    passComp: 9,
    passAtt: 24,
    passYds: 100,
    passTD: 0,
    INT: 1,
    totalYds: 169,
    fumbles: 2,
    fumLost: 2,
    TOs: 3,
    penalties: 15,
    penYds: 119
  }},
  output: {
    rutgers
  }
},
{
  input: {rutgers:{
    firstDowns: 14,
    rushAtt: 45,
    rushYds: 171,
    rushTD: 1,
    passComp: 2,
    passAtt: 17,
    passYds: 8,
    passTD: 0,
    INT: 5,
    totalYds: 179,
    fumbles: 2,
    fumLost: 0,
    TOs: 5,
    penalties: 4,
    penYds: 23
  },
  maryland:{
    firstDowns: 16,
    rushAtt: 40,
    rushYds: 290,
    rushTD: 1,
    passComp: 9,
    passAtt: 20,
    passYds: 85,
    passTD: 3,
    INT: 0,
    totalYds: 375,
    fumbles: 1,
    fumLost: 1,
    TOs: 1,
    penalties: 9,
    penYds: 85
  }},
  output: {
    maryland
  }
},
{
  input: {texasU:{
    firstDowns: 20,
    rushAtt: 36,
    rushYds: 142,
    rushTD: 2,
    passComp: 21,
    passAtt: 39,
    passYds: 263,
    passTD: 2,
    INT: 2,
    totalYds: 405,
    fumbles: 2,
    fumLost: 1,
    TOs: 3,
    penalties: 10,
    penYds: 102
  },
  maryland:{
    firstDowns: 21,
    rushAtt: 46,
    rushYds: 143,
    rushTD: 2,
    passComp: 21,
    passAtt: 34,
    passYds: 264,
    passTD: 2,
    INT: 0,
    totalYds: 407,
    fumbles: 1,
    fumLost: 0,
    TOs: 0,
    penalties: 8,
    penYds: 70
  }},
  output: {
    maryland
  }
},
{
  input: {pennState:{
    firstDowns: 28,
    rushAtt: 44,
    rushYds: 310,
    rushTD: 4,
    passComp: 14,
    passAtt: 24,
    passYds: 255,
    passTD: 1,
    INT: 0,
    totalYds: 565,
    fumbles: 2,
    fumLost: 1,
    TOs: 1,
    penalties: 3,
    penYds: 23
  },
  maryland:{
    firstDowns: 13,
    rushAtt: 36,
    rushYds: 74,
    rushTD: 0,
    passComp: 14,
    passAtt: 23,
    passYds: 185,
    passTD: 0,
    INT: 0,
    totalYds: 259,
    fumbles: 1,
    fumLost: 0,
    TOs: 0,
    penalties: 7,
    penYds: 65
  }},
  output: {
    pennState
  }
},
{
  input: {michigan:{
    firstDowns: 24,
    rushAtt: 40,
    rushYds: 171,
    rushTD: 1,
    passComp: 20,
    passAtt: 28,
    passYds: 294,
    passTD: 3,
    INT: 1,
    totalYds: 465,
    fumbles: 0,
    fumLost: 0,
    TOs: 1,
    penalties: 6,
    penYds: 52
  },
  maryland:{
    firstDowns: 11,
    rushAtt: 37,
    rushYds: 147,
    rushTD: 2,
    passComp: 7,
    passAtt: 13,
    passYds: 73,
    passTD: 0,
    INT: 1,
    totalYds: 220,
    fumbles: 0,
    fumLost: 0,
    TOs: 1,
    penalties: 12,
    penYds: 107
  }},
  output: {
    michigan
  }
},
{
  input: {michigan:{
    firstDowns: 24,
    rushAtt: 40,
    rushYds: 193,
    rushTD: 3,
    passComp: 18,
    passAtt: 27,
    passYds: 260,
    passTD: 3,
    INT: 0,
    totalYds: 453,
    fumbles: 0,
    fumLost: 0,
    TOs: 0,
    penalties: 2,
    penYds: 20
  },
  rutgers:{
    firstDowns: 11,
    rushAtt: 33,
    rushYds: 193,
    rushTD: 1,
    passComp: 9,
    passAtt: 20,
    passYds: 59,
    passTD: 0,
    INT: 1,
    totalYds: 252,
    fumbles: 1,
    fumLost: 1,
    TOs: 2,
    penalties: 3,
    penYds: 30
  }},
  output: {
    michigan
  }
}
]


//INITIALIZE THE BRAIN!!!!
// const network = new brain.NeuralNetwork();
//TRAIN THE BRAIN!!!!
// network.train(trainMe);



app.get('/', function (req, res) {
  res.render('index');
  
})
app.post('/', function (req, res) {
  const teams = (req.body.numbers).split(',');
debugger;
function checkScores(){
for (var i = 0; i < scores.length; i++) {
  var historyScore = (Object.keys(scores[i].input));

  if ((x == historyScore[0] || x == historyScore[1]) && (y == historyScore[0] || y == historyScore[1])) {
    var trainMe = scores[i];
    console.log(teams);
   }
}
}
  res.render('index');
  // const nums = (req.body.numbers).split(',').map(Number);
  // var numsArray = [];
  // let number;
  // for (var i = 0; i < nums.length; i++) {
  //   number = Math.round(nums[i], 10);
  //   numsArray.push(number);
  // }
  // const result = network.run(x, y);
  // console.log(result);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})