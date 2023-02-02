function sendMail(){
    event.preventDefault();
    var params = {
        name : document.getElementById("name").value, 
        phone : document.getElementById("phone").value ,
        email : document.getElementById("email").value, 
        message : document.getElementById("message").value, 
    }
    emailjs.send("service_xnukp8n", "template_mv0tglo", params).then(function (res){
        alert("Your form was sent successfully! " + res.status);
        document.getElementById("name").value='';
        document.getElementById("phone").value='';
        document.getElementById("email").value='';
        document.getElementById("message").value='';
    })
    
    .catch((err) => console.log(err));
}

