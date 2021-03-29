// check if local storage available
if(typeof(Storage)){
  console.log('Storage available');

  //Username button listener
  let usernameBttn = document.querySelector('#usernameBttn');
  usernameBttn.addEventListener('click', checkUsername);

  function checkUsername(){
    console.log('Checking Username...')
    // let userName = document.
    document.querySelector('#logIn').style.display = 'none';
  };

  // function newUser(){
  
  // };

}else{
  console.log('Storage not available');
};