//create an array of people to draw from
const arrOfPeople = [
    {
      id: 2,
      name: "John Goodman",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Lesley White",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Geroge Lumen",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "Pipe-Hitin Rick",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Load Bruce",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Travis Mane",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter White",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    }
  ];
  
  const listOfPlayers = [];
  const blueTeam = [];
  const redTeam = [];
  
  class Player {
    constructor(
      id, 
      name,
      age,
      skillSet, 
      placeBorn
    ) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.skillSet = skillSet;
      this.placeBorn = placeBorn;
    }
    joinRedTeam(redTeam) {
      this.redTeam = redTeam;
      player.redTeam.push(this);
    }
    joinBlueTeam(blueTeam) {
      this.blueTeam = blueTeam;
      player.blueTeam.push(this);
    }
  }
  class Teammate  extends Player{
    constructor(
      id, 
      name,
      age, 
      skillSet,
      placeBorn,
      canThrowBall,
      canDodgeBall, 
      hasPaid,
      isHealthy,
      yearsExperience,
      mascot,
      teamColor
    ) {
    super(
        id,
        name,
        age,
        skillSet,
        placeBorn
    )
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy, 
      this.yearsExperience = yearsExperience, 
      this.mascot = mascot;
      this.teamColor = teamColor;
    }
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById("people");
    //and we gonna jack the people from "arrOfPeople!" and start 'person'
    arrOfPeople.map(person => {
      //create list item in UL
      const li = document.createElement("li");
      var button = document.createElement("button");
      button.innerHTML = "Make Player";
      button.addEventListener("click", function() {
        makePlayer(person.id);
      });
      //append the set items into the DOM
      li.appendChild(button);
      li.appendChild(
        document.createTextNode(person.name + " - " + person.skillSet)
      );

      listElement.append(li);
    });
  };
  
  //  lets code makePlayer
  const makePlayer = id => {

    const players = document.getElementById("players");

    const findPlayer = arrOfPeople.find((entry) => {

      return entry.id == id
    });
    console.log(findPlayer);
    const playerIndex = arrOfPeople.indexOf(findPlayer);
    console.log(
      `player index ${playerIndex}. Push to "Player list". Remove from "list of Players`
    );
    const newPlayer = new Player(
      findPlayer.id, 
      findPlayer.name,
      findPlayer.age,
      findPlayer.skillSet,
      findPlayer.placeBorn,
      true,
      true,
      true, 
      true, 
      4
    );
    
    listOfPlayers.push(newPlayer);
    arrOfPeople.splice(playerIndex, 1);
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newPlayer.name + " - "));
  
    const blueButton = document.createElement("button");
    blueButton.style.color = "white";
    blueButton.style.backgroundColor = "blue";
    blueButton.innerHTML = "Blue Team"
    blueButton.addEventListener("click", function(){
      makeBluePlayer(newPlayer.id);
      players.removeChild(li);
    });
    li.appendChild(blueButton);
    const redButton = document.createElement('button');
    redButton.style.color = "white";
    redButton.style.backgroundColor = "red";
    redButton.innerHTML = "Red Team"
    redButton.addEventListener("click", function(){
      makeRedPlayer(newPlayer.id);
      players.removeChild(li);
    });
    li.appendChild(redButton);
      players.append(li);

  

  const makeBluePlayer = id => {
    const bluePlayer = document.getElementById("blue");
    const selectBlue = listOfPlayers.find(function(pick){
        return pick.id == id;
    })
    const blueIndex = listOfPlayers.indexOf(selectBlue)
    const newBlue = new Teammate(
        selectBlue.id,
        selectBlue.name, 
        selectBlue.age,
        selectBlue.skillSet,
        selectBlue.placeBorn,
        true,
        true,
        true,
        true,
        45,
        "blue baracudas",
        "blue"

    );
    blueTeam.push(newBlue);
    listOfPlayers.splice(blueIndex, 1);

    const li = document.createElement("li");
    li.appendChild(
        document.createTextNode(newBlue.name + "- Mascot = " + newBlue.mascot + " and team color is " + newBlue.color)
    );
    bluePlayer.append(li);
  }

  const makeRedPlayer = id => {
    const redPlayer = document.getElementById("red");
    const selectRed = listOfPlayers.find(function(pick){
        return pick.id == id;
    })
    const redIndex = listOfPlayers.indexOf(selectRed)
    const newRed = new Teammate(
        selectRed.id,
        selectRed.name, 
        selectRed.age,
        selectRed.skillSet,
        selectRed.placeBorn,
        true,
        true,
        true,
        true,
        45,
        "Red Jaguars",
        "Red"

    );
    redTeam.push(newRed);
    listOfPlayers.splice(redIndex, 1);

    const li = document.createElement("li");
    li.appendChild(
        document.createTextNode(newRed.name + "- Mascot = " + newRed.mascot + " and team color is " + newRed.color)
    );
    redPlayer.append(li);
  }

  //tests
let assert = require('assert');

if (typeof describe === 'function'){
  describe('Player', function(){
    it('should be able to become a red Player', function(){
      if (listOfPlayers.id == 2 && redTeam.id == 2) {
        return true;
      }
    });
  });
  it('should be able to become a player', function(){
    if (arrOfPeople.id == 2 && listOfPlayer.id == 2) {
      return true;
    }
  });
  it('should be able to become a blue Player', function(){
    if (listOfPlayers.id == 2 && blueTeam.id == 2) {
      return true;
    }
  });
  
}
