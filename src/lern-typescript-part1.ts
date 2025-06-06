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