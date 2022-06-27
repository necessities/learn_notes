// --- Inheritance

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    signUp() {
        return `Welcome ${this.name}`
    }

    logIn() {
        return `Hello ${this.name}`
    }
    
    logOut() {
        return `See you soon ${this.name}`
    }
}

// AdminUser class is inheriting all the attributes and methods from User - User is seen as Parent Class and AdminUser as child

class AdminUser extends User {
    constructor(name, email) {
        super(name, email)
        this.title = "KeyMaster"
    }
    deleteUser(user) {
        users = users.filter(entry => entry.email !== user.email) 
    }
    
}

// could technically comment out the constructor and super and still run this


var user1 = new User("Alex", "alex@example.com")
var user2 = new User("Alvin", "alvin@example.com")
var admin = new AdminUser("leo", "leo@example.com")

var users = [user1, user2, admin]
console.log(users)

admin.deleteUser(user2)
console.log(users)
