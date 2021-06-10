// console.log(Date());

class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.

    this.date = new Date();
    this.time = this.date.getTime();
    this.printTime();
    // setInterval(this._tick.bind(this), 1000);
    console.log(this.date.getUTCHours());
    console.log(this.date.getHours());

  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    
    console.log(this.time);
    // debugger
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    // debugger
    this.time += 1000;
    this.printTime();
  }
}

const clock = new Clock();

