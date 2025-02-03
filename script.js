document.getElementById('btn').addEventListener('click', async function() {
    // Retrieve the user-provided text and delay values
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10);

    // Check if both fields are filled out correctly
    if (text && !isNaN(delay) && delay >= 0) {
        // Display the message after the specified delay
        await displayMessageAfterDelay(text, delay);
    } else {
        document.getElementById('output').innerText = '';
    }
});

// Async function that introduces a delay and displays the message
async function displayMessageAfterDelay(message, delay) {
    // Wait for the specified delay (in milliseconds)
    await new Promise(resolve => setTimeout(resolve, delay));

    // Display the message in the output div
    document.getElementById('output').innerText = message;
}
