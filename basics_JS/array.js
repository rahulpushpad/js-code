const girlsGroup=['puja', 'ayushi', 'kanak', 'meena', 'seema'];
const boysGroup=['jay','aksh','bunty','manoj','ravi'];

girlsGroup.push('rima','naina','kajal');

boysGroup.push('tushar','abhishek','vinod');

// console.table(girlsGroup);
// console.table(boysGroup);

//merge arrays

const studentsGroup=girlsGroup.concat(boysGroup);

// console.table(studentsGroup);

// console.table(studentsGroup.join());

console.table(studentsGroup.sort());
