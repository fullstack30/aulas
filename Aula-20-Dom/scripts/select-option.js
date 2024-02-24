export function create(list, key, label) {
  return list.map(function (item) {
    return `<option value="${item[key]}">${item[label]}</option>`;
  });
}

export function createEmpty(list, key, label) {
  return ["<option></option>", ...create(list, key, label)];
}

export default function render(list, key, label, starEmpty = false) {
  let result = [];
  if (starEmpty) {
    result = createEmpty(list, key, label);
    return result.join("");
  }

  result = create(list, key, label);

  return result.join("");
}
