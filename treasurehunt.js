var dog =  Math.floor(Math.random() * 9)
var cat =  Math.floor(Math.random() * 9)
if (cat===dog) {
  var cat = Math.floor(Math.random() * 9)
}
 console.log (dog)
   console.log (cat)

const treasure = (location) => {
  if(dog === location) {
    document.getElementById(location).innerHTML = "🐺"
    setTimeout(function() {
    alert ("You win!")
  }, 0.5)
    setTimeout(function() {
      document.getElementById("table").innerHTML = ""
    }, 2)
  } else if (cat === location) {
      document.getElementById(location).innerHTML = "🦁"
      setTimeout(function() {
      alert ("You lose!")
    }, 0.5)
      setTimeout(function() {
      document.getElementById("table").innerHTML = ""
    }, 2)
  } else {
    document.getElementById(location).innerHTML = "⚔️"
  }
}


var counterVal = 8;
function incrementClick() {
   updateDisplay(--counterVal);
if(counterVal === 0) {  
  alert("You Lose! Try Again!!")
  location.reload()
  }
}

function updateDisplay(val) {
   document.getElementById("counter-label").innerHTML = val;
}
