const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum = 0, numsLeft = 3, completionCallback){
  if (numsLeft > 0) {
    let num = rl.question(`Please, input a number: `, answer => {
      sum += parseInt(answer);
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    } );
  } else {
    rl.close();
    completionCallback(sum);
  }
}

// function sum(num){

// }

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
