$users = [];

// check if local storage available
if(typeof(Storage)){
  console.log('Storage available');

  //Load ranking
  if(localStorage.getItem('users')){
    $users = JSON.parse(localStorage.getItem('users'));
    ranking($users);
  };

  //Username button listener
  var usernameBttn = document.querySelector('#usernameBttn');
  usernameBttn.addEventListener('click', checkUsername);
  var resetBttn = document.querySelector('#resetBttn');
  resetBttn.addEventListener('click', deleteUsers);

  var username = document.querySelector('#username').value;

  //Check users
  function checkUsername(){
    console.log('Checking username...');
    var username = document.querySelector('#username').value;
    username = username.toUpperCase();
    //Check if input username
    if(username){
      //Check if array exist
      if(localStorage.getItem('users')){
        $users = JSON.parse(localStorage.getItem('users'));
        //Load ranking
        ranking($users);

        //Check if username exist
        if($users.find(user => user.username == username)){
          console.log(username + ' already exists.');

          //Setting username
          localStorage.setItem('GameName',username);

          //Start game
          startGame();

        }else{
          newUser(username);
        };
      }else{
        newUser(username);
      };
    }else{
      console.log('Name is mandatory');
    };
  };

  //Create new user
  function newUser(username){
    console.log('Creating ' + username);
    user = {
      username:username,
      score:0
    };
    $users.push(user);
    localStorage.setItem('users',JSON.stringify($users));
    console.log(username + ' created.');

    //Setting username
    localStorage.setItem('GameName',username);

    //Load ranking
    ranking($users);

    //Start game
    startGame();
  };

  //Delete localStorage
  function deleteUsers(){
    localStorage.clear();
    $users = [];
    //Load ranking
    ranking($users);
  };

  //Ranking
  function ranking($users){
    $users = JSON.parse(localStorage.getItem('users'));
    document.querySelector('.list').innerHTML = '';
    if($users){
      $users.forEach((user) => {
        document.querySelector('.list').innerHTML += '<div class="scores"><span>' + user.username + '</span><span>' + user.score + '</span></div>';
      });
    }
  };

}else{
  console.log('Storage not available');
};