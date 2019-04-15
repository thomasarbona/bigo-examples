function containDuplicates(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}
