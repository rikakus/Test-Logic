const patternCount = (param, pattern) => {
  if (param.length > 100 || param.length < 0) {
    return console.error("input text cannot be less than 0 and more than 100");
  } else if (pattern.length > 100 || pattern.length < 0) {
    return console.error(
      "input pattern cannot be less than 0 and more than 100"
    );
  } else {
    let result = 0;
    const array = param.split("");
    for (let i = 0; i < param.length; i++) {
      const data = array.slice(0, pattern.length).join("");
      if (data === pattern) {
        result += 1;
      }
      array.shift();
    }
    console.log(result);
  }
};

patternCount("aaaaaa", "aa");
