async function askAI() {

  const q = document.getElementById("question").value;

  document.getElementById("answer").innerHTML = "Thinking...";

  try {

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AQ.Ab8RN6IlxTLzr1YFvV-xEj9CjAhk2oHbIAMzJrRHG1B_mJHeGw",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: q
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.error) {
      document.getElementById("answer").innerHTML =
        "Error: " + data.error.message;
      return;
    }

    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response received.";

    document.getElementById("answer").innerHTML = answer;

  } catch (err) {

    document.getElementById("answer").innerHTML =
      "Error: " + err.message;

  }
}
