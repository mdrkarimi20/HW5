 1

 function validateEmail( email ) {
    let at = email.indexOf( "@" );
    let dot = email.lastIndexOf( "\." );
    return email.length > 0 &&
           at > 0 &&
           dot > at + 1 &&
           dot < email.length &&
           email[at + 1] !== "." &&
           email.indexOf( " " ) === -1 &&
           email.indexOf( ".." ) === -1;
  }

  function assert( a, b ) {
    return a == b;
  }

  console.log( assert( validateEmail( "mohammad@mohammady.com" ), true ) );
  console.log( assert( validateEmail( "mahammad@mahammady.co.ir" ), true ) );
  console.log( assert( validateEmail( "m@m.ir" ), true ) );
  console.log( assert( validateEmail( "mohammmad.reza.karimi@mrk.co" ), true ) );
  console.log( assert( validateEmail( "mohammmad.reza.karimi@mrk.co.ir.com" ), true ) );
  console.log( assert( validateEmail( "UpperCase@ThisIsUP.com" ), true ) );

  console.log( assert( validateEmail( "mohammad@.com" ), false ) );
  console.log( assert( validateEmail( "mohammad@aaa.com." ), false ) );
  console.log( assert( validateEmail( "mohammad@steve" ), false ) );
  console.log( assert( validateEmail( "@mohammad.com" ), false ) );
  console.log( assert( validateEmail( "mohammad@" ), false ) );
  console.log( assert( validateEmail( "mohammad" ), false ) );
  console.log( assert( validateEmail( "mohammad@mohammady..com" ), false ) );
  console.log( assert( validateEmail( "mohammad@.mohammad.com" ), false ) );
  console.log( assert( validateEmail( "mohammad@mohammady..com" ), false ) );
  -------------------------------------------------------------------------------
  2
  function validatePhoneNumber( number ) {
    const Zero = number.indexOf( "0" );
    const Nine = number.lastIndexOf( "\9" );
    return number.length > 0 &&
           number.length < 12 &&
           Zero >= 0 &&
           Nine > Zero + 1 &&
           !isNaN(number) == 1;
           number.indexOf( " " ) === -1;
}
           
   function assert( a, b ) {
    return a == b;
  }

  console.log( assert( validatePhoneNumber( "09105467988" ), true ) );
  console.log( assert( validatePhoneNumber( "009105467988" ), false ) );
  console.log( assert( validatePhoneNumber( "909105467988" ), false ) );
  console.log( assert( validatePhoneNumber( "091054679889" ), false ) );
  console.log( assert( validatePhoneNumber( "19185467988" ), false ) );
  console.log( assert( validatePhoneNumber( "09b05467988" ), false ) );
          

    function validatePhoneNumber(index,arr){
    arr[index][0]=='0';
    arr[index][1]=='9'; 
    return  arr[index] < 12 && 
            !isNaN(arr[index]) == 1;
  }
---------------------------------------------------------------------------
3
    function validateUserName( name ) {
    let dot = name.indexOf( "." );
    let dash = name.lastIndexOf( "\_" );
    return name.length > 2 &&
           name.length < 10 &&
           dot >= 0 &&
           dash >= 0 &&
           dash < name.length &&
           name.indexOf( " " ) === -1;    
}

function assert( a, b ) {
    return a == b;
  }

  console.log( assert( validateUserName( "moha.ma_d" ), true ) );
  console.log( assert( validateUserName( "mohamm-ad" ), false ) );
  console.log( assert( validateUserName( "moh.ammad" ), false ) );
  console.log( assert( validateUserName( "moh.a-mmadreza" ), false ) );
  console.log( assert( validateUserName( "mh" ), false ) );
----------------------------------------------------------------------------------------
4
let serchUserName = function (userName="instance" , userList=[]) {
         for(let i of userList){
            if(user == i){
         return false;
                 }
        }
        return true
    }
    serchUserName();
---------------------------------------------------------------------------------------
5
function myRandom(start,end){
randomNumber = start + Math.floor(Math.random() * (end-start));
return randomNumber;
}
console.log(myRandom(1000,5999))
--------------------------------------------------------------------------------------
6

