// Open Chatbox
function openChat() {
    document.getElementById("chatContainer").style.display = "block";
}

// Close Chatbox
function closeChat() {
    document.getElementById("chatContainer").style.display = "none";
}

// Handle Key Press (Enter Key)
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Send User Message & Get Response
function sendMessage() {
    let userText = document.getElementById("userInput").value.trim().toLowerCase();
    if (userText === "") return;

    // Append User Message
    appendMessage("user-message", userText);

    // Check Response
    let response = getResponse(userText);
    setTimeout(() => {
        appendMessage("bot-message", response);
    }, 500);

    // Clear Input
    document.getElementById("userInput").value = "";
}

// Function to Append Messages
function appendMessage(className, text) {
    let chatBody = document.getElementById("chatBody");
    let messageDiv = document.createElement("p");
    messageDiv.className = className;
    messageDiv.textContent = text;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
}

// Get Response Based on Keywords with Improved Matching
function getResponse(userText) {
    let responses = {
        "clinic timings" : "Our clinic is open Mon - Sat (5 PM - 10 PM).",
        "contact number": "You can reach us at +91 99864 35750.",
        "location": "We are located at RTO Circle, Opposite KSRTC Depo, Shivaji Nagar, Belagavi.",
        "panchakarma treatment": "Panchakarma treatment will start next month!",
        "infertility treatment": "Infertility treatment is available every Thursday.",
        "swarna bindu prashanam": "It is available on Pushya Nakshatra days.",
        "ayurvedic treatments": "We offer treatments for IVDP, Back Pain, Acidity, and more!"
    };

    userText = userText.toLowerCase().trim();

    // Check for the closest matching keyword
    for (let key in responses) {
        if (userText.includes(key) || key.includes(userText)) {
            return responses[key];
        }
    }

    return "I'm sorry, I didn't understand that. Can you please rephrase?";
}


// Open Chat Function
function openChat() {
    document.getElementById('chatContainer').style.display = 'block';
    document.getElementById('suggestedQuestions').style.display = 'block';
}

// Close Chat Function
function closeChat() {
    document.getElementById('chatContainer').style.display = 'none';
    document.getElementById('suggestedQuestions').style.display = 'none';
}

// Function to handle sending suggested messages
function sendSuggested(message) {
    document.getElementById("userInput").value = message;
    sendMessage();
}

// Send User Message & Get Response
function sendMessage() {
    let userText = document.getElementById("userInput").value.trim().toLowerCase();
    if (userText === "") return;

    appendMessage("user-message", userText);

    let response = getResponse(userText);
    setTimeout(() => {
        appendMessage("bot-message", response);
    }, 500);

    document.getElementById("userInput").value = "";

    // Hide suggested questions after first message
    document.getElementById("suggestedQuestions").style.display = "true";
}

