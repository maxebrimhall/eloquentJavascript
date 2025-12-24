// This class takes a bit of information and creates a person object
class person {
    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = email
    }
    greet(){
        return `Hello`
    }
    birthday(date){
        console.log(`Your Birthday is ${date}`)
    }
    getInfo(email){
        console.log(`Your email is ${email}`)
    }
}
