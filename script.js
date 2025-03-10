document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name && email) {
        alert("Thank you for registering, " + name + "!");
    } else {
        alert("Please fill out all fields.");
    }
});

function registerEvent() {
    alert("You have registered for the event!");
}
