var wordList = require('word-list-json');

function getPermutations(n,r){
    let t=n,acc=[],result=[];
    (function createCombination(arr){
            for(var i=0;i<arr.length;i++){
            if(acc.length<r && acc.indexOf(arr[i])==-1){    
            acc.push(arr[i]); 
            let newArr = [...arr];
            newArr.splice(i,0);
            createCombination(newArr);
            if(acc.length==r)
            result.push([...acc]);
            acc.pop();
            } 
            }  
    })([...t]);
    return result;
}
var WORD="inn",COUNT=3;
console.log(getPermutations(new Array(WORD.length).fill(0).map((e,i)=>i),COUNT).map(el=>el.reduce((a,w)=>a+=WORD[w],"")).filter(el=>wordList.some(word=> el==word)));

// console.log(getPermutations(WORD.split(""),COUNT).filter(el=>wordList.some(word=> el==word)))