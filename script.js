////Question Time!

//Starting off, basic button progression

let buttonSubmitStart = document.querySelector("#start");
let startQuestion = document.querySelector(".q-start");
let results =  document.querySelector(".result");
let quizTakeOn = 0;

let qButtonArray = [];
let qClassArray = [];
let answerArray = [];
let customAnswerArray = [];
for (var i = 1;i<=10;i++){
    qButtonArray.push(document.querySelector("#sub"+i));
    qClassArray.push(document.querySelector(".q-"+i));
    answerArray.push("");
    customAnswerArray.push("");
}

function takeAnswer(answer){
    let keyinNum = quizTakeOn;
    let keyinStr = answer.slice((keyinNum+"-").length,answer.length);

    if (answer!==answerArray[quizTakeOn-1]){
        answerArray[quizTakeOn-1] = answer;
        let questionSet = document.querySelector(".set-"+keyinNum);
        let answerChoice = questionSet.querySelector(".answer-"+keyinStr);

        let questionSetFull = questionSet.querySelectorAll(".list-answer");
        for (var i=0;i<4;i++){
            if (questionSetFull[i]===answerChoice){
                answerChoice.style.backgroundColor = "#e2e2e2";
            } else {
                questionSetFull[i].style.backgroundColor = "#bbbbbb";
            }
        }
    }

}

let pCounter,mCounter,xCounter,sCounter,cCounter,eCounter,tCounter,iCounter;
pCounter = mCounter = xCounter = sCounter = cCounter = eCounter = tCounter = iCounter=0;

function compileAnswers(){
    for (var i =0;i<10;i++){
        let registerItem;

        if (customAnswerArray[i]!==null){
            cCounter++;
            sCounter++;
        } else {
            registerItem = answerArray[i];
            switch (i) {
                case 1:
                    switch (registerItem) {
                        case "1-A":
                            cCounter++;
                            eCounter++;
                            break;
                        case "1-B":
                            pCounter++;
                            mCounter++;
                            xCounter++;
                            break;
                        case "1-C":
                            eCounter++;
                            sCounter++;
                            break;
                        case "1-D":
                            mCounter++;
                            tCounter++;
                            break;
                    }
                    break;
                case 2:
                    switch (registerItem) {
                        case "2-A":
                            xCounter++;
                            pCounter++;
                            mCounter++;
                            break;
                        case "2-B":
                            sCounter++;
                            cCounter++;
                            eCounter++;
                            tCounter++;
                            break;
                        case "2-C":
                            xCounter += 2;
                            mCounter++;
                            break;
                        case "2-D":
                            if (eCounter>=tCounter) iCounter++;
                            mCounter++;
                            pCounter++;
                            break;
                    }
                    break;
                case 3:
                    switch (registerItem) {
                        case "3-A":
                            eCounter += 2;
                            cCounter ++;
                            break;
                        case "3-B":
                            pCounter++;
                            mCounter--;
                            break;
                        case "3-C":
                            tCounter++;
                            xCounter++;
                            break;
                        case "3-D":
                            pCounter++;
                            sCounter++;
                            break;
                    }
                    break;
                //case 4 is missing because it does not pertain to the process
                case 5:
                    switch (registerItem) {
                        case "5-A":
                            pCounter++;
                            xCounter++;
                            break;
                        case "5-B":
                            mCounter++;
                            eCounter++;
                            break;
                        case "5-C":
                            xCounter+=3;
                            cCounter++;
                            break;
                        case "5-D":
                            tCounter++;
                            sCounter++;
                            break;
                    }
                    break;
                case 6:
                    switch (registerItem) {
                        case "6-A":
                            eCounter += 3;
                            cCounter ++;
                            break;
                        case "6-B":
                            cCounter++;
                            pCounter++;
                            mCounter--;
                            break;
                        case "6-C":
                            cCounter++;
                            tCounter++;
                            xCounter++;
                            break;
                        case "6-D":
                            cCounter++;
                            pCounter++;
                            sCounter++;
                            if (eCounter>=4) iCounter++;
                            break;
                    }
                    break;
                case 7:
                    switch (registerItem) {
                        case "7-A":
                            mCounter++;
                            eCounter++;
                            cCounter++;
                            break;
                        case "7-B":
                            cCounter++;
                            pCounter++;
                            break;
                        case "7-C":
                            tCounter++;
                            sCounter++;
                            break;
                        case "7-D":
                            xCounter+=2;
                            break;
                    }
                    break;
                case 8:
                    switch (registerItem) {
                        case "8-A":
                            eCounter++;
                            break;
                        case "8-B":
                            cCounter++;
                            pCounter++;
                            mCounter++;
                            sCounter++;
                            break;
                        case "8-C":
                            cCounter++;
                            xCounter++;
                            break;
                        case "8-D":
                            xCounter++;
                            tCounter+=3;
                            break;
                    }
                    break;
                case 9:
                    switch (registerItem) {
                        case "9-A":
                            tCounter+=2;
                            sCounter+=2;
                            break;
                        case "9-B":
                            cCounter++;
                            pCounter++;
                            break;
                        case "9-C":
                            eCounter++;
                            cCounter++;
                            break;
                        case "9-D":
                            pCounter++;
                            mCounter++;
                            xCounter++;
                            break;
                    }
                    break;
                //Case 10 is skipped as well
                
            }
        }
    }
    console.log("Plus: "+pCounter);
    console.log("Minus: "+mCounter);
    console.log("Multiple: "+xCounter);
    console.log("Star: "+sCounter);
    console.log("Carat: "+cCounter);
    console.log("Mark: "+eCounter);
    console.log("Percent: "+tCounter);
    console.log("Constant: "+iCounter);
    
}

function questionSubmit() {
    if (document.querySelector(".answer-custom-"+quizTakeOn).value!==null) {
        customAnswerArray[quizTakeOn-1] = document.querySelector(".answer-custom-"+quizTakeOn).value;
    }
    qClassArray[quizTakeOn-1].style.display = "none";
    qButtonArray[quizTakeOn-1].removeEventListener("click",questionSubmit);
    if (quizTakeOn < 10){
        qClassArray[quizTakeOn].style.display = "grid";
        qButtonArray[quizTakeOn].addEventListener("click",questionSubmit);
        quizTakeOn++;
    } else {
        compileAnswers();
        results.style.display = "grid";
    }
}

function startQuiz() {
    startQuestion.style.display = "none";
    qClassArray[quizTakeOn].style.display = "grid";
    buttonSubmitStart.removeEventListener("click",startQuiz);

    qButtonArray[quizTakeOn].addEventListener("click",questionSubmit);
    quizTakeOn++;
}

buttonSubmitStart.addEventListener("click",startQuiz);

/*
    Math Symbols (Personalities):

[P]    +  -> (Simple, would rather build things)
[M]    -  -> (Simple, would rather modify things)
[X]    X  -> (Technologically advanced, but prefers old time style functions)
[S]    *  -> (Technologically advanced and wants AI everywhere for comfort)
[C]    ^  -> (Peaceful but can catalyze things for better or worse)
[E]    !  -> (Small but loud, a party person)
[T]    %  -> (Would rather read books and might not like parties)
[I]    i, pi, or e -> (Consistently inconsistent. The larger the number, the more of a main character they claim to be)

*/