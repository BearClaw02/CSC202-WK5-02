function playCraps() {
     console.log("playCraps() function Started");
     var die1 = Math.ceil(Math.random() * 6);// declares frist varible//
     var die2 = Math.ceil(Math.random() * 6);//declares second varrible//
     var sum = die1 + die2; // adds the 2 varibles//
     document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;   // adds the die together//
     document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;   //adds the die 2 together//
     document.getElementById("sumRes").innerHTML = "Sum = " + sum;   //Gets the sum///
     if (sum == 7 || sum == 11) {    //finds if you lose//
          loss++;
          document.getElementById("lossRes").innerHTML = loss;
          document.getElementById("finalRes").innerHTML = "CRAPS - you lose!!";
     }
     else if (die1 == die2 && die1 % 2 == 0) {   // finds if you lose//
          wins++;
          document.getElementById("winRes").innerHTML = wins;
          document.getElementById("finalRes").innerHTML = "DOUBLES - you win!!";
     }
     else {  //finds if you tie//
          tie++;
          document.getElementById("tieRes").innerHTML = tie;
          document.getElementById("finalRes").innerHTML = "Draw - You neither won nor lost please try again";
     }

}

function blastOff() {   //starts the blastoff timer by five second intervals//
     var currTime = 50;
     setTimeout(function () {
          currTime = currTime - 5;
          document.getElementById("countdownTimer").innerHTML = currTime;
     }, 5000);
     setTimeout(function () {
          currTime = currTime - 5;
          document.getElementById("countdownTimer").innerHTML = currTime;
     }, 10000);
     setTimeout(function () {
          currTime = currTime - 5;
          document.getElementById("countdownTimer").innerHTML = currTime;
     }, 15000);
     setTimeout(function () {
          currTime = currTime - 5;
          document.getElementById("countdownTimer").innerHTML = currTime;
     }, 20000);
     setTimeout(function () {
          currTime = currTime - 5;
          document.getElementById("countdownTimer").innerHTML = currTime;
     }, 25000);
     setTimeout(function () {
          currTime = currTime - 5;
          document.getElementById("countdownTimer").innerHTML = currTime;
     }, 30000);
     setTimeout(function () {
          currTime = currTime - 5;
          document.getElementById("countdownTimer").innerHTML = currTime;
     }, 35000);
     setTimeout(function () {
          currTime = currTime - 5;
          document.getElementById("countdownTimer").innerHTML = currTime;
     }, 40000);
     setTimeout(function () {
          currTime = currTime - 5;
          document.getElementById("countdownTimer").innerHTML = currTime;
     }, 45000);
     setTimeout(function () {
          currTime = currTime - 5;
          document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
     }, 50000);
}

function btrBlastOff() {
     console.log("btrBlastOff() started");
     var currTime = 50;
     for (var i = 0; i < 11; i++) {
          setTimeout(function () {
               if (currTime >= 25) {
                    document.getElementById("countDownTimer").innerHTML = currTime;
               } else if (currTime == 0) {
                    document.getElementById("countDownTimer").innerHTML = "Blastoff!!";
               } else {
                    document.getElementById("countDownTimer").innerHTML = "Waring Less Tham 1/2 way to Launch, time left =" + currTime;
               }
               currTime = currTime - 5;
          }, i * 5000);
     }
}