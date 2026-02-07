function tenMostFrequentWords(paragraphe){ //for the second examplewe add an extra parametre wich is limite
    const pattern = /\w+/ig;
    const paraghraphsWords = paragraphe.match(pattern);
    
    const wordsCount =  paraghraphsWords.reduce((acc,word) => {
        acc[word] = (acc[word] || 0) + 1; 
        return acc;
    },{});

    const result = Object.entries(wordsCount).map(([word,count]) => ({
        word: word,
        count: count
    }));

    return result
            .sort((a,b) => b.count - a.count)
            .slice(0,10); // the only change is slice(0,limite);
}
const paragraphe = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.';
console.log(tenMostFrequentWords(paragraphe));

