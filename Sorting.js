const array = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

const sorting = (param) => {
  const number = [];
  const char = [];

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === "number") {
      number.push(param[i]);
    } else {
      char.push(param[i]);
    }
  }

  const result = char.sort().concat(
    number.sort((a, b) => {
      return a - b;
    })
  );
  console.log(result);
};

sorting(array);
