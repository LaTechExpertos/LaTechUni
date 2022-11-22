function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "antonygitau04@gmail.com",
        Password : "dreamchaser",
        To : 'latech.expertos@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone No: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully!!")
    );
}
