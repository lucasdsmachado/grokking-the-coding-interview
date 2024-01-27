const merge = function (firstList, secondList) {
  let merged = [],
    i = 0,
    j = 0;
  
  while (i < firstList.length && j < secondList.length) {
    if ((firstList[i][1] >= secondList[j][0] && firstList[i][0] <= secondList[j][1])) {
      merged.push([
        Math.max(firstList[i][0], secondList[j][0]),
        Math.min(firstList[i][1], secondList[j][1])
      ])
    }
    
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  
  return merged;
}

console.log(merge([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]]));
console.log(merge([[1, 3], [5, 7], [9, 12]], [[5, 10]])); 