function catmeow() {
  var x = document.getElementById("catmeow");
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

function page1() {
        document.getElementById("speechbubble").style.display ="block";

        //Background image
        document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";


          document.getElementById("speech").innerText = "You've woken. I've given you a box. A box that must not be opened";



        //Button
    document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="whynot(); beggingmeow();">Why not?</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="openbox(); beggingmeow();">Open the box</div>';
    document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="hidebox(); catmeow();">Okay, I shall not</div>';


      //visible & hidden
      document.getElementById("introtext").style.display ="none";
      document.getElementById("catbox").style.display ="none";
      document.getElementById("option2").style.display ="block";
      document.getElementById("option3").style.display ="block";

      //LET THERE BE MUSIC
      var x = document.getElementById("myAudio");
       x.play();
       var x = document.getElementById("myAudio").loop;
}

function whynot() {



    document.getElementById("speech").innerText = "That I cannot tell";

    document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="hidebox(); meow();">Okay</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="openbox(); angrymeow();">Try to Open Box</div>';


    //vissible & hidden
    document.getElementById("option3").style.display ="none";



}




function openbox() {
        document.getElementById("speech").innerText = "Did you not heed my warning? This box must not be opened at all costs. Do not open the box";
        document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="hidebox(); angrymeow();">Try to open box</div>';
        document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="hidebox(); catmeow();">Okay</div>';
        //vissible & hidden
        document.getElementById("option1").style.display ="none";


}



function hidebox() {
  document.getElementById("speech").innerText = "I will be hiding this box until I can gift you to the witch Bia. A witch that I despise.";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findbox(); catmeow();">Okay</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="hate(); beggingmeow();">Why do you hate the witch?</div>';



  //visible & hidden
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}


function hidebox2() {
  document.getElementById("speech").innerText = "I will be hiding this box until I can gift you to the witch Bia. A witch that I despise.";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findbox(); catmeow();">Okay</div>';




  //visible & hidden
    document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
    document.getElementById("option3").style.display ="none";
}




function findbox() {
  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardpot.png')";


  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lookbox();">Find Box</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="giveup();">I give up</div>';

  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
      document.getElementById("option3").style.display ="none";
    document.getElementById("speechbubble").style.display ="none";
      document.getElementById("hiddenbox").style.display ="none";
}




function lookbox(){

  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lookdesk();">Look at Desk</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="lookbed();">Look at Bedroom</div>';
  document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="lookshelf();">Look at Shelf</div>';


  document.getElementById("option3").style.display ="block";
      document.getElementById("hint").style.display ="none";
        document.getElementById("hiddenbox").style.display ="none";

}




function lookdesk(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('desk.png')";


  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lookbox();">Back</div>';

  document.getElementById("hint").style.display ="block";
  document.getElementById("option2").style.display ="none";
  document.getElementById("option3").style.display ="none";
  document.getElementById("hiddenbox").style.display ="none";


}


function lookshelf(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('shelf.png')";


  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lookbox();">Back</div>';

  document.getElementById("hint").style.display ="block";
  document.getElementById("option2").style.display ="none";
  document.getElementById("option3").style.display ="none";
  document.getElementById("hiddenbox").style.display ="block";


}


function lookbed(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('bed.png')";


  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lookbox();">Back</div>';

  document.getElementById("hint").style.display ="block";
  document.getElementById("option2").style.display ="none";
  document.getElementById("option3").style.display ="none";
  document.getElementById("hiddenbox").style.display ="none";

}

function found(){
document.getElementById("gamecontainer").style.backgroundImage = "url('shelf.png')";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="giveup();">Try to Open</div>';
document.getElementById("option1").style.display ="block";
document.getElementById("box").style.display ="block";

document.getElementById("hiddenbox").style.display ="none";
}

function giveup(){
document.getElementById("gamecontainer").style.backgroundImage = "url('wizardpot.png')";


document.getElementById("introtext").innerText = " You gave up :( The wizard & the witch died. Do you still want to save them? ";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1();">Yes! I feel bad</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="gameover();">No I am a cold hearted monster</div>';


  document.getElementById("introtext").style.display ="block";
document.getElementById("option1").style.display ="block";
document.getElementById("option2").style.display ="block";
document.getElementById("option3").style.display ="none";
document.getElementById("box").style.display ="none";
document.getElementById("speechbubble").style.display ="none";
  document.getElementById("hiddenbox").style.display ="none";
  document.getElementById("hint").style.display ="none";

}

function gameover(){
document.getElementById("gamecontainer").style.backgroundImage = "url('wizardpot.png')";
document.getElementById("introtext").innerText =  "Game over: You've lost hope";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1();">Collect your loss</div>';
document.getElementById("introtext").style.display ="block";
document.getElementById("box").style.display ="none";
document.getElementById("option1").style.display ="block";
document.getElementById("option2").style.display ="none";
document.getElementById("hiddenbox").style.display ="none";
document.getElementById("option3").style.display ="none";
document.getElementById("speechbubble").style.display ="none";
document.getElementById("hint").style.display ="none";
}

function hate(){
document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";
document.getElementById("speech").innerText = "She has taken away my only family, my son. He's missing now, and I'm trying to find him. Would you help?";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findbox(); catmeow();">Okay</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="giveup(); catmeow();">I will think about it</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="anger(); angrymeow();">Maybe he doesnt like you</div>';
document.getElementById("speechbubble").style.display ="block";

document.getElementById("option1").style.display ="block";
document.getElementById("option2").style.display ="block";
document.getElementById("option3").style.display ="block";

}

function anger(){
document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";

document.getElementById("speech").innerText = "That's ridiculous we had a strong bond!  Say! What is the most important thing a witch needs to learn in school? Spelling!";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="notfunny(); angrymeow();">That wasnt funny</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="hidebox2(); catmeow();">Fake Laugh</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="hidebox2(); catmeow();">THAT was FUNNY</div>';

document.getElementById("speechbubble").style.display ="block";
document.getElementById("option1").style.display ="block";
document.getElementById("option2").style.display ="block";
document.getElementById("option3").style.display ="block";


}

function notfunny(){
document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";
document.getElementById("speech").innerText = "You're not funny. Get out!";

document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="giveup();">GET OUT</div>';
document.getElementById("speechbubble").style.display ="block";
document.getElementById("option1").style.display ="block";

document.getElementById("option2").style.display ="none";
document.getElementById("option3").style.display ="none";
}
