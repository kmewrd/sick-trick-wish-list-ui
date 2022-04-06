const cleanData = data => {
  data.stance = capitalize(data.stance);
  data.name = capitalize(data.name);
}

const capitalize = property => {
  if (property.includes(' ')) {
    let split = property.split(' ').map(word => {
      let wordSplit = word.split('');
      let firstLetter = wordSplit[0].toUpperCase();
      wordSplit.splice(0, 1, firstLetter);
      return wordSplit.join('');
    });
    return split.join(' ');
  } else {
    let wordSplit = property.split('');
    let firstLetter = wordSplit[0].toUpperCase();
    wordSplit.splice(0, 1, firstLetter);
    return wordSplit.join('');
  }
}

export default cleanData;