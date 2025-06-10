function printcolor(color:{name:string,color:string,index:number}):string{
    return (`this is ${color.name} with ${color.index}`)
}

console.log(printcolor({name: "white", color:"#fff",index:3}))

//  optional property(?)

function type(user:{name:string,place:string,sex?:number}){
    console.log(`His name is ${user.name} and place${user.place} sex is ${user.sex}`)

}

type({name:"Arshad",place:"Kannur",})


// UNION operater


function getPostion(postion:number | String){
console.log(postion)
}
getPostion(11)
getPostion("arshad")

  

// Type Assertion 

const nickname:any = "Achu"

const upperCasedNN=(nickname as string).toUpperCase()
console.log(upperCasedNN)

const upperCasedNN1 = (<string>nickname).toLocaleLowerCase()
console.log(upperCasedNN1)

// Type alias 

type MagicNumber = number;

const tShirt : MagicNumber = 58

type Employee ={
    id:number,
    name: string,
    email: string,
    place : string,
    salary : number,
}

const achu : Employee = {
    id:343,
    name:'Arshad',
    email:'achu@gmail.com',
    place:'kannur',
    salary: 12345
}
console.log(achu)


type person = {name:string}
type address = {city : string}

type User = person & address

const user : User={
    name: "arshad",
    city:"kannur"
}
console.log(user)


type calce = (a:number,b:number)=>number

const sum:calce = (p,d) => p + d
const mult:calce=(p,d)=> p * d

console.log(sum(2,3))
console.log(mult(2,3))



// Interfaces


interface ICustmer {
    name:string
    address : string
}

const milan:ICustmer ={
    name:"milan",
    address:"germeny"
}

console.log(milan)


// Type Narrowing


function getPosition(postion:string| number){

    if(typeof postion === "string") console.log(postion.split(" "))
        else console.log(postion.toFixed())

}

getPosition(22)
getPosition("Arshad")


function checkAndPrint(value:string|string[]|null){
    if( value && typeof value === "object"){
        for(const key of value){
            console.log(key)
        }
    }else if(value === "string"){
        console.log(value.toLocaleLowerCase())
    }
}

checkAndPrint(['cat','dog','mouse'])
checkAndPrint('Arshad')

// Narrowing using "Equaily" operater

function equalChecking(a:string|number,b:string|string[]){
    if(a===b){
        a.split(' ')
        b.toLocaleUpperCase()
    }else{
        console.log(a)
        console.log(b)
    }
}

// Narrowing using "in" operater


 type Student= {study :  () => {} }
 type Elpy = {work : () => {}}

 function activity(actor:Student|Elpy){
    if("study" in actor){
        return actor.study()
    }else{
        return actor.work()
    }
 }


 // Narrowing using "instanceof" checking

  function Checking(value:string|Date){
    if( value instanceof Date){
        console.log(value.getTime())
    }else{
        console.log(value.toLocaleLowerCase( ))
    }
  }


  // Narrowing using "Type Predicates"

   /* 
   this is return a boolen value
   they have a perticular return type we using key ward is called " is "
   */

   function isNumber(value:any): value is number {
    return typeof value === 'number'
   }

   console.log(isNumber(3))

   // Narrowing using "discriminated unions"

   type cricle = {
    kind:"cricle"
    radius : number
   }

   type squre  ={
    kind:"squre"
    side : number
   }

   type shape = cricle | squre

   const s1 : shape = {kind:'cricle',radius:30};

   const s2 : shape = {kind:'squre', side:28}

   function getArea(s:shape){
    if(s.kind === 'squre'){
        return s.side * s.side
    }else{
        return Math.PI * s.radius*s.radius
    }
   }

   console.log( getArea(s1))
  console.log( getArea(s2))
   