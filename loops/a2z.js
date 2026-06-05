// print A-Z

const characters = ["A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z"
];
function printA2Z(characters) {
    for (let i = 0; i < characters.length; i++) {
        console.log(characters[i]);
    }
}

printA2Z(characters);