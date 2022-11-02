const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
console.log(users);
let atLeast3 = users.filter((e) => e.languages.length >= 3
);
console.log(atLeast3);
let arrayEmail = users.map((e) => e.email);
console.log(arrayEmail);
let totalOfExperience = users.reduce(function(total, e) {return total + e.yearsOfExperience}, 0);
console.log(totalOfExperience);
let average = `${totalOfExperience/users.length}`;
console.log(average);
let longestEmail = users.reduce(function(a,b) {
    if (b.email.length > a.length) { a = b.email}
    console.log(`${a}`);
    return a;
    },"")
    console.log(longestEmail);

let instructorsString = users.reduce(function(a,b,currentIndex,myArray){
    let punctuation = ","
        if(currentIndex === myArray.length-1){
            punctuation = ","
        }
        return a + b.name + punctuation + ""
}, "Your instructors are: ")
console.log(instructorsString);
