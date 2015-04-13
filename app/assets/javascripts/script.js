// var main = function() {
//   $('form').submit(function() {
//     var firstName = $('#first-name').val();
//     var lastName = $('#last-name').val();
//     var email = $('#email').val();
//     var password = $('#password').val();
    
//     if(firstName === "") {
//         $('.first-name-error').html("Please enter your first name.");
//         $('.first-name-error').addClass('red');
//     } else {
//         $('.first-name-error').hide();
//     } if(lastName === "") {
//         $('.last-name-error').html("Please enter your last name.");
//         $('.last-name-error').addClass('red');
//     } else {
//         $('.last-name-error').hide();
//     } if(email === "") {
//         $('.email-error').html("Please enter your email address.");
//     } else if(email === "ahead747@gmail.com") {
//         $('.email-error').html("This email is already taken.");
//         $('.email-error').addClass('red');
//     } else {
//         $('.email-error').hide();
//     } if(password === "") {
//         $('.password-error').html("Please enter a password.");
//     } else if(password.length < 8) {
//         $('.password-error').html("Short passwords are easy to guess. Try one with at least 8 characters.");
//         $('.password-error').addClass('red');
//     } else {
//         $('.password-error').hide();
//     } 
  
//     return false;
//   });
// }

// $(document).ready(main);