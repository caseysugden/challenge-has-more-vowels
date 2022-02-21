function hasMoreVowels(word) {
    let vowelCounter = 0;
    for (let i = 0; i < word.length; i++) {
        if (checkIfVowel(word[i])) {
            vowelCounter++;
        };
    };
    if (vowelCounter > word.length / 2) {
        return true;
    } else {
        return false;
    }
};

function checkIfVowel(char) {
    switch(char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    };
};

console.log(hasMoreVowels("moose"));
