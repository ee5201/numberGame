// 랜덤 번호 지정 *
// 유저가 번호를 입력한다. go라는 버튼을 누름  -->
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다 -->
// 랜덤번호가 <유저번호 down!!!-->
// 랜덤번호가 >유저번호 up!! -->
//Reset버튼을 누르면 게임이 리셋된다. -->
//5번의 기회를 다쓰면 게임이 끝난다(더이상 추측 불가, 버튼이 disable) -->
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다. -->
//유저가 이미 입력한 숫자를 또 입력하면 ,알려준다. 기회를 깍지 않는다. -->

let num =0;
let PlayButton = document.getElementById("playButton");
let UserInput = document.getElementById("userInput");
let UserResult = document.getElementById("userResult");
let UserReset = document.getElementById("ResetButton");
let UserChance = document.getElementById("user_chance")
let chance = 5 ;
let gameOver = false;
let history = [];

UserChance.textContent = `너에게 남은 기회 :${chance}번`
PlayButton.addEventListener("click",play);
UserReset.addEventListener("click",Reset);

function Picknum(){
  num = Math.floor(Math.random()*100)+1;
  console.log(num)
}

function play(){

  let UserValue = userInput.value;

  if(UserValue <0 || UserValue > 100){
    UserResult.textContent = "1부터 100까지 숫자만 입력 해주세요"
    return;
  }

  if(history.includes(UserValue)){
    return;
  }

  userInput.value = ""

  chance --;
  UserChance.textContent = `너에게 남은 기회 :${chance}번`

if(UserValue < num){
    UserResult.textContent = "에~이 올려봥~";
  }else if(UserValue > num){
    UserResult.textContent = "에~이 내려봥~";
  }else if(UserValue=num){
    UserResult.textContent = "어~머 맞췄넹? 그럼 옆 사람이 대신 마쉬기~😍";
  }

  history.push(UserValue)

  if(chance<1){
    gameOver = true
  };

  if(gameOver == true)
  PlayButton.disabled = true

  if(chance == 0){
    UserResult.textContent = "틀렸어? 그럼 한잔 혀~😎"
  }
}
function Reset(){
  userInput.value = ""

  Picknum()
  chance = 5;
  gameOver = false;
  PlayButton.disabled = false
  UserChance.textContent = `너에게 남은 기회 :${chance}번`

}

Picknum()