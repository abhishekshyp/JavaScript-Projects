// DOM Variables
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Set Date Function
function setDate() {
    // Get the current date
    const now = new Date();

    // Get the current seconds
    const seconds = now.getSeconds();
    // Transform seconds to degrees for seconds hand of the clock
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Get the current minutes
    const mins = now.getMinutes();
    // Transform minutes to degrees for minutes hand of the clock
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // Get the hours
    const hour = now.getHours();
    // Transform the hours to degrees
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Set Interval Function
setInterval(setDate, 1000);

// Calling the setDate() function
setDate();