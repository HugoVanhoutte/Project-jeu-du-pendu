wordsList = [
    "pendu",
    "balance",
    "projet",
    "mercredi",
    "autiste",
    "hyperactif",
    "mourir"
];

const userInput = document.getElementById("userInput");
const button = document.getElementById("button");
const start = document.getElementById("newGame");
const result = document.getElementById("result");

let difficulty = document.getElementById("dif");
const difDisplay = document.getElementById("difDisplay");
difficulty.addEventListener("input", () => {
    difDisplay.innerText = "Difficulty = " + difficulty.value;
})


start.addEventListener("click", () => {
    start.style.backgroundColor = "red";
    let score = difficulty.value;
    let word = wordsList[Math.floor(Math.random() * wordsList.length)];
    console.log(word)

    let wordDisplay = document.createElement("h1");
    let scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = score.toString();
    let wordArray = [];
    let wordArrayDisplay = [];
    for (const letter of word) {
        wordArray.push(letter);
        wordDisplay.innerText += "_";
    }
    for (const letter of wordDisplay.innerText) {
        wordArrayDisplay.push(letter);
    }
    document.body.append(wordDisplay);
    document.body.append(scoreDisplay);
    console.log(scoreDisplay);
    button.addEventListener("click",() => {
        console.log("score " + score);
        let userLetter = userInput.value.toLowerCase();
        if (!word.includes(userLetter)) {
            score--;
            scoreDisplay.innerText = score.toString();
            if (!(score === 0)){

            } else {
                result.innerText = "perdu, le mot était: " + word;
            }
        } else {
            let indexes = [], i;
            for(i = 0; i < wordArray.length; i++)
                if (wordArray[i] === userLetter)
                    indexes.push(i);
            for (const index of indexes) {
                wordArrayDisplay[index] = userLetter;
            }
            wordDisplay.innerText = wordArrayDisplay.join("")
            if(!wordDisplay.innerText.includes("_")){
                result.innerText = "gagné";
            }
        }
        userInput.value="";
    })
})


