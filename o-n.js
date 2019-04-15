function containsValue(array, value) {
  for (let it = 0; it < array.length; it += 1) {
    if (array[it] === value) {
      return true;
    }
  }
  return false;
}
