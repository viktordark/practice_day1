var ifElse = new Vue ({
    el: '#ifElse',
    data: {

        users: [
            {
                login: 'toma',
                password: '123'
            },
            {
                login: 'petya',
                password: '777'
            },
            {
                login: 'olya',
                password: '456'
            },
        ],
        numberFlat:'',
        LoginIfElse2:'',
        PasswordIfElse2:'',
        AgeIfElse3:'',
        ExperienceIfElse4:''
    },
    methods: {
        //IFELSE Ex 1
        entranceFlat: function() {
            if (this.numberFlat.trim() == ''){
                alert('Введите номер квартиры');
                this.numberFlat = '';
            }
            else if (Number(this.numberFlat.trim()) > 90 || Number(this.numberFlat.trim()) < 1)
            {
                alert('К сожалению такой квартиры нет');
                this.numberFlat = '';
            }
            else if (Number(this.numberFlat.trim()) <= 20){
                alert('Вы проживаете в подъезде №1');
                this.numberFlat = '';
            }
            else if (Number(this.numberFlat.trim()) <= 48){
                alert('Вы проживаете в подъезде №2');
                this.numberFlat = '';
            }
            else if (Number(this.numberFlat.trim()) <= 90){
                alert('Вы проживаете в подъезде №3');
                this.numberFlat = '';
            }
        },
        //IFELSE Ex2
        authorize: function() {
            let i = 0;
            while (this.users[i]){
                if (this.LoginIfElse2.trim() == this.users[i].login && this.PasswordIfElse2.trim() == this.users[i].password)
                {
                    alert(`Авторизация прошла успешно`);
                    break;
                }
                i++;
            };
            if (!this.users[i])
            {
                alert('Ошибка входа "Неверный Логин или Пароль');
            }           
        },
        //IFELSE THIRD TASK
        CheckAge: function() 
        {
            if (2021 - this.AgeIfElse3 >= 16){
                alert(`Добро пожловать`);
            }
            else {
                alert(`Вход запрещён!!! Возрастное ограничение 16+!!!`);
            }
        },
        //IFELSE FOURTH TASK
        CheckExperience: function()
        {
            if (this.ExperienceIfElse4.trim() == ''){
                alert('Укажите рабочий стаж')
            } 
            else if (this.ExperienceIfElse4.trim() < 0){
                alert('Неверный формат! Проверьте данные');
            }   
            else if (this.ExperienceIfElse4.trim() < 3 ){
                alert('Ваша надбавка состовляет 0%');
            }
            else if (this.ExperienceIfElse4.trim() < 10){
                alert('Ваша надбавка состовляет 10%');
            }
            else if (this.ExperienceIfElse4.trim() < 20){
                alert('Ваша надбавка состовляет 20%');
            }
            else if (this.ExperienceIfElse4.trim() > 20){
                alert('Ваша надбавка состовляет 25%');
            }            
        }        
    }
});

//CYCLES
document.addEventListener('DOMContentLoaded', function(){
const cycleFirst = document.querySelector(".cycle-first");
const cycleSecond = document.querySelector(".cycle-second");
const cycleThird = document.querySelector(".cycle-third");
const cycleFourth = document.querySelector(".cycle-fourth");
const cycleFifth = document.querySelector(".cycle-fifth");

//FIRST
    function Fourhung(){
        let step = 0;
        for (step = 4; step <= 400; step++) {    
            console.log(step);
        }
    };
    cycleFirst.addEventListener('click', function(){
        Fourhung();
    });
//SECOND
    function RNDChis(){
        let second = 1;
        for (step = 0; step < 4; step++) {    
            second = second+3;
            console.log(second);
        };
    };
    cycleSecond.addEventListener('click', function(){
        RNDChis();
    });
//THIRD
    function Sixhung(){
        for (step = 654; step >= 0; step--) { 
            console.log(step);
        };
    };
    cycleThird.addEventListener('click', function(){
        Sixhung();
    });
//FOURTH
    function Years(){
        for (step = 1983; step <=2017; step++) {    
            console.log(step+' year');
        };
    };
    cycleFourth.addEventListener('click', function(){
        Years();
    });
//FIFTH
    function Twostep(){
        for (step = -4; step <=100; step+=2) {  
            console.log(step);
        };
    };
    cycleFifth.addEventListener('click', function(){
        Twostep();
    });
});
//SIXTH
var cycles = new Vue ({
    el: '#cycles',
    data: {
        multiplicationOnFive: '',
    },
    methods: {
        MultiFive: function(){
            this.multiplicationOnFive = '';
            for (let i = 1; i < 10; i++){
                this.multiplicationOnFive += `5 * ${i} = ${i*5} \n`
            }
        }
    }
});

//FUNCTION

//FIRST
let imageshadow = document.querySelectorAll('img');

Array.prototype.forEach.call(imageshadow, function(el) {
    el.style.height = '300px';
    el.style.boxShadow = '5px 5px 10px black';
});

//SECOND
let paragraf = document.querySelectorAll('p');
let paragrafNumber = 0;

Array.prototype.forEach.call(paragraf, function(el) {
    paragrafNumber += 1;
    el.innerHTML = `${paragrafNumber}. ${el.innerHTML}`;
});

