const countingWord = (string) => {
  const array = string.split(" ").join("").split("");
  let count = {};
  for (let i = 0; i < array.length; i++) {
    if (count[array[i]]) {
      count[array[i]] += 1;
    } else {
      count[array[i]] = 1;
    }
  }
  const sortArray = Object.keys(count)
    .sort((a, b) => a.localeCompare(b))
    .reduce((acc, key) => {
      acc[key] = count[key];
      return acc;
    }, {});

  console.log(sortArray);
};

countingWord("Hello World");
