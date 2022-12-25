const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Татьяна",
            "id_2": "Елена",
            "id_3": "Наталья",
            "id_4": "Светлана",
            "id_5": "Регина",
            "id_6": "Ольга",
            "id_7": "Юлия",
            "id_8": "Екатерина",
            "id_9": "Виктория",
            "id_10": "Галина"
        }
    }`,

    monthOfBirthdayJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    professionName: `{
        "count": 20,
        "list": {     
            "id_1": "медсестра ",
            "id_2": "учительница",
            "id_3": "швея ",
            "id_4": "няня ",
            "id_5": "доярка ",
            "id_6": "врач терапевт",
            "id_7": "бухгалтер",
            "id_8": "менеджер",
            "id_9": "делопроизводитель",
            "id_10": "программист",
            "id_11": "тренер",
            "id_12": "хирург",
            "id_13": "повар",
            "id_14": "шахтер ",
            "id_15": "грузчик",
            "id_16": "сантехник",
            "id_17": "электрик",
            "id_18": "слесарь",
            "id_19": "автомеханик",
            "id_20": "сварщик"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
   
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },


    randomGender: function() { // Определение пола

     return  this.randomIntNumber(2, 0)==1?"Мужчина":"Женщина";
      
    },
 
     randomSurname: function() { // Выбор фамилии
      
         if (this.person.gender=="Мужчина"){

            surname=this.randomValue(this.surnameJson);}
        else {
            surname=this.randomValue(this.surnameJson)+"а";}
       
        return surname;

    },
 
    randomFirstName: function() {// Выбор имени

        if (this.person.gender=="Мужчина"){

            firstname=this.randomValue(this.firstNameMaleJson);}
        else {
            firstname=this.randomValue(this.firstNameFeMaleJson);}
       
        return firstname;

 
    },


    randomPatroName: function() { //  Выбор и создание отчества

       nameMale=this.randomValue(this.firstNameMaleJson);
       let okonchanie=nameMale[(nameMale.length)-1];
  //     console.log (okonchanie);
       const tverdSoglasnie1="б в г д з к л м н п р с т ф х";
       const tverdSoglasnie2="ж ш ч щ ц";
        
         if (tverdSoglasnie1.includes(okonchanie)&&this.person.gender=="Мужчина"){

               patroName=nameMale+"ович";
//             console.log (nameMale);
 //            console.log (patroName);
               return patroName;
        }

         else if (tverdSoglasnie1.includes(okonchanie)&&this.person.gender=="Женщина"){
               patroName=nameMale+"овна";
//             console.log (nameMale);
//             console.log (patroName);
               return patroName;
        }


        else  if(tverdSoglasnie2.includes(okonchanie)&&this.person.gender=="Мужчина"){
               patroName=nameMale+"eвич";
//             console.log (nameMale);
//             console.log (patroName);
               return patroName;
         }
          
        else if (tverdSoglasnie2.includes(okonchanie)&&this.person.gender=="Женщина"){
               patroName=nameMale+"евна";
//             console.log (nameMale);
//             console.log (patroName);
               return patroName;
         }
          
         else  if(okonchanie=="й"&&this.person.gender=="Мужчина"){
            patroName=nameMale.substring(0,(nameMale.length)-1)+"евич";
//            console.log (nameMale);
 //           console.log (patroName);
            return patroName;

         }
         else  if(okonchanie=="й"&&this.person.gender=="Женщина"){
            patroName=nameMale.substring(0,(nameMale.length)-1)+"евна";
  //          console.log (nameMale);
  //          console.log (patroName);
            return patroName;

         }
         else  if(nameMale=="Никита"&&this.person.gender=="Мужчина"){
            patroName="Никитич";
            return patroName;

         }
         else  if(nameMale=="Никита"&&this.person.gender=="Женщина"){
            patroName="Никитична";
            return patroName;
         }
       

},


    randomYearOfBirthday: function() { // выбор года рождения

        const number = this.randomIntNumber(2000, 1930);
        return number;
       
    },

    randommonthOfBirthdayJson: function() { // Выбор месяца рождения

        return this.randomValue(this.monthOfBirthdayJson);

    },

    randomdayOfBirthday: function() { // Выбор дня рождения, в зависимости от месяца
        let maxDay;
        let month=this.person.monthOfBirthday;
        if (month=='апреля'||month=='мая'||month=='сентября'||month=='ноября'){
            maxDay=30;
            }
        else if (month=='февраля'){
            maxDay=((this.person.yearOfBirthday%4)==0)?29:28;
        }
        else {
            maxDay=31;
        }
     
      //  console.log (this.person.monthOfBirthday);
      //  console.log(maxDay);      
         let number = this.randomIntNumber(maxDay, 1);
         return number;

    },


    randomProfession: function() { // Выбор профессии
        const obj = JSON.parse(this.professionName);
        let prop;
        if (this.person.gender=="Женщина") {
            prop = `id_${this.randomIntNumber(13, 1)}`; 
        //    console.log(this.person.gender);
        //    console.log(prop);
            return obj.list[prop];
         }
         else {
            prop = `id_${this.randomIntNumber(20, 6)}`; 
        //    console.log(this.person.gender);
        //    console.log(prop);
            return obj.list[prop];
         }
  
    },

    

    getPerson: function () {// Создание сгенерированных данных
        this.person = {};
        this.person.gender=this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.patroName = this.randomPatroName();
        this.person.yearOfBirthday=this.randomYearOfBirthday();
        this.person.monthOfBirthday=this.randommonthOfBirthdayJson();
        this.person.dayOfBirthday=this.randomdayOfBirthday();
        this.person.professionName=this.randomProfession();
        return this.person;
    }
};

document.querySelector('#generateBut').addEventListener('click', ()=>// Активация кнопки генерации данных
{
   
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('patroNameOutput').innerText = initPerson.patroName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText =initPerson.yearOfBirthday ;
    document.getElementById('dayOfBirthdayOutput').innerText =initPerson.dayOfBirthday;
    document.getElementById('monthOfBirthdayOutput').innerText =initPerson.monthOfBirthday;
    document.getElementById('professionOutput').innerText =initPerson.professionName;

})

    window.onload = function(){
    document.getElementById('firstNameOutput').innerText = " ";
    document.getElementById('surnameOutput').innerText = " ";
    document.getElementById('patroNameOutput').innerText = " ";
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('birthYearOutput').innerText =" ";
    document.getElementById('dayOfBirthdayOutput').innerText =" ";
    document.getElementById('monthOfBirthdayOutput').innerText =" ";
    document.getElementById('professionOutput').innerText ="Профессия";
    }
    
    document.querySelector('#defaultBut').addEventListener('click', ()=>{// Обнуление данных
    window.onload();
})