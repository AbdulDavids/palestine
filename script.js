let activeButtons = [];

function toggleButton(buttonId) {
    const button = document.getElementById(`button${buttonId}`);
    
    if (button.classList.contains('active')) {
        // If the button is already active, deactivate it
        button.classList.remove('active');
        activeButtons = activeButtons.filter(id => id !== buttonId);
    } else {
        // If the maximum number of active buttons is reached, deactivate the oldest one
        if (activeButtons.length === 2) {
            const oldestButtonId = activeButtons.shift();
            document.getElementById(`button${oldestButtonId}`).classList.remove('active');
        }

        // If button 3 is clicked, deactivate button 2 if it's active
        if (buttonId === 3 && activeButtons.includes(2)) {
            const button2Index = activeButtons.indexOf(2);
            activeButtons.splice(button2Index, 1);
            document.getElementById(`button2`).classList.remove('active');
        }

        // If button 2 is clicked, deactivate button 3 if it's active
        if (buttonId === 2 && activeButtons.includes(3)) {
            const button3Index = activeButtons.indexOf(3);
            activeButtons.splice(button3Index, 1);
            document.getElementById(`button3`).classList.remove('active');
        }

        // Activate the clicked button
        button.classList.add('active');
        activeButtons.push(buttonId);
    }
}
