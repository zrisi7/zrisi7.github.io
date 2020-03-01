function catmeow() {
  var x = document.getElementById("catmeow");
   x.play();


}

function glass() {
  var x = document.getElementById("glass");
   x.play();
}

function beggingmeow() {
  var x = document.getElementById("beggingmeow");
   x.play();
}

function angrymeow() {
  var x = document.getElementById("angrymeow");
   x.play();
}

function collected() {
  var x = document.getElementById("collected");
   x.play();

}

function creepy() {
  var x = document.getElementById("creepy");
   x.play();

}

function audio (){
  var x = document.getElementById("myAudio");
   x.play();
   var x = document.getElementById("myAudio").loop;

}

function page1() {
        document.getElementById("speechbubble").style.display ="block";

        //Background image


            document.getElementById("gamecontainer").style.backgroundImage = "url('witchnroom.png')";
          document.getElementById("speech").innerText = " Hi, I’m Bia. You will be my familiar from now on. Do you have any questions for me?";



        //Button
        document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="whatfamiliar(); catmeow();">Whats famaliar</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="herself(); catmeow();">Tell me about yourself</div>';
    document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="wizardnotlike(); creepy();">Why does the wizard not like you?</div>';


      //visible & hidden
      document.getElementById("introtext").style.display ="none";
      document.getElementById("catbox").style.display ="none";
      document.getElementById("option2").style.display ="block";
      document.getElementById("option3").style.display ="block";

      //LET THERE BE MUSIC

}




function whatfamiliar() {
        document.getElementById("speech").innerText = "A familiar is a magical being that assists a witch. Me!";
        document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1(); catmeow();">Back</div>';
        document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="nomore(); catmeow();">No more questions</div>';
        document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="helpme(); catmeow();">Help Me</div>';
        //vissible & hidden

        document.getElementById("option1").style.display ="block";
        document.getElementById("option2").style.display ="block";
        document.getElementById("option3").style.display ="block";


}



function herself() {
  document.getElementById("speech").innerText = "I’m nineteen years old. I recently finished at the wicked witch academy. I love the color purple & yellow. I love my flowers, and reading books too. I have a huge library. I hate messes. So please don’t make a mess.";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1(); catmeow();">Back</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="nomore(); beggingmeow();">No more questions</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="helpme(); catmeow();">Help Me</div>';


  //visible & hidden
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="block";
}

function wizardnotlike(){
  document.getElementById("speech").innerText = "The wizard doesn’t like me? I wasn’t aware.";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1(); catmeow();">Back</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="nomore(); beggingmeow();">No more questions</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="helpme(); catmeow();">Help Me</div>';


  //visible & hidden
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="block";
}

function helpme(){
  document.getElementById("speech").innerText = "Sure, what do you need help with?";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="openkey(); catmeow();">Can you open the box with your key?</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="nomore(); beggingmeow();">Nevermind</div>';


  //visible & hidden
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}

function openkey(){
  document.getElementById("speech").innerText = "The wizard said not to open it. I can’t open it. Oh look at that! My potion is ready. Would you help me pour it?";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="nomore(); catmeow();">Sure</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="leave(); beggingmeow();">I dont want to</div>';


  //visible & hidden
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}

function nomore(){
  document.getElementById("speech").innerText = "Oh look at that! My potion is ready. Would you help me pour it?";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="bedtime(); catmeow();">Sure</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="leave(); beggingmeow();">I dont want to</div>';


  //visible & hidden
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}

function leave(){
  document.getElementById("speech").innerText = "Please leave";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="leave2(); catmeow();">Sure</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="openkey(); catmeow();">I dont want to</div>';

  //visible & hidden
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}


function leave2(){
  document.getElementById("introtext").innerText = "You gave up :( The wizard & the witch died. Do you still want to save them?";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1(); catmeow();">Yes! I feel bad</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="looser(); catmeow();">No I am a cold hearted monster</div>';

  //visible & hidden
  document.getElementById("introtext").style.display ="block";
  document.getElementById("speechbubble").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}

function looser(){
  document.getElementById("introtext").innerText = "Game over: You've lost hope";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="leave2(); catmeow();">Collect Your Loss</div>';

  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
}

