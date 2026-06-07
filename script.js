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

async function askAI() {

    const q = document.getElementById("question").value;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AQ.Ab8RN6J5-M1m4VnflfPxRdaJig4UEMXUus1ffWz9qk-6OoDOJg",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: q
            }]
          }]
        })
      }
    );

    const data = await response.json();

    const answer =
      data.candidates[0].content.parts[0].text;

    document.getElementById("answer").innerHTML =
      answer;
}