let array = [{name: "lang", value: "English"},{name: "age", value: "18"}]

    let merge = function (...obj) {
        return Object.assign({}, ...obj);
    }

    let result = merge(array);
    console.log(result);
-------------------------------------------------------------------------------------
7
let array1 = [1, 80];
let arrary2 = [30, 99.5];
let number = 3;

    const mapRange = function(array1, array2, number) {
        return Math.round((array2[0] + ((num - array1[0]) * (array2[1] - array2[0]))) / array1[1] - array1[0])
    }

    console.log(mapRange(array1, array2, number));
--------------------------------------------------------------------------------------
8 Fisher–Yates Shuffle
var array = [5, 20, 32, 40];
console.log(shuffle(array));
        

function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
    }

    return array;
}
----------------------------------------------------------------------------------
9
new Date(2020,04,09).toLocaleDateString('fa-Ir');



week = new Array("يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه")
months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
today = new Date();
d = today.getDay();
day = today.getDate();
month = today.getMonth() + 1;
year = today.getYear();
year = (window.navigator.userAgent.indexOf('MSIE') > 0) ? year : 1900 + year;
if (year == 0) {
    year = 2000;
}
if (year < 100) {
    year += 1900;
}
y = 1;
for (i = 0; i < 3000; i += 4) {
    if (year == i) {
        y = 2;
    }
}
for (i = 1; i < 3000; i += 4) {
    if (year == i) {
        y = 3;
    }
}
if (y == 1) {
    year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
    switch (month) {
        case 1:
            (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
            break;
        case 2:
            (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
            break;
        case 3:
            (day < 21) ? (month = 12, day += 9) : (month = 1, day -= 20);
            break;
        case 4:
            (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
            break;
        case 5:
        case 6:
            (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
            break;
        case 7:
        case 8:
        case 9:
            (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
            break;
        case 10:
            (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
            break;
        case 11:
        case 12:
            (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
            break;
        default:
            break;
    }
}
if (y == 2) {
    year -= ((month < 3) || ((month == 3) && (day < 20))) ? 622 : 621;
    switch (month) {
        case 1:
            (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
            break;
        case 2:
            (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
            break;
        case 3:
            (day < 20) ? (month = 12, day += 10) : (month = 1, day -= 19);
            break;
        case 4:
            (day < 20) ? (month = 1, day += 12) : (month = 2, day -= 19);
            break;
        case 5:
            (day < 21) ? (month = 2, day += 11) : (month = 3, day -= 20);
            break;
        case 6:
            (day < 21) ? (month = 3, day += 11) : (month = 4, day -= 20);
            break;
        case 7:
            (day < 22) ? (month = 4, day += 10) : (month = 5, day -= 21);
            break;
        case 8:
            (day < 22) ? (month = 5, day += 10) : (month = 6, day -= 21);
            break;
        case 9:
            (day < 22) ? (month = 6, day += 10) : (month = 7, day -= 21);
            break;
        case 10:
            (day < 22) ? (month = 7, day += 9) : (month = 8, day -= 21);
            break;
        case 11:
            (day < 21) ? (month = 8, day += 10) : (month = 9, day -= 20);
            break;
        case 12:
            (day < 21) ? (month = 9, day += 10) : (month = 10, day -= 20);
            break;
        default:
            break;
    }
}
if (y == 3) {
    year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
    switch (month) {
        case 1:
            (day < 20) ? (month = 10, day += 11) : (month = 11, day -= 19);
            break;
        case 2:
            (day < 19) ? (month = 11, day += 12) : (month = 12, day -= 18);
            break;
        case 3:
            (day < 21) ? (month = 12, day += 10) : (month = 1, day -= 20);
            break;
        case 4:
            (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
            break;
        case 5:
        case 6:
            (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
            break;
        case 7:
        case 8:
        case 9:
            (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
            break;
        case 10:
            (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
            break;
        case 11:
        case 12:
            (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
            break;
        default:
            break;
    }
}
console.log(week[d] + " " + day + " " + months[month - 1] + " " + year);       
