const user = {
    name: 'John',
    birthday: '1980-06-06',
}
function isBirthday(user){
    const today = new Date();
    const birthday = new Date(user.birthday);

    return [today.getDate() === birthday.getDate(),today.getMonth() === birthday.getMonth() ].every(Boolean)
}
console.log(isBirthday(user));