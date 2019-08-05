const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
 
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  for (let index = 0; index < companies.length; index++) {
    console.log(companies[index]);
  }

  //Filter array
  let retailCompanies = companies.filter((company) => company.category == "Retail");
 retailCompanies.forEach(element => {
     console.log("Retail Company: " + element.name);
 });

 var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const companyNames = companies.map(company => `${company.name} ${company.end-company.start} years` );
console.table(companyNames);

const agesMap = ages.map(age => Math.sqrt(age));
console.log(agesMap);

// sorting array
ageSort = ages.sort(function(a,b){
    return b-a;
})
console.log(ageSort);

//sorting companies according to year
const sortedCompanies = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return -1; //starte mit der groessten zahl
    } else {
        return 1;
    }
});
console.table(sortedCompanies);

//short version
const otherSortedCompanies = companies.sort((c1,c2) => c1.start > c2.start ? 1 : -1);
console.log(otherSortedCompanies);

//sum ages
let ageSum = 0;

const totalYears = companies.reduce((total,company) => total + (company.end - company.start));
console.log(totalYears);