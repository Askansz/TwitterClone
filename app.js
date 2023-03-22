// Store tweets in an array
let tweets = [];

// Get the tweet form and input element
const tweetForm = document.getElementById('tweet-form');
const tweetInput = document.getElementById('tweet-input');

// Get the tweet list element
const tweetList = document.getElementById('tweet-list').querySelector('ul');

// Add event listener to tweet form
tweetForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const tweetText = tweetInput.value; // Get the text of the new tweet
    const tweet = { text: tweetText }; // Create a new tweet object
    tweets.push(tweet); // Add the tweet object to the tweets array
    tweetInput.value = ''; // Clear the tweet input field
    console.log(tweets); // Log the tweets array to the console
    renderTweets(); // Render the updated list of tweets
});

// Function to render the list of tweets
function renderTweets() {
    tweetList.innerHTML = ''; // Clear the existing list
    for (let i = 0; i < tweets.length; i++) {
        const tweet = tweets[i];
        const li = document.createElement('li'); // Create a new list item element
        li.innerText = tweet.text; // Set the text content of the list item to the tweet text
        tweetList.appendChild(li); // Append the list item to the tweet list
    }
}
