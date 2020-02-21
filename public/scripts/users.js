$(function () {
    // Auto play modal video
    $(".video").click(function () {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  });
  
  var UserName = document.getElementById('UserName');
  var Email = document.getElementById('Email');
  var Password = document.getElementById('Password');
  var ConfirmPassword = document.getElementById('ConfirmPassword');
  var submitButton = document.getElementById('submitButton');
  var alartDiv = document.getElementById('alartDiv');
  
  var regexForUserName = /^[0-9a-zA-Z]{1,300}$/;
  var regexForEmailAddres = /^([a-z\d]{2,})@([a-z]{2,7})\.([a-z]{2,3})(\.[a-z]{2,3})?/;
  var regexForPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  var regexForConfirmPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

$(document).ready(function(){

  alartDiv.style.display = 'none';
  
  UserName.addEventListener('mouseenter', function(){
    $(this).tooltip({
      title : "Enter Your UserName e.g Ugo.. or ugo98.."
    });
  });

  Email.addEventListener('mouseenter', function(){
    $(this).tooltip({
      title : "Enter Email Address e.g ugc@gmail.com"
    });
  });

  Password.addEventListener('mouseenter', function(){
    $(this).tooltip({
      title : " Enter password : Password must be alpha-numeric , contain at least one sigle character and must not be less than eight"
    });
  });

    ConfirmPassword.addEventListener('mouseenter', function(){
      $(this).tooltip({
        title : "re-enter password : Password must be alpha-numeric , contain at least one sigle character and must not be less than eight"
      });
    });

    UserName.addEventListener('mouseleave', function(){
      $(this).tooltip('dispose');
    });

    Email.addEventListener('mouseleave', function(){
      $(this).tooltip('dispose');
    });

    Password.addEventListener('mouseleave', function(){
      $(this).tooltip('dispose');
    });

    ConfirmPassword.addEventListener('mouseleave', function(){
      $(this).tooltip('dispose');
    });

    UserName.addEventListener('keyup', function(e){
      $(this).tooltip({
        title : "Enter Your UserName e.g Ugo.. or ugo98.."
      });
      if(!regexForUserName.test(e.target.value)){
          event.target.classList.add('is-invalid');
          event.target.classList.remove('is-valid');
          UserName.style.borderColor = 'red';
      }else{
        $(this).tooltip('dispose');
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
        UserName.style.borderColor = '#36cc36';
      }
    });

    Email.addEventListener('keyup', function(e){
      $(this).tooltip({
        title : "Enter Email Address e.g ugc@gmail.com"
      });
      if(!regexForEmailAddres.test(e.target.value)){
        e.target.classList.remove('is-valid');
        e.target.classList.add('is-invalid');
        Email.style.borderColor = 'red';
      }else{
        $(this).tooltip('dispose')
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
        Email.style.borderColor = '#36cc36';
      }
    });

    Password.addEventListener('keyup', function(e){
      $(this).tooltip({
        title : "Enter password : Password must be alpha-numeric , contain at least one sigle character and must not be less than eight"
      });
      if(!regexForPassword.test(e.target.value)){
          e.target.classList.remove('is-valid');
          e.target.classList.add('is-invalid');
          Password.style.borderColor = 'red';
      }else{
        $(this).tooltip('dispose')
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
        Password.style.borderColor = '#36cc36';
      }
    });

    ConfirmPassword.addEventListener('keyup', function(e){
      $(this).tooltip({
        title : "re-enter password : Password must be alpha-numeric , contain at least one sigle character and must not be less than eight"
      });
      if(!regexForConfirmPassword.test(e.target.value)){
        e.target.classList.remove('is-valid');
        e.target.classList.add('is-invalid');
        ConfirmPassword.style.borderColor = 'red';
      }else{
        $(this).tooltip('dispose');
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
        ConfirmPassword.style.borderColor ='#36cc36';
      }
    });

      function checkIfUserIsEmpty(){
        if(UserName.value === '' || UserName.value.trim() === ''){
          $(alartDiv).html('');
          var content = document.createTextNode("UserName Text Field is empty");
          alartDiv.appendChild(content);
          alartDiv.style.display = 'block';
          UserName.classList.remove('is-valid');
          UserName.classList.add('is-invalid');
          UserName.focus();
          setTimeout(function(){
            $('#alartDiv').fadeOut();
          },7000);
          return false;
        }else{
          UserName.classList.remove('is-invalid');
          UserName.classList.remove('is-valid');
          UserName.style.borderColor = '#36cc36'
          return true;
        }
      }

      function checkIfEmailIsEmpty(){
        if(Email.value === '' || Email.value.trim() === ''){
          $(alartDiv).html('');
          var content = document.createTextNode("Email Text Field is empty");
          alartDiv.appendChild(content);
          alartDiv.style.display = 'block';
          Email.classList.remove('is-valid');
          Email.classList.add('is-invalid');
          Email.focus();
          setTimeout(function(){
            $('#alartDiv').fadeOut();
          },7000);
          return false;
        }else{
          Email.classList.remove('is-invalid');
          Email.classList.remove('is-valid');
          Email.style.borderColor = '#36cc36';
          return true;
        }
      }

      function checkIfPasswordIsEmpty(){
        if(Password.value === '' || Password.value.trim() === ''){
          $(alartDiv).html('');
          var content = document.createTextNode("Password TextField Is Empty");
          alartDiv.appendChild(content);
          alartDiv.style.display = 'block';
          Password.classList.remove('is-valid');
          Password.classList.add('is-invalid');
          Password.focus();
          setTimeout(function(){
            $('#alartDiv').fadeOut();
          },7000);
          return false;
        }else{
          Password.classList.remove('is-value');
          Password.classList.remove('is-invalid');
          return true;
        }
      }

      function checkIfConfirmPasswordIsEmpty(){
        if(ConfirmPassword.value === '' || ConfirmPassword.value.trim() === ''){
          $(alartDiv).html('');
          var content = document.createTextNode("Confirm password TextField is empty");
          alartDiv.appendChild(content);
          alartDiv.style.display = 'block';
          ConfirmPassword.classList.remove('is-valid');
          ConfirmPassword.classList.add('is-invalid');
          ConfirmPassword.focus();
          setTimeout(function(){
            $('#alartDiv').fadeOut()
          },7000);
          return false;
        }else{
          ConfirmPassword.classList.remove('is-valid');
          ConfirmPassword.classList.remove('is-invalid');
          return true
        }
      }

      function validateUserName(){
        if(!regexForUserName.test(UserName.value)){
          $(alartDiv).html('');
          var content = document.createTextNode("Error !! Wrong computation parttern");
          alartDiv.appendChild(content);
          alartDiv.style.display = 'block';
            UserName.classList.remove('is-valid');
            UserName.classList.add('is-invalid');
            $('#UserName').tooltip('dispose');
            UserName.focus();
            setTimeout(function(){
              $('#alartDiv').fadeOut()
            },7000);
            return false;
        }else{
          UserName.classList.remove('is-invalid');
          UserName.classList.remove('is-valid');
          return true;
        }
      }

      function validateEmail(){
        if(!regexForEmailAddres.test(Email.value)){
          $(alartDiv).html('');
          var content = document.createTextNode("Error !! Wrong Email Address");
          alartDiv.appendChild(content);
          alartDiv.style.display = 'block';
            Email.classList.remove('is-valid');
            Email.classList.add('is-invalid');
            $('#Email').tooltip('dispose')
            Email.focus();
            setTimeout(function(){
              $('#alartDiv').fadeOut()
            },7000);
            return false;
        }else{
          Email.classList.remove('is-invalid');
          Email.classList.remove('is-valid');
          return true;
        }
      }

      function validatePassword(){
        if(!regexForPassword.test(Password.value)){
          $(alartDiv).html('');
          var content = document.createTextNode("Error !! Wrong password parttern, Use a partern like ucgs232!");
          alartDiv.appendChild(content);
          alartDiv.style.display = 'block';
          Password.classList.remove('is-valid');
          Password.classList.add('is-invalid');
          Password.focus();
          $('#Password').tooltip('dispose');
          setTimeout(function(){
            $('#alartDiv').fadeOut()
          },7000);
          return false;
        }else{
          Password.classList.remove('is-invalid');
          Password.classList.remove('is-valid');
          return true
        }
      }

      function validateConfirmPassword(){
        if(!regexForConfirmPassword.test(ConfirmPassword.value)){
          $(alartDiv).html('');
          var content = document.createTextNode("Error !! Wrong password parttern, Use a partern like ucgs232!");
          alartDiv.appendChild(content);
          alartDiv.style.display = 'block';
          ConfirmPassword.classList.remove('is-valid');
          ConfirmPassword.classList.add('is-invalid');
          $('#ConfirmPassword').tooltip('dispose');
          ConfirmPassword.focus();
          setTimeout(function(){
            $('#alartDiv').fadeOut()
          },7000);
          return false;
        }else{
          ConfirmPassword.classList.remove('is-invalid');
          ConfirmPassword.classList.remove('is-valid');
          return true;
        }
      }

      function uploadToServer(){
        var postData = {
          UserName : UserName.value,
          Email : Email.value,
          Password : Password.value,
          ConfirmPassword : ConfirmPassword.value
        }
        $ajax({
          method : 'POST',
          url : '/users/postData',
          dataType : 'json',
          data : postData,
          success : function(data){
              console.log(data);
          },
          failure : function(error){
              console.log(error);
          }
        });
      }

      submitButton.addEventListener('click', function(e){
        e.preventDefault();
        if(checkIfUserIsEmpty() && checkIfEmailIsEmpty() && checkIfPasswordIsEmpty() && checkIfConfirmPasswordIsEmpty()){
            if(validateUserName() && validateEmail() && validatePassword() && validateConfirmPassword()){
                  // execute your request...
            }
          }
      });

      $(document).on('keypress', function(event){
          if(event.keyCode === 13){
            event.preventDefault();
            if(checkIfUserIsEmpty() && checkIfEmailIsEmpty() && checkIfPasswordIsEmpty() && checkIfConfirmPasswordIsEmpty()){
              if(validateUserName() && validateEmail() && validatePassword() && validateConfirmPassword()){
                uploadToServer();
              }
            }
          }
      });

  });

