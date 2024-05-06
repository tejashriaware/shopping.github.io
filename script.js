$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });


  // signup signin

  function handleSignIn(event) {
    event.preventDefault();

  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  
  if (email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  alert(`Sign In: Email - ${email}, Password - ${password}`);
}

function handleSignUp(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (name === '' || email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  alert(`Sign Up: Name - ${name}, Email - ${email}, Password - ${password}`);
}

document.getElementById('signin-form').addEventListener('submit', handleSignIn);
document.getElementById('signup-form').addEventListener('submit', handleSignUp);


  