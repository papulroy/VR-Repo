// Typescript - Typescript is Javascript with Types. It adds safety by catching errors during development instead of runtime.
// Why Typescript ? - TS provides better auto-complete, fewer bugs and clearer code. This makes automation framework easier to build, read and maintain. 
// Types (Code Idea) - Types Define what kind of value a variable can store. This prevents invalid data and reduce mistakes.

//Variables - Store Values that can be reused in the program. We can define the type of each variable.

//const nameValue:string = "Vimal Roy"
// nameValue = "Vimal Roy" // 
//console.log(nameValue)

// let url:string = "https://www.google.com/"
// url = "https://www.novoresume.com/"
// console.log(url)

// const A :number = 10
// console.log(A)

// let b:number
// b=20
// console.log(b)

//------------------------------------------


//Data types - Data types define what kind of data a variable holds.
// String/Number/Boolien

// let course: string = "Playwrite"
// let course: string = 'Playwright'
// let course: string = `Playwrite`
// console.log(course)

// let nameVal: string ='Typescript'
// let description: string = nameVal + ' is a practice file '
// console.log(description)

//let nameVal2: string = "typescript"
//let description2: string = nameVal2 + " is a typescript practice file 2 "
//console.log(description2)

// let nameVal3: string = `Typescript`
// const description3: string = `${nameVal3} is my practice file `
// console.log (description3)

//let nameVal4: string = "typescript"
//let text1: string = "is my first typescript practice file 4"
//let description4: string = `${nameVal4} ${text1}`
//console.log(description4)

// let count: number = 10
// console.log(count)

// let isVisible: boolean  = true
// console.log(isVisible)

// let num1: any =10
// num1= 'XYZ'
// // num1= true
// console.log(num1)


// __________________________________________________________
// Array - list of data

// let users1: number[] =[5,10,15,20,25,30]
// console.log (users1[1])

// let users: string[] = ["vimal","roy","vivek","vishal"]
// console.log(users[0])

// let users2: any[] = [5,"Roy",'True',10.5]
// console.log(users2[2])


// let numArray: Array<number> = [101,201,301]
// console.log(numArray[0])

// let arrayStr: Array<string> = ['Vimal','Ghati','TJ']
//     console.log (arrayStr[2])

//_____________________________________________________________-

//Object

// let UserDetails: {Username: string,
//                   Password: string,
//                   ID: number,
//                   Isvisible: boolean} = 
//                                           {Username: "VRTEST",
//                                            Password: "VR123",
//                                            ID: 199,
//                                            Isvisible: true,
//                                           }

// console.log(UserDetails.Username)


//_______________________________________________________________

//Functions - Can define types of input and return values. This ensures correct data is passed and returned.

// function sayHello(): void
// {
//     console.log("Hello function")
// }
// sayHello()

// Arrow Function - Shorter and modern syntax for adding functions ()=>

// let sayHello2 = (): void =>
// {
//     console.log("This is my Modern function")
// }
// sayHello2()

// function add(num1: number, num2: number): void
// {
//     console.log(num1+num2)
// }
// add(5,5)

// let Sub = (num1: number, num2: number): void =>
// {
// console.log(num1-num2)
// }
// Sub(10,100)


// return type - Defines what type of value the function should return.

// let addNum = (num1: number, num2: number): number =>
//     {
//         return (num1+num2)
//     }
//     let addition = addNum(100,10)
//     console.log(addition)

// let addStr = (Str1: string, Str2: string): string =>
// {
//     return(Str1+Str2)
// }
// let addition2 = addStr('Hello','World')
// console.log(addition2)



// Optional Parameter - Optional parameter allows function to accept values that may or may not be provided.It adds flexibility to the function calls.

// let greet = (name1: string, name2?: string ) :string =>
// {
//     return (name1+name2)
// }
// let Say = greet('Hello',' Vimal')
// console.log(Say)

// let greet2 = (name?: string): void =>
// {
//     console.log(`HI ${name}`)
// }
// greet2('Vimal')


//------------------------------------------------
//Arithmetic Operations - Used for mathematic calculations such as addition, sub, multiply and divide.

// let AO  = (num1: number, num2: number): void =>
// {
// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)
// }
// AO(10,5)

//------------------------------------------------
// Comparison Operators - Used to compare values and always return true or false. Commonly used inside conditions and validations.

// let a: number = 20
// let b: number = 10
// console.log(a==b)
// console.log(a!==b)
// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)

// let c:string = "Roy"
// let d:string = "Roy"
// console.log(c==d)
// console.log(c!=d)


