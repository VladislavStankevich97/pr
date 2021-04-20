// let text =
//   "{Мама {мыла|терла|чистила} {{жопу|папу}|{раму|окно}}|Папа {мыл|тер|чистил} {{жопу|маму}|{раму|окно}}}";

const funk = (value) => {
  let check = true;
  let value2 = value;
  while (check) {
    let indexes = search(value2);
    if(!indexes.length) {
      return value
    }
    for (let i = 0; i < 1; i++) {
      const item = indexes[i];
      value2 = value2.replace(
        value2.slice(item[0], item[1] + 1),
        generate(value2.slice(item[0], item[1] + 1))
      );
      break;
    }
    if (!search(value2).length) {
      check = false;
    }
  }
  return value2;
};

const search = (value) => {
  let start = [];
  let end = [];
  const map = new Map();
  value.split("").forEach((element, index) => {
    if (element === "{") {
      start.push(index);
    }
    if (element === "}") {
      end.push(index);
      const size = start.length || 1;
      map.set(start[size - 1], index);
      start.length = size - 1;
    }
  });

  const indexes = Array.from(map);
  return indexes;
};

const generate = (value) => {
  const result = value.slice(1, value.length - 1).split("|");
  return (
    "" +
    result[randomInteger(0, result.length - 1)]
      .replace("{", "")
      .replace("}", "") +
    ""
  );
};

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

 export const randomizeText = (text) => {
  const results = new Set();
  const count = text.split("").length * 2;
  for (let i = 0; i < count; i++) {
    results.add(funk(text));
  }

  return Array.from(results);
};

