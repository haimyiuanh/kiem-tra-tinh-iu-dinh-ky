function checkResult() {
    let score = 0;
  
    const answers = {
        q1: "B",
        q2: "B"
    };

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Bạn trả lời đúng ${score}/2 câu`;
}