// ---------------------------------------------------

// Logical operator - Used to combine multiple conditions. Helps create more complex decision-making logic.

// let age: number = 20
// let isloggedin: boolean = true

// console.log(age>18 && isloggedin)
// console.log(age>18 || isloggedin)
// console.log (!(age>18))

//--------------------------------------------------------------------

//Conditions(if/else) - Conditions allow the program to make decisions based on true or false result

//     let age: number = 18
// if (age>=18)
// {
//     console.log("adult")
// }
// else
// {
//     console.log("minor")
// }

// let a: number = 20
// let b: number = 50
// if (a==b)
// {
//     console.log("a is equal to b")
// }
// else if(a>b)
// {
//     console.log("a is greater than b")
// }
// else if (a<b)
// {
//     console.log("a is less than b")
// }
// else
// {
//     console.log("invalid input")
// }

//______________________________________________________
//Loops - Loops repeat the same steps multiple times. Useful when handling multiple elements or testdata

// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }

// for(let i=1;i<=10;i++)
// {
 
//     console.log("Vimal Roy");
// }

// let users: string[] = ["Vivek","Shubhra","Trump"]
// for(let a of users)
// {
//     console.log(a)
// }

// ____________________________________________________
// Async and Await - Handles task that take time to complete.

// async function loaddata(): Promise<void>
// {
//     await fetch("https://google.com")
// }

// ___________________________________________________________

// Interface - Define the structure of the objects. They make test data clean, reusable and easy to maintain.
// Use interface for objects

// interface User {Username: string, 
//                        Password: any, 
//                        ID: number, 
//                        Age: number, 
// }
// let UserDetails : User =  {Username: "VRTEST", 
//                        Password: "VR123",
//                        ID: 123, 
//                        Age: 25, 
// }
// console.log(UserDetails. Username)
// console.log (UserDetails.Password)
// console.log(UserDetails.Age)
// console.log(UserDetails.ID)



// __________________________________________________________________
// Type- Alternate to interface - Another way to define the data structure.Ofter used for custom types or limited value sets.
// Use type for custom or restricted values

// type User2 = {Username: string,
//               Password: any,
//               ID: number
//               isVisible: boolean
// }

// let UserDetails2 : User2 = {
//                         Username: "VRTEST",
//                         Password: 123,
//                         ID: 123,
//                         isVisible: true,
// }

// console.log(UserDetails2.Username)
// console.log(UserDetails2.Password)
// console.log(UserDetails2.ID)
// console.log(UserDetails2.isVisible)


// type status = "active" | "inactive" | "pending"

// let testStatus: status = "pending"
// console.log(testStatus)

// _______________________________________________________________

// Classes- Classes group data and functions together. They help organize code and structure automation framework. 
// Methods - Are functions defined inside classes.They perform specific actions related to the class. Methods are executed using the dot operator (.)
// Objects - Are created from classes. They allow access to the class properties and methods.
// Constructors - Runs automatically when an object is created. It initializes values and prepares the class for use.Constructor parameters can also have types.
// class LoginPage{
//     // a:number = 10
//     nameValue: string
//     Company: string
//     constructor(nameValue: string)
//     {
//     console.log ("Inside login page constructor") 
//     this.nameValue = nameValue
//     this.Company = "Youtube"
//     }
     
//     login(): void
//  {
    
//     console.log("Login functionality")
//  }
// }
// let loginPageObj = new LoginPage("Vimal ROy")
//     loginPageObj.login()   
//     console.log(loginPageObj.nameValue)
//     console.log(loginPageObj.Company) 


// class LoginPage{

//     name: string
//     id: number 

//     constructor(name: string){
//         this.name = name
//         this.id = 100
//     }
  
//   print(): void
// {
   
//     console.log(" This is my 1st class")
// }
// }


//     let loginObj = new LoginPage("Rishabh")
//     loginObj.print()
//     console.log(loginObj)
    

// class loginpage1{

//     age: number
//     isOld: boolean

//     constructor(age: number, isOld: boolean){
//         this.age = age
//         this.isOld = isOld
//     }

// }

// let login = new loginpage1(80, true)
// console.log(login.age)
// console.log(login.isOld)

// ____________________________________________________________
// Import Export

// export class SuperPage{
//     a: number = 20
//     login(): void{
// console.log("Login page entered")
//     }
// }

// _________________________________________

// Typescript VS JavaScript

// Typescript is not a new language. It is simply javascript with additional type safety.
// Removing types makes it normal Javascript