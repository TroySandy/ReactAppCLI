const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics'},
    {name: 'Kenn', specialty: 'Norse Myths'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Pual', specialty:'Entomology'}
];

//for each method
let instructor_names = [];
instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
})
console.log(instructor_names);

//map method
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

//same as above but less typing
const instructorNames2 = instructors.map(i=>i.name);
console.log(instructorNames2);

// const instructorInfo = instructors.map(a => a.name, a.specialty)
// console.log(instructorInfo);