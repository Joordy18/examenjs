document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "Quelle est la syntaxe correcte pour faire référence à un script externe appelé  'xxx.js?'",
            options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>"],
            answer: 2
        },
        {
            question: "Comment écrire « Hello World » dans une boîte d'alerte ?",
            options: ["msgBox('Hello World');", "alert('Hello World');", "msg('Hello World');"],
            answer: 1
        },
        {
            question: "Comment créer une fonction en JavaScript ?",
            options: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
            answer: 0
        },
        {
            question: "Comment appeler une fonction nommée 'myFonction' ?",
            options: ["call myFunction()", "call function myFunction()", "myFunction()"],
            answer: 2
        },
        {
            question: "Comment écrire une instruction IF en JavaScript ?",
            options: ["if i = 5 then", "if (i == 5)", "if i == 5 then"],
            answer: 1
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit-quiz');
    let score = 0;

    quizData.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionElement.appendChild(questionTitle);

        q.options.forEach((option, i) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = i;
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            questionElement.appendChild(optionLabel);
            questionElement.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionElement);
    });

    submitButton.addEventListener('click', () => {
        score = 0;
        quizData.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && parseInt(selectedOption.value) === q.answer) {
                score++;
            }
        });
        alert(`Score: ${score} / ${quizData.length}`);
    });
});