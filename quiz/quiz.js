// quiz.js
document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    const form = document.forms["personalityTest"];
    const interpretationDiv = document.getElementById("interpretation"); // Get the interpretation div
    let allQuestionsAnswered = true;

    // Initially disable the button
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "gray"; // Change the color to indicate it's disabled
    submitBtn.style.cursor = "not-allowed";   // Change the cursor to indicate it's disabled


    // Function to check if all questions are answered
    function checkAllQuestionsAnswered() {
        for (let i = 1; i <= 45; i++) {
            const questionName = `q${i}`;
            let questionAnswered = false;
            const radioButtons = document.getElementsByName(questionName);

            for (let j = 0; j < radioButtons.length; j++) {
                if (radioButtons[j].checked) {
                    questionAnswered = true;
                    break;
                }
            }

            if (!questionAnswered) {
                return false; // If any question is unanswered, return false
            }
        }
        return true; // All questions are answered
    }

    // Add event listeners to all radio buttons to check if all questions are answered
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radio) {
        radio.addEventListener("change", function() {
            allQuestionsAnswered = checkAllQuestionsAnswered();
            submitBtn.disabled = !allQuestionsAnswered;

            if (allQuestionsAnswered) {
                submitBtn.style.backgroundColor = "#007BFF"; // Re-enable the original color
                submitBtn.style.cursor = "pointer";          // Change the cursor back to a pointer
            } else {
                submitBtn.style.backgroundColor = "gray";
                submitBtn.style.cursor = "not-allowed";
            }
        });
    });

    submitBtn.addEventListener("click", function() {
        if (!allQuestionsAnswered) {
            alert("Please answer all questions before submitting.");
            return;
        }

        const scores = { a: 0, b: 0, c: 0, d: 0 };

        for (let i = 1; i <= 45; i++) {
            const questionName = `q${i}`;
            const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
            if (selectedOption) {
                scores[selectedOption.value]++;
            }
        }

        let highestScore = Math.max(scores.a, scores.b, scores.c, scores.d);
        let color = "";
        let colorStyle = ""; // Define colorStyle here
        if (scores.a === highestScore) {
            color = "Red";
            colorStyle = "color: red;";
        } else if (scores.b === highestScore) {
            color = "Blue";
            colorStyle = "color: blue;";
        } else if (scores.c === highestScore) {
            color = "White";
            colorStyle = "color: grey;";  // Making White grey so that it can be seen
        } else if (scores.d === highestScore) {
            color = "Yellow";
            colorStyle = "color: yellow;";
        }

        const resultDiv = document.getElementById("result");
        let resultHTML = `<h2 style="${colorStyle}">Your Color is ${color}</h2>`; // Use colorStyle here
        resultHTML += `<p>Red Score: ${scores.a}</p>`;
        resultHTML += `<p>Blue Score: ${scores.b}</p>`;
        resultHTML += `<p>White Score: ${scores.c}</p>`;
        resultHTML += `<p>Yellow Score: ${scores.d}</p>`;
        resultDiv.innerHTML = resultHTML;

        interpretationDiv.style.display = "block";
    });
});
