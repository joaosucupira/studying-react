

let user;
let age;
let year;


document.getElementById("mySubmit").onclick = function(){
    user = document.getElementById("myText").value;
    age = document.getElementById("myAge").value;
    year = document.getElementById("myYear").value;
    var n_age = Number(year) - Number(age);
    // document.write("Your user is " + user);
    document.getElementById("myH1").textContent = `Hello ${user} you were born in ${n_age}.`;
    return false;
}
