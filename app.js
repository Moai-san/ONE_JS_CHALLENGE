// LEONARDO GONZALEZ CATALAN [MOAI-SAN] - FEBRUARY 08, 2025. ORACLE ONE PROGRAM, GROUP 8.

//GLOBAL VARS

//secret friend array
var secretFriend = new Array();

/* FUNCTIONS */

//Random int generator between two values
function randInt(min = 0, max = secretFriend.length)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//puts friend into "secret friend" array
function pushFriend(friend)
{
    secretFriend.push(friend);
}

//gets random friend from the array
function getRandom_friend()
{
    return(secretFriend[ randInt(0,secretFriend.length) ])
}

/* MAIN BODY*/


