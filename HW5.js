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
  ------------------------------------------------------------------------------------
4






