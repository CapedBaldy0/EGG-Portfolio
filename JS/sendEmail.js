var btn = document.getElementById('send');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('test');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var body = 'Name: ' + name + '<br/>' +
               'Email: ' + email + '<br/>' +
               'Subject: ' + subject + '<br/>' +
               'Message: ' + message + '<br/>';

    Email.send({
        Host : 'smtp.elasticemail.com',
        Username : "joneshordi@gmail.com",
        Password : "838365336A02869C6998D230E3EC825E50EF",
        To : 'gheorghe.3fr@gmail.com',
        From : 'joneshordi@gmail.com',
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
});