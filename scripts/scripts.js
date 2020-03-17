function sayHello() {
    let initialGreeting = "Hello, ";
    let firstName = "Melissa ";
    let lastName = "Sawyer";
    let entireGreeting = (initialGreeting.concat(firstName, lastName));
    return entireGreeting;    
}
console.log (sayHello());
alert (sayHello());
document.getElementById("greeting").innerHTML = sayHello();