function bedtime(){
  document.getElementById("speech").innerText = "Looks like it’s time for bed. ";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="bedtime2(); catmeow();">Can we open the box now?</div>';



  //visible & hidden
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
}


function bedtime2(){
  document.getElementById("speech").innerText = "Of course not! ";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="bedtime3();">Tries to take key</div>';



  //visible & hidden
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
}




function bedtime3() {

  document.getElementById("speech").innerText = "Go Outside!";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lookwindow();">Go Outside</div>';



  //visible & hidden
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";



}


function lookwindow() {

      document.getElementById("introtext").innerText = "Look, the window to the witch’s room is open. Should we try to climb in and steal the key?";


  document.getElementById("speechbubble").style.display ="none";
    document.getElementById("gamecontainer").style.backgroundImage = "url('window.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="enterwindow(); glass();">Yes</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="leave();">No</div>';





  //visible & hidden
    document.getElementById("speech").style.display ="none";
    document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("speech").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";



}


function enterwindow() {


    document.getElementById("gamecontainer").style.backgroundImage = "url('enter.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findkey();">Find the Key on website</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="leave();"> Find the Key at Sheridan Campus</div>';
document.getElementById("hint").innerText = " Note : Physical award is more valuable! ";


  //visible & hidden
      document.getElementById("hint").style.display ="block";
    document.getElementById("introtext").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("speechbubble").style.display ="none";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";



}

function findkey() {


    document.getElementById("gamecontainer").style.backgroundImage = "url('enter.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="higherground();">Look from higher ground</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="library();"> Look at library</div>';
  document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="desk();"> Look at Desk</div>';



  //visible & hidden
    document.getElementById("hiddenbox").style.display ="none";
      document.getElementById("hint").style.display ="none";
    document.getElementById("introtext").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("speechbubble").style.display ="none";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="block";



}


function higherground() {
      document.getElementById("gamecontainer").style.backgroundImage = "url('topview.png')";
      document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findkey();">Back</div>';

        document.getElementById("hint").style.display ="block";
        document.getElementById("introtext").style.display ="none";
        document.getElementById("option1").style.display ="block";
          document.getElementById("speechbubble").style.display ="none";
          document.getElementById("option2").style.display ="none";
                document.getElementById("option3").style.display ="none";
          document.getElementById("hiddenbox").style.display ="block";

document.getElementById("hint").innerText = " See the key? Click it! ";
}



function library() {
      document.getElementById("gamecontainer").style.backgroundImage = "url('library.png')";
      document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findkey(); catmeow();">Back</div>';

        document.getElementById("hint").style.display ="block";
        document.getElementById("introtext").style.display ="none";
        document.getElementById("option1").style.display ="block";
          document.getElementById("speechbubble").style.display ="none";
          document.getElementById("option2").style.display ="none";
                document.getElementById("option3").style.display ="none";
                  document.getElementById("box").style.display ="none";
                  document.getElementById("hiddenbox").style.display ="none";
        document.getElementById("hint").innerText = " See the key? Click it! ";

}


function desk() {
      document.getElementById("gamecontainer").style.backgroundImage = "url('witchydesk.png')";
      document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findkey(); catmeow();">Back</div>';

        document.getElementById("hint").style.display ="block";
        document.getElementById("introtext").style.display ="none";
        document.getElementById("option1").style.display ="block";
          document.getElementById("speechbubble").style.display ="none";
          document.getElementById("option2").style.display ="none";
                document.getElementById("option3").style.display ="none";
                  document.getElementById("box").style.display ="none";
                  document.getElementById("hiddenbox").style.display ="none";

}

function foundkey() {

    document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="catmeow();">Download Award</div>';
      document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="bedtime6(); catmeow();">Next</div>';


  document.getElementById("speechbubble").style.display ="none";
      document.getElementById("box").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}




function bedtime6(){
  document.getElementById("introtext").innerText = "Oh No...Looks like the witch woke up. Send this to our Instagram account - Key Code, Numbers of Players, Digital or physical play?";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1();">Okay</div>';

  //visible & hidden
    document.getElementById("hint").style.display ="none";
  document.getElementById("box").style.display ="none";
  document.getElementById("introtext").style.display ="block";
  document.getElementById("speechbubble").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
}
