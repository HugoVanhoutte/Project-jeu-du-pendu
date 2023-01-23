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




//New game => prend un mot au hasard, le met dans une variable
start.addEventListener("click", () => {
    start.style.backgroundColor = "red";
    let score = 10;
    let word = wordsList[Math.floor(Math.random() * wordsList.length)];
    console.log(word)

    let wordDisplay = document.createElement("h1");
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
    button.addEventListener("click",() => {
        console.log("score " + score);
        let userLetter = userInput.value.toLowerCase();
        if (!word.includes(userLetter)) {
            score--;
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
                console.log("gagned");
            }
        }
        userInput.value="";
    })
})


