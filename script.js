
// console.log('hello')
// var messageElement = document.getElementById('meassage')
// console.log('messageElement')
// messageElement.innerText = 'Hi'
// document.body.style['background'] = 'green'
// messageElement.classList.add('big')

/*
Note to self... this is a multi-line comment
*/

//date information//
var leapYear = false
var year = 2020
var month = ' novemeber'
var day = ' tuesday'

year = 2 * (2021 + 1) * 36 / 72
year = year +1

var now = new Date ()
year = now.getFullYear()
console. log(year)

var dateSentence = 'it is '  + month + ' in ' + year
console.log(dateSentence)

//name and birthday information//
var myName = ' anna'
var myMiddleName = ' lenore'
var myLastName = ' brown'
var myBirthday = ' novemeber 21 '
var myStarSign = ' scorpio'

var nameSentence = 'my name is'  + myName +  myMiddleName +  myLastName
console.log(nameSentence)

var birthdaySentence = 'my birthday is '  + myBirthday 
console.log(birthdaySentence)

var StarSignSentence = 'and my star sign is ' + myStarSign
console.log(StarSignSentence)

//stuff about me//
var myFavoriteColor = ' yellow '
var myPlace = ' east village '
var myJob = ' designer '
var myRelationshipStatus = ' engaged? '

var favoriteColorSentence = 'my favorite color is ' + myFavoriteColor
console.log(favoriteColorSentence)
var whereILiveSentence = 'i live in the ' + myPlace
console.log(whereILiveSentence)
var myJobSentence = 'i am a ' + myJob
console.log(myJobSentence)
var relationshipSentence = 'i am ' + myRelationshipStatus
console.log(relationshipSentence)

var mediumsUsed = 'paint, paper, glue, poloroids, recycled materials, and memories'
var aboutThem = 'all about love stories'
var whereTheyAre = 'in my journal'

var mediumsUsedSentence = 'as my materials i used' + mediumsUsed
console.log(mediumsUsedSentence)
var aboutThemSentence =  'these poems are' + aboutThem
console.log(aboutThemSentence)
var whereTheyAreSentence = 'these poems currently live' + whereTheyAre
console.log(whereTheyAreSentence)

//variable scope
//variables that you make inside a function will only be known inside that function
//basically, the variable's scope is in the function


//Run a function every 0.5 nseconds//
window.setInterval(changeColor, 500)