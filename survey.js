const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// blank array for answers
let profileA = [];
// add questions to an array to be cycled through
const profileQ = [
  "What's your name? Nicknames are also acceptable :): ",
  "What's an activity you like doing?: ",
  "What do you listen to while doing that?: ",
  "Which meal is your favourite (eg: dinner, brunch, etc.): ",
  "What's your favourite thing to eat for that meal?: ",
  "Which sport is your absolute favourite?: ",
  "What is your superpower? In a few words, tell us what you are amazing at!: "
];
// make a "loop" that'll go through profileQ array, will 'close' once last q is shifted
const questions = () => {
  rl.question(profileQ.shift(), answer => {
    profileA.push(answer)
    if (profileQ.length === 0) {
      rl.close();
    } else {
      questions();
    }
  });
};
//restarts question loop, not sure why 'else' isn't working
questions();
//create an object of all input answers once 'close'
rl.on('close', () => {
  profileA = {
    name: profileA[0],
    activity: profileA[1],
    music: profileA[2],
    foodTime: profileA[3],
    faveFood: profileA[4],
    sport: profileA[5],
    power: profileA[6]
  };
// create paragraph with answers submitted
const paragraph = `${profileA.name} has a passion for ${profileA.activity} and is always listening to ${profileA.music}. ${profileA.name} is always hungry at ${profileA.foodTime} and tends to crave ${profileA.faveFood}. Excelling at ${profileA.sport}, ${profileA.name} tends to flex the superpower ${profileA.power}.`;
//log the profile
console.log(paragraph);

});