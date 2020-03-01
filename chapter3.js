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

function audio (){
  var x = document.getElementById("myAudio");
   x.play();
   var x = document.getElementById("myAudio").loop;

}

function spill (){
  var x = document.getElementById("spill");
   x.play();
}

function drown (){
  var x = document.getElementById("drown");
   x.play();
}

function page1() {
        document.getElementById("speechbubble").style.display ="block";

        //Background image


            document.getElementById("gamecontainer").style.backgroundImage = "url('witchnroom.png')";
          document.getElementById("speech").innerText = " Hi, I’m Bia. You will be my familiar from now on. Do you have any questions for me?";



        //Button
        document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="whatfamiliar(); catmeow();">Whats famaliar</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="herself(); catmeow();">Tell me about yourself</div>';
    document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="wizardnotlike(); catmeow(); creepy();">Why does the wizard not like you?</div>';


      //visible & hidden
      document.getElementById("introtext").style.display ="none";
      document.getElementById("catbox").style.display ="none";
      document.getElementById("option2").style.display ="block";
      document.getElementById("option3").style.display ="block";

      //LET THERE BE MUSIC

}


function run(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('run.png')";
  document.getElementById("introtext").innerText = "The witch is after you and trying to take your key! Where will you hide?";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="onbedleft(); catmeow();">Jump on Bed</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="underbedleft(); catmeow();">Under the bed</div>';
  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}

function onbedleft(){
    document.getElementById("gamecontainer").style.backgroundImage = "url('onbedleft.png')";
  document.getElementById("introtext").innerText = "She's not giving up. Run!";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="onbedright(); catmeow();">Look right</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="onshelf(); glass();">Jump on shelf</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="underdesk();">Hide under desk</div>';
  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="block";
}

function onbedright(){
    document.getElementById("gamecontainer").style.backgroundImage = "url('bedtopright.png')";

  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="onbedleft(); catmeow();">Look left</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="pot(); catmeow();">Go to pot</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="underbedleft(); catmeow();">Hide under bed</div>';
  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="block";
}


function onshelf() {

  document.getElementById("gamecontainer").style.backgroundImage = "url('onshelf.png')";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="throwplant(); glass();">Throw Plant</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="underdesk();">Go hide under desk</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="pot();">Go to pot</div>';
//visible & hidden
document.getElementById("speechbubble").style.display ="none";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="block";


}

function throwplant() {
  document.getElementById("gamecontainer").style.backgroundImage = "url('topshelf2.png')";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="throwplant(); glass();">Throw Plant</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="underdesk()">Go hide under desk</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="pot();">Go to pot</div>';
//visible & hidden
document.getElementById("speechbubble").style.display ="none";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="none";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="block";


}

function underbedleft(){
    document.getElementById("gamecontainer").style.backgroundImage = "url('underbedleft.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="underdesk(); catmeow();">Under Desk</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="underbedright(); catmeow();">Look Right</div>';

  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}

function underbedright(){
    document.getElementById("gamecontainer").style.backgroundImage = "url('right.png')";
  document.getElementById("introtext").innerText = "Witch has caught you!";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lose(); catmeow();">Oh no</div>';
  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
}

function underdesk(){
    document.getElementById("gamecontainer").style.backgroundImage = "url('underdesk.png')";
  document.getElementById("introtext").innerText = "Witch has caught you!";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lose(); catmeow();">Oh no</div>';
  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
}


function lose(){
    document.getElementById("gamecontainer").style.backgroundImage = "url('bedroom.png')";
  document.getElementById("introtext").innerText = "Game over: You've lost hope";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lose(); catmeow();">Collect Your Loss</div>';
  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
}


function pot() {


  document.getElementById("gamecontainer").style.backgroundImage = "url('pot.png')";

document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="poof(); drown();">Jump in pot</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="spilled(); spill();">Push the pot</div>';
//visible & hidden

document.getElementById("speechbubble").style.display ="none";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="none";

}

function poof(){
    document.getElementById("gamecontainer").style.backgroundImage = "url('pot.png')";
  document.getElementById("introtext").innerText = "You poofed into magical dust :(";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lose();">RIP</div>';
  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
}

function spilled(){
    document.getElementById("gamecontainer").style.backgroundImage = "url('spilled.png')";
  document.getElementById("introtext").innerText = "Oh no... The brew spilled all over the witch and you're key! It made you're key shrink";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="spilledlook(); catmeow();">Cry</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="spilledlook(); catmeow();">Look what you did</div>';
  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}

function spilledlook(){
    document.getElementById("gamecontainer").style.backgroundImage = "url('spillednangry.png')";
  document.getElementById("speech").innerText = "Look what you’ve done! You’ve destroyed my flowers, my room, and my potion I worked so hard on. Now give me the key!";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="hidebox(); catmeow();">No</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="leave(); catmeow();">Who cares about your flowers</div>';
  //visible & hidden
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}


function hidebox() {
  document.getElementById("gamecontainer").style.backgroundImage = "url('spillednangry.png')";
document.getElementById("speech").innerText = "Now I'm going to hide the box";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="leave2(); catmeow();">Fine, take the key!</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="turnkey(); catmeow();">I will find the box again!</div>';
//visible & hidden
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="none";
}

function turnkey() {
  document.getElementById("gamecontainer").style.backgroundImage = "url('right.png')";

document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="unchanged(); catmeow();">Pretty please turn big again</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="unchanged(); catmeow();">Demand it to turn big</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="unchanged(); catmeow();">Stretch it</div>';
//visible & hidden
document.getElementById("small").style.display ="block";
document.getElementById("speechbubble").style.display ="none";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="block";
}


function unchanged() {

document.getElementById("introtext").innerText = "Sadly the key remains unchanged. Why don't we use our brains and ask the wizard?";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="wizard();">Go To wizard</div>';

//visible & hidden
document.getElementById("speechbubble").style.display ="none";
document.getElementById("introtext").style.display ="block";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
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
  document.getElementById("introtext").innerText = "The wizard & the witch died. Do you still want to save them?";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1(); catmeow();">Yes! I feel bad</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="lose(); catmeow();">No I am a cold hearted monster</div>';

  //visible & hidden
  document.getElementById("introtext").style.display ="block";
  document.getElementById("speechbubble").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}
