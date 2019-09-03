var wordList = require('word-list-json');
function getPermutations(n, r) {
    let t = n, acc = [], result = [];
    (function createCombination(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (acc.length < r && acc.indexOf(arr[i]) == -1) {
                acc.push(arr[i]);
                let newArr = [...arr];
                newArr.splice(i, 0);
                createCombination(newArr);
                if (acc.length == r)
                    result.push([...acc]);
                acc.pop();
            }
        }
    })([...t]);
    return result;
}
var WORD = process.argv[2] || "bowl";
var COUNT = Number(process.argv[3]) || WORD.length;
if(COUNT>WORD.length){
    console.log("Length should be less than word length !");   
} else {
let list = getPermutations(new Array(WORD.length).fill(0).map((e, i) => i), COUNT).map(el => el.reduce((a, w) => a += WORD[w], "")).filter(el => wordList.some(word => el == word));
let set = new Set();
list.forEach(e=>set.add(e));
console.log(set);
}