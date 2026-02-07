const txt = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?';

const cleanPattern = /[%$@&#;]/g;
const cleantxt = txt.replace(cleanPattern , '');
console.log(cleantxt);

function mostFrequentWords(cleantxt) {
    const pattern = /\w+/ig;
    const wordsArray = cleantxt.match(pattern);
    const wordsCount = wordsArray.reduce((acc,word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    },{});
    
    const result = Object.entries(wordsCount).map(([word,count]) => ({
        word: word,
        count: count
    }));

    return result
        .sort((a,b) => b.count - a.count)
        .slice(0,3);
}

console.log(mostFrequentWords(cleantxt));