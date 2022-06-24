const student = {
    name: 'John',
      age: '21',
    };
// For loop
    for (let i=0; i < student.length; i++) {
        console.log(student)
     }

// For in loop

for (const key in student) {

    console.log(key, student[key]);
}

// For each loop

Object.keys(student).forEach(key => {

    console.log(key, student[key]);

})

//for of loop

const students = ['John', 'Sara', 'Jack'];

for (const key of students) {
    
    console.log(key);

}