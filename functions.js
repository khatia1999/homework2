/*დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) და დააბრუნებს შესაბამისს ტექსტს 
თუ ტიცხვები ტოლია : a  და b ტოლია
თუ a მეტია b ze : a  მეტია b -ზე
თუ a ნაკლებია  b ze : a  ნაკლებია  b -ზე
 */

const isNumbersEqual = (a,b) => `${a}  ${a == b ? 'და' : a > b ? 'მეტია' : 'ნაკლებია'} ${b}-ზე`;

console.log(isNumbersEqual(2,3));


/**
 * დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), 
 * დააბრუნეთ true თუ მათი ჯამი მეტია 100 ზე , false , თუ არ არის მეტი 100 ზე
 */

const sum = (num1,num2) => `${num1 + num2 > 100 ? 'true': 'false'}`;
console.log(sum(2,2));


/**
 * დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას აღებულ ქულას ( ქულების ჯამს). 
 * ფუნქციას აქვს სამი პარამეტრი
პირველი პარამეტრი - 1 ქულიანების რაოდენობა
მეორე პარამეტრი -  2 ქულიანების რაოდენობა
მესამე - 3 ქულიანების რაოდენობა 
*/

 const  gameScore  = (point1,point2,point3) =>{

     const totalResult = 1 * point1 + 2 * point2 + 3 * point3
     return totalResult;

 }
     console.log(gameScore(2,3,4));
 

/**
 * დაწერეთ ფუნქცია ორი პარამეტრით start და end , ფუნქციას გადაეცემა ორი რიცხვი, 
 * უნდა შექმნათ  start დან end-ჩათვლით  რიცხვების მასივი(მაგალითად თუ start 
 * არის 3 და end არის 6 მასივის ელემენტები უნდა იყოს [3,4,5,6] ) ( arr.push()- მასივში ელემენტის დამატება)
 */

const  arrayExercise = (start,end) => {
   
    const arrayOfNumbers = [];

    for(let i = start; i <= end; i++) {
        arrayOfNumbers.push(i);  
    }

 console.log(arrayOfNumbers);

}

arrayExercise(3,12);


/**
 * ობიექტ person - ს აქვს შემდეგი properties: firstname, lastname, age, 
 * დაწერეთ ფუნქცია რომელიც პერსონის ასაკის მიხედვით დაბეჭდავს 
თუ 18  წელზე პატარაა - “პერსონის სახელი” არასრულწლოვანია
თუ 18 და მეტია “პერსონის სახელი” - სრულწლოვანია 

 */

const person = {
    firstname : 'khatia',
    lastname: 'ormotsadze',
    age : 24
}

const isAdult = (person) => `${person.age < 18 ? `${person.firstname} არასრულწლოვანია` : `${person.firstname} სწულწლოვანია`}`;

console.log(isAdult(person));


/**
 * გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ. 
 * Დაბეჭდეთ ელემენტები სათითაოდ ( გამოიყენეთ for ციკლი)
 */

const phones = ['Iphone', 'Samsung', 'Pixel', 'Huawei', 'Xiaomi'];

for(const i of phones) {
 
    console.log(i);

}



/**Გამოაცხადეთ ცვლადი num სასურველი მნიშვნელობით ( მაგ. 23), 
 * დაბეჭდეთ რიცხვები 1 დან num ის ჩათვლით ( გამოიყენეთ while ციკლი). */


let num = 23;

while (num >= 1) {
    console.log(num);
    num--;
}

//მეორე ვარიანტი
let num2 = 23;
let i = 1;
while(i <= num2){
    console.log(i);
    i++;
}

/**Გამოიყენეთ სასურველი ციკლი და დაბეჭდეთ ლუწი რიცხვები 2-დან 13 - ის ჩათვლით , 
 * გამოიყენეთ სასურველი ციკლი ( for, while) */

for(let i = 2; i <= 13; i++){

    if(i % 2 == 0){
        console.log(i);
    } 

    //მეორე ვარიანტი
    // (i % 2 == 0) ? console.log(i) : '';  
}