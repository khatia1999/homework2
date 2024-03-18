/*1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , 
თუ რიცხვები ტოლია დააბრუნებს 0 -ს */

const numsCompare = (m,n) =>{

    return m > n ?  m : m < n ? n : 0;

}

let result1 = numsCompare(3,1)
console.log(result1);


/*2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი*/

const numsSum = (num1,num2) =>{

    return num1 + num2;

}

let result2 = numsSum(2,1);
console.log(result2);


/*3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)*/

const myName = () => {

        console.log('khatia ormotsadze');
    
}
myName();



/*4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ 
( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ) */


const fullName = (firstname,lastname) => {

      return firstname + " " + lastname
     //return `${firstname} ${lastname}`

}
let nameResult = fullName('khatia','ormotsadze')
console.log(nameResult);


/*5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  
(n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, 
დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. 
Პ.ს. Უნდა გამოიყენოთ თქვენთვის სასურველი ციკლი) */

const numsProduct = n => {

   let Product = 1;

   for(let i = 1; i <= n; i++ ){
     
      Product *=i;

   }

 return Product;

}

console.log(numsProduct(3));

/*გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი 
properties: firstname, lastname, age, marks (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და 
მეთოდი რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) */

/*6. დაბეჭდეთ  სტუდენტის სრული სახელი ( გამოიყენეთ student ობიექტის მეთოდი) */

const student = {
    firstname: 'khatia',
    lastname: 'ormotsadze',
    age : 24,
    marks:'A',
    score : [4,7,5,3,2],
    studentFullname: function(){
        return this.firstname + " " + this.lastname;
    }
}

console.log(student.studentFullname());

/*7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს*/

const sumOfScores = scores => {
     let sum = 0;
    for ( const i of student.score){
         sum  += i;
    }
    return sum;
}

console.log(sumOfScores(student.score));

/*8. დაბეჭდეთ სტუდენტის სახელი და ასაკი*/
console.log(student.firstname + " " + student.lastname);