const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
// const studentNode = listNode.querySelector("student");
// const 
const student1Node = listNode.children[0];
const student2Node = listNode.children[1];
// console.log(student1Node);
// console.log(student2Node);

const personNode1 = student1Node.children[0];
const firstNode1 = student1Node.querySelector("first");
const secondNode1 = student1Node.querySelector("second");

const ageNode1 = student1Node.querySelector("age");
const profNode1 = student1Node.querySelector("prof");

const langAttr1 = personNode1.getAttribute('lang');

// -----
const personNode2 = student2Node.children[0];
const firstNode2 = student2Node.querySelector("first");
const secondNode2 = student2Node.querySelector("second");

const ageNode2 = student2Node.querySelector("age");
const profNode2 = student2Node.querySelector("prof");

const langAttr2 = personNode2.getAttribute('lang');

// -----
// const pers1 = {
//   name: firstNode1.textContent + " " + secondNode1.textContent,
//   age: ageNode1.textContent,
//   prof: profNode1.textContent,
//   lang: langAttr1
// }
// const pers2 = {
//   name: firstNode2.textContent + " " + secondNode2.textContent,
//   age: ageNode2.textContent,
//   prof: profNode2.textContent,
//   lang: langAttr2
// }

const result = {
  list: [{
    name: firstNode1.textContent + " " + secondNode1.textContent,
    age: ageNode1.textContent,
    prof: profNode1.textContent,
    lang: langAttr1
  },
  {
    name: firstNode2.textContent + " " + secondNode2.textContent,
    age: ageNode2.textContent,
    prof: profNode2.textContent,
    lang: langAttr2
  }]
}

console.log(result)