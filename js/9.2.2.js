const jsonString = `
{
  "list": [
    {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
    },
    {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
    }
  ]
}
`;

const data = JSON.parse(jsonString);

const list1 = data.list[0];
const list2 = data.list[1];

// console.log(list1)
// console.log(list2)

const result = {
  list: [
    { name: list1.name, age: list1.age, prof: list1.prof },
    { name: list2.name, age: list2.age, prof: list2.prof }
  ]
}

console.log(result);
