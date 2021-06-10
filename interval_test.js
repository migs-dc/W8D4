function alertMe(){
  console.log('hi');
}

// setInterval(alertMe, 10000)

const timerId = setInterval(alertMe, 1000)
// const timerId = setInterval(alertMe, 10000, parameter1, parameter2)

function stop(){
  clearInterval(timerId);
}

setInterval(stop, 5000)