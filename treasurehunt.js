//  var dog =  Math.floor(Math.random() * 9)
//  var catScratch = Math.floor(Math.random() * 9)
//     // if(location === "0") {
//     //     document.getElementById("0").innerHTML = "0"
//     // } else if(location === "1") {
// const treasure = (location) => {
//     if(dog === location) {
//         document.getElementById("park").innerHTML = "You win" // location will be html id
//     } else if(catScratch === location) {
//         document.getElementById("park").innerHTML = "You lose" // location will be html id
//var dog =  Math.floor(Math.random() * 9)
// //var catScratch = Math.floor(Math.random() * 9)
//   if dog = catScratch {
//     var catScratch = Math.floor(Math.random() * 9)
//   }
var dog =  Math.floor(Math.random() * 9)
   console.log (dog)
   var cat =  Math.floor(Math.random() * 9)

     if (cat===dog) {
       var cat = Math.floor(Math.random() * 9)
     }
   console.log (cat)

     const treasure = (location) => {
       if(dog === location) {
         document.getElementById(location).innerHTML = "🐶"
         alert ("You win!")
     } else if (cat=== location) {
         document.getElementById(location).innerHTML = "😾"
         alert ("You lose!")
     } else if (dog!=location) {
       document.getElementById(location).innerHTML = "&#x1f332"

     }
   }
var counterVal = 8;
function incrementClick() {
   updateDisplay(--counterVal);
if(counterVal === 0) {
       alert("You Lose! Press Reset Button")
       location.reload()
   }
}

function updateDisplay(val) {
   document.getElementById("counter-label").innerHTML = val;
}
