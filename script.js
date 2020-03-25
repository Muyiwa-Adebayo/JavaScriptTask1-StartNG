var fullName = 'Adebayo Oluwamuyiwa David';
var courses = ['HTML', 'CSS', 'JavaScript', 'UI/UX'];

console.log(`Full Name: ${fullName}\nCourses: ${courses}`);

if(courses.length%2 === 0)
    for(var i=1; i<=200; i++){
        if(i%2 === 0)
            console.log(i);
    }
else
    for(var i=1; i<=200; i++){
        if(i%3 === 0)
            console.log(i);
    }