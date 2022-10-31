/* Add your JavaScript to this file */
window.onload = function(){
  var form=document.getElementsByTagName("form")[0];
  form.setAttribute("class","myForm");
  console.log(form);

  form.addEventListener("submit", function(event){
    event.preventDefault()


    var email=document.querySelector('#email').value;

    if(email.trim().length!=0){
        if(email.trim().includes('@')){
          var mess=document.querySelector(".message");
          var success= "Thank you! Your email address " + email.trim() + " has been added to our mailing list!";
          var messageText = document.createTextNode(success);
          var successMessage = document.createElement('p');
          successMessage.setAttribute("class","sMessage");
          successMessage.appendChild(messageText);
          mess.parentNode.insertBefore(successMessage,mess.nextSibling)
        };
    }else{
        var emess=document.querySelector(".message");
        var error= "Please enter a valid email address";
        var emessageText = document.createTextNode(error);
        var errorMessage = document.createElement('p');
        errorMessage.setAttribute("class","eMessage");
        errorMessage.appendChild(emessageText);
        emess.parentNode.insertBefore(errorMessage,emess.nextSibling)

    }
    
  });

};