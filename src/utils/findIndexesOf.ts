const findIndexesOf = (word: string, searchElement: string): number[] => {
  const indexes: number[] = [];

  word.split('').forEach((letter, index) => {
    if (letter === searchElement) {
      indexes.push(index);
    }
  });

  return indexes;
};

export default findIndexesOf;