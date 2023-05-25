var singInBtn = document.getElementById("signIn");
var singUpBtn = document.getElementById("singUp");
var cardInner = document.getElementById("cardInner");
var signInForm = document.getElementById("signInForm");
var signUpForm = document.getElementById("signUpForm");

var signInShowPassIcon = document.getElementById('signInShowPass');
var signUpShowPassIcon = document.getElementById('signUpShowPass');
var signInPassInput    = document.getElementById('signInPass');
var signUpPassInput    = document.getElementById('signUpPass');


singInBtn.addEventListener('click',(e)=>{
  
  singUpBtn.disabled = false;
  singUpBtn.classList.remove('active');
  e.target.disabled = true;
  e.target.classList.add('active');
  
  
  signInForm.style.display = 'block';
  signUpForm.style.display = 'none';
  
  rotateCard();
  
})

singUpBtn.addEventListener('click',(e)=>{
 
   singInBtn.disabled = false;
   singInBtn.classList.remove('active');
   e.target.disabled = true;
   e.target.classList.add('active');
  
  
    signUpForm.style.display = 'block';
    signInForm.style.display = 'none';
  
   rotateCard();
})


function rotateCard(){
    if(cardInner.classList.contains('rotate')){
     cardInner.classList.remove('rotate');
  }else{
    cardInner.classList.add('rotate');
  }
}







signInShowPassIcon.addEventListener('click',(e)=>{
  
    if(e.target.classList.contains('active')){
       e.target.classList.remove('active');
       signInPassInput.type ="password";
    }else{
       e.target.classList.add('active');
       signInPassInput.type ="text";
    }
})


signUpShowPassIcon.addEventListener('click',(e)=>{
  
    if(e.target.classList.contains('active')){
       e.target.classList.remove('active');
       signUpPassInput.type ="password";
    }else{
       e.target.classList.add('active');
       signUpPassInput.type ="text";
    }
})