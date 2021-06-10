// console.log(Date());

class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.

    this.date = new Date();
    this.time = this.date.getTime();
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();
    this.hours = this.date.getHours();

    this.printTime();
    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    
    let time = "";
    time = time.concat(this.hours.toString());
    time = time.concat(":");
    time = time.concat(this.minutes.toString());
    time = time.concat(":");
    time = time.concat(this.seconds.toString());

    console.log(time);
    // debugger
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    // debugger
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }

    this.printTime();
  }
}

// const clock = new Clock();

