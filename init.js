window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById("genderOutput").innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
};

document.getElementById('btnRetry').addEventListener('click', function () {
    document.location.reload();
});

document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = "Имя"; 
    document.getElementById('surnameOutput').innerText = "Фамилия";
    document.getElementById('professionOutput').innerText = "Профессия";
    document.getElementById('birthMonthOutput').innerText = "Месяц рождения";
    document.getElementById('birthYearOutput').innerText = "Год рождения";
    document.getElementById('birthDateOutput').innerText = "День рождения";
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('fatherNameOutput').innerText = "Отчество";
 });
