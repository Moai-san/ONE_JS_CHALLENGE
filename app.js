// LEONARDO GONZALEZ CATALAN [MOAI-SAN] - FEBRUARY 08, 2025. ORACLE ONE PROGRAM, GROUP 8.

//GLOBAL VARS

//secret friend array
var secretFriend = new Array();

/* FUNCTIONS */

//Random int generator between two values
function randInt(min = 0, max = secretFriend.length)
{
    return Math.floor(Math.random() * (max - min) + min);
}

//puts friend into "secret friend" array
function pushFriend(friend)
{
    //validate input, it needs to be a non empty string, and also it can't have numbers as names don't have numbers.
    if (friend == '' || friend.match(/\d/) != null)
    {
        alert("INGRESE NOMBRE VALIDO")
        return;
    }

    //function per se
    secretFriend.push(friend.toUpperCase());

    //front/visual stuff

    //create new list item
    const frontFriend = document.createElement('li');
    frontFriend.textContent = friend.toUpperCase();

    //add the newly created item to the friend list
    (document.getElementById('friendList')).appendChild(frontFriend);
    //clean the field
    document.getElementById('friend').value = '';
}

//gets random friend from the array
function getRandom_friend()
{
    //non-null array validation
    if(secretFriend.length==0)
    {
        alert("EPA!!!! Aun no ingresas a nadie en la lista, prueba añadir gente primero.")
        return;
    }
    //front/visual stuff
    document.getElementById("result").innerHTML = `El amigo secreto es: ${(secretFriend[ randInt(0,secretFriend.length) ])}`;
}