// DOM Objects
const keys = Array.from(document.querySelectorAll('.key'));

// Remove Transition Functions
function removeTransition(e) {
    // Return if no transition
    if (e.propertyName !== 'transform') return;
    
    // Remove if transition is present
    e.target.classList.remove('playing');
}

// Playsound Function
function playSound(e) {
    // Get the keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    // If audio is empty return null
    if (!audio) return;

    // Add the class playing for transition of button
    key.classList.add('playing');

    // Play the audio
    audio.currentTime = 0;
    audio.play();
}

// Event Listener
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

