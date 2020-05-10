//supply initial elements
var studentList = ["Mark","Aly","Tanya"];
console.log(studentList[0] ); //Mark
console.log(studentList[1] ); //Aly
console.log(studentList[2] ); //Tanya

//prompt for 3 more names and store in studentList array
for (let i = 2; i < 5; i++) {
    const newName = prompt(`Enter person number ${i+1}'s name:`);
    studentList.push(newName);
}

for (let i = 3; i < 5; i++) {
    const newName = prompt(`Enter person number ${i+1}'s name:`);
    studentList.push(newName);
}

for (let i = 4; i < 5; i++) {
    const newName = prompt(`Enter person number ${i+1}'s name:`);
    studentList.push(newName);
}
//console log all elements of the array
for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i]);
}
