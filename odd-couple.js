// YOUR CODE BELOW
const oddCouple = (aArray) => {
    let oddNumberArray = [];
    oddNumberArray = aArray.filter(num => num %2 != 0);
    if(oddNumberArray.length === 0) return [];
    return oddNumberArray.slice(0,2);
}
cons juyd