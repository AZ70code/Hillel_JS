//== task 1 ================================================
function makeString(str) {
    let currentString = str;
    function addStr(newStr) {
        currentString += ' ' + newStr;
        console.log(currentString);
        return addStr;
    }
    return addStr;
}
makeString('Hello')('world') // --> 'Hello world'
makeString('Test')('super')('test') // --> 'Test super test'

//== task 2 ================================================

const person = {
    name: "Alex",
    dob: 1995,
    makeRequest() {
        alert("Request sended");
    }
}


function guard(obj) {
    let fn = obj.makeRequest;

    return function() {
       const userData = {};
       let age = (new Date().getFullYear()) - this.dob;
         userData.name =  this.name;
         userData.age =  age;
         if(age>= 18) fn();
         else alert('You are so young');

         return userData;
    };
   
}
person.makeRequest = guard(person);
console.log(person.makeRequest());

