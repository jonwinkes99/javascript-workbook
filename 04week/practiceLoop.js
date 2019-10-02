var users = [];

var u1 = {
    name:"John",
    grades: [80,40,75]
};

var u2 = {
    name:"Mark",
    grades: [50,63,71]
};

var u3 = {
    name:"Maggie",
    grades: [90,95,100]
};

users.push(u1);
users.push(u2);
users.push(u3);




function averageGrade(users){
    for(var index = [0]; index < users.length; index++){
        var users = users[index];
        console.log(users.name);
        console.log(users.grades);
        var sumGrades = 0;
        for(var gIndex = [0]; gIndex < user.grades.length; gIndex++){
            sumGrades+= user.grades[gIndex];
        }

        var avgGrade = 0; 
        if(user.grades.length > 0){
            avgGrade = sumGrades / user.grades.length;
        }
        console.log(`avg = ${avgGrade}`);
    }
}

averageGrade(users);