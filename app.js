// Store tweets in an array
let tweets = [];

// Get the tweet form and input element
const tweetForm = document.getElementById('tweet-form');
const tweetInput = document.getElementById('tweet-input');

// Add event listener to tweet form
tweetForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const tweetText = tweetInput.value; // Get the text of the new tweet
    const tweet = { text: tweetText }; // Create a new tweet object
    tweets.push(tweet); // Add the tweet object to the tweets array
    tweetInput.value = ''; // Clear the tweet input field
    console.log(tweets); // Log the tweets array to the console
});
