const createQuizFormEl = document.getElementById("createQuizForm")
createQuizFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    // let quizAnswers = JSON.parse(createQuizFormEl.elements["q1answer"]);

    // console.log(quizAnswers);
    
    const myFormData = new FormData(event.target);

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));

    console.log("This is form data");
    console.log(formDataObj);
})

