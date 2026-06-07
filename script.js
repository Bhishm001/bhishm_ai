function startListening() {
    const recognition =
        new (window.SpeechRecognition ||
             window.webkitSpeechRecognition)();

    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        const text = event.results[0][0].transcript;
        document.getElementById("question").value = text;
        askAI();
    };

    recognition.start();
}

function askAI() {
    const q = document.getElementById("question").value;

    const answer =
        "Hello Bhishm. I heard you say: " + q;

    document.getElementById("answer").innerHTML = answer;

    const speech = new SpeechSynthesisUtterance(answer);
    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);
}
