//1.input
//2.created function
//3.return only enplyee who has t in name

const listofemployee = [
  { name: "Mart"},
  { name: "Baifern"},
];

function findT(input) {
    const result = [];
    for (let index = 0; index < input.length; index++) {

        const element = input[index];
        if (element.name.includes("t")) {
            result.push(element)
        }

    }
    return result
}

console.log(findT(listofemployee));

