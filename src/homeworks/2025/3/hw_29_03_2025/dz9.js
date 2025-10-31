/*10. reduce (продвинутое): Дан массив студентов:
Напиши функцию getBestStudent(students), которая возвращает имя студента с самым высоким grade.*/


const studentsArr = [
    {name: "Alex", grade: 85},
    {name: "Sam", grade: 90},
    {name: "Charlie", grade: 78}
]

function getBestStudent(students) {
    return students.reduce((best, student) => student.grade > best.grade ? student : best
    ).name;
}

const getBestStud = (students) => students.reduce((best, student) => student.grade > best.grade ? student : best
).name

console.log(getBestStud(studentsArr));