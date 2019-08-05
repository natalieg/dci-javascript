//localStorage.setItem('myCat', 'Tom');
let catName = localStorage.getItem('myCat');

document.getElementById('cat').innerHTML = `my Cat Name is: ${catName}`;

let person = {
    Name: "John",
    Age: 35,
    Job: "Web Developer",
    City: "Hamburg"
};

let strPerson = JSON.stringify(person);
strPerson = strPerson.substring(1, strPerson.length -1)
//strPerson = strPerson.replace('"', '')
strPerson = strPerson.replace(/\"/g, '')
strPerson = strPerson.replace(/\:/g, ': ')
strPerson = strPerson.replace(/\,/g, '<br>')

localStorage.setItem('personInfo', strPerson);
document.getElementById('person').innerHTML = `<hr>Person: ${strPerson} <hr>`;

document.getElementById('person2').innerHTML = `<b>Person<b> Info <br>`
for(let i in person){
    document.getElementById('person2').innerHTML += `${i}: ${person[i]} <br>`;
}



console.log(localStorage);