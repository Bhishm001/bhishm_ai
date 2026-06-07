async function askAI() {

  const q = document.getElementById("question").value;

  document.getElementById("answer").innerHTML = "Thinking...";

  try {

    const response = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": "AQ.Ab8RN6K3zRHL3A5G5NMptSWy1TSqcqnWH3hwTRNc2QZQebPhKA"
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
