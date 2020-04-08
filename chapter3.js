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
          document.getElementById("speech").innerText = "What are you doing! Look what you did to my flowers! Give me the key!";



        //Button
        document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="run(); catmeow(); audio();">Look Around</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="lose(); audio();" style="display:block;">Who cares about your flowers</div>';


      //visible & hidden

      document.getElementById("introtext").style.display ="none";
      document.getElementById("catbox").style.display ="none";
      document.getElementById("option2").style.display ="block";
      document.getElementById("option3").style.display ="none";

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

function wizard() {
  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";
document.getElementById("speech").innerText = "What brings you back?";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="seeyalater(); catmeow();">Show Key</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="seeyalater(); catmeow();">I demand you fix this</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="seeyalater(); catmeow();">Cute kitty pout</div>';
//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="block";


}

function seeyalater() {
  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";
document.getElementById("speech").innerText = "Okay! All fixed!";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="witchsick(); catmeow();">Thank you!</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="(); catmeow();"><a href="https://drive.google.com/open?id=1yBlZzHIpKdGOvhviv7dbJXzvUTzkuz6j" target="_blank" style="text-decoration: none; color:white;">Download Award</a></div>';


//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="none";


}

function witchsick(){

  document.getElementById("gamecontainer").style.backgroundImage = "url('bedroom.png')";
  document.getElementById("introtext").innerText = "The witch is sick. ";

  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="nobox();">Next</div>';

  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
          document.getElementById("option3").style.display ="none";
}

function nobox(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('sicknroom.png')";
document.getElementById("speech").innerText = "Don’t look for the box while I am sick. You see what you’ve done by being too curious? You almost killed him” ";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="witchsleep(); catmeow();">Killed who?</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="witchsleep(); catmeow();">Keep looking for the box</div>';

//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="none";



}

function witchsleep(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('sicknroom.png')";
document.getElementById("speech").innerText = "Don’t look for the box while I am sick. You see what you’ve done by being too curious? You almost killed him” ";
//Link to Instagram//
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="witchup(); catmeow();">Goodnight</div>';

//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
          document.getElementById("option3").style.display ="none";

}

function witchup(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('bedroom.png')";
  document.getElementById("introtext").innerText = " Next morning, the witch is still in bed. ";

  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="witchisup();">Next</div>';

  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
          document.getElementById("option3").style.display ="none";

}

function witchisup(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('sicknroom.png')";
document.getElementById("speech").innerText = "Can you give me my medicine?";

document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findpotion(); catmeow();">Look for Medicine</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="findpotion(); catmeow();">Trick the witch & find truth syrum</div>';

//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="none";

}

function findpotion(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('bedroom.png')";


document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="higherground(); catmeow();">Look from higher ground</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="library(); catmeow();">Look at Library</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="desk(); catmeow();">Look at Desk</div>';

//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="none";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="block";
          document.getElementById("hiddenbox").style.display ="none";
          document.getElementById("hiddenmed").style.display ="none";
}






function higherground() {
      document.getElementById("gamecontainer").style.backgroundImage = "url('topview.png')";
      document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findpotion();">Back</div>';

        document.getElementById("hint").style.display ="block";
        document.getElementById("introtext").style.display ="none";
        document.getElementById("option1").style.display ="block";
          document.getElementById("speechbubble").style.display ="none";
          document.getElementById("option2").style.display ="none";
                document.getElementById("option3").style.display ="none";
          document.getElementById("hiddenbox").style.display ="none";
          document.getElementById("hiddenmed").style.display ="block";
document.getElementById("hint").innerText = " See the item? Click it! ";
}



function library() {
      document.getElementById("gamecontainer").style.backgroundImage = "url('library.png')";
      document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findpotion(); catmeow();">Back</div>';

        document.getElementById("hint").style.display ="block";
        document.getElementById("introtext").style.display ="none";
        document.getElementById("option1").style.display ="block";
          document.getElementById("speechbubble").style.display ="none";
          document.getElementById("option2").style.display ="none";
                document.getElementById("option3").style.display ="none";
                  document.getElementById("box").style.display ="none";
                  document.getElementById("hiddenbox").style.display ="block";
        document.getElementById("hint").innerText = " See the item? Click it! ";
        document.getElementById("hiddenmed").style.display ="none";

}


function desk() {
      document.getElementById("gamecontainer").style.backgroundImage = "url('witchydesk.png')";
      document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="findpotion(); catmeow();">Back</div>';

        document.getElementById("hint").style.display ="block";
        document.getElementById("introtext").style.display ="none";
        document.getElementById("option1").style.display ="block";
          document.getElementById("speechbubble").style.display ="none";
          document.getElementById("option2").style.display ="none";
                document.getElementById("option3").style.display ="none";
                  document.getElementById("box").style.display ="none";
                  document.getElementById("hiddenbox").style.display ="none";
                      document.getElementById("hiddenmed").style.display ="none";

}

function foundmed() {

  document.getElementById("gamecontainer").style.backgroundImage = "url('topview.png')";
  document.getElementById("introtext").innerText = "You found the medicine! Do You want to continue? ";

  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lose();">Yes! Give her the medicine</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="findpotion();">No</div>';

  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="none";

}

function medend() {
  document.getElementById("gamecontainer").style.backgroundImage = "url('topview.png')";
  document.getElementById("introtext").innerText = "The wizard & the witch died. Do you still want to save them? ";

  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1();">Yes!</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="lose();">No!</div>';

  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="none";
              document.getElementById("hiddenmed").style.display ="none";
                  document.getElementById("hiddenbox").style.display ="none";

}

function foundtruth(){
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="didyoufind();">Go to Witch</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="();"><a href="https://drive.google.com/open?id=1ZotEjrVPMSsQi4oOe4NvGbEdSZC9U4kH" target="_blank" style="text-decoration: none; color:white;">Download Award</a></div>';
  document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="ar();">See potion in AR</div>';


  //visible & hidden
    document.getElementById("hint").style.display ="none";
    document.getElementById("introtext").style.display ="none";
  document.getElementById("box").style.display ="block";
  document.getElementById("speechbubble").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="block";

}


function ar() {

  document.getElementById("introtext").innerText = "Download this image on your phone https://pixverse.club/armarker.png. And open this page on your computer with a camera https://pixverse.club/potion. Show the downloaded image to your computer's camera. Send the number from the AR key if you forgot the quote.";


    document.getElementById("option1").style.display ="block";
    document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="didyoufind();">Go To Witch</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="();"><a href="https://drive.google.com/open?id=1ZotEjrVPMSsQi4oOe4NvGbEdSZC9U4kH" target="_blank" style="text-decoration: none; color:white;">Download Award</a></div>';
document.getElementById("introtext").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="none";
}

function wizardsson(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('sicknroom.png')";
document.getElementById("speech").innerText = "He's a flower now";
//Link to Instagram//
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="wizardsson1(); catmeow();">What? Why Who did it?</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="wizardsson2(); catmeow();">Which flower? Can I have it!</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="wizardsson1(); catmeow();">Cool Story</div>';

//visible & hidden
    document.getElementById("hiddenmed").style.display ="none";
        document.getElementById("hiddenbox").style.display ="none";
document.getElementById("small").style.display ="none";
    document.getElementById("box").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="block";

}

function wizardsson1(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('sicknroom.png')";
document.getElementById("speech").innerText = "Because of me... It's the wizards fault I swear!";
//Link to Instagram//
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="thetruth(); catmeow();">Where is the box?</div>';

//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
          document.getElementById("option3").style.display ="none";

}


function wizardsson2(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('sicknroom.png')";
document.getElementById("speech").innerText = "You're a traitor aren't you?  You're working with him. I don't like traitors";
//Link to Instagram//
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="(); catmeow();">Collect your loss</div>';

//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
          document.getElementById("option3").style.display ="none";

}


function thetruth(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('sicknroom.png')";
document.getElementById("speech").innerText = "It's somewhere in the Library";
//Link to Instagram//
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="thetruth2(); catmeow();">Where in the Library?</div>';

//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
          document.getElementById("option3").style.display ="none";

}

function thetruth2(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('sicknroom.png')";
document.getElementById("speech").innerText = "Goodnight!";
document.getElementById("introtext").innerText = "Send us 'Once you choose hope anything is possible.' On our Instagram private message to get the next chapter!";
//Link to Instagram//
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="();"><a href="https://www.instagram.com/pixverse/" target="_blank" style="text-decoration: none; color:white;">Go to Instagram:Pixverse</a></div>';
//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="block";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
          document.getElementById("option3").style.display ="none";

}

function didyoufind(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('sicknroom.png')";
document.getElementById("speech").innerText = "Did you find the medicine";
//Link to Instagram//
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="medend(); catmeow();">I found the truth potion. Take it!</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="givemedicine(); catmeow();">Here you go!</div>';


//visible & hidden
document.getElementById("hiddenmed").style.display ="none";
    document.getElementById("hiddenbox").style.display ="none";
      document.getElementById("box").style.display ="none";
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="none";

}

function givemedicine(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('sicknroom.png')";
document.getElementById("speech").innerText = "Thank you. Strangely, I don't feel better yet.";
//Link to Instagram//
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="wizardsson(); catmeow();">What happened to the wizards son?</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="thetruth(); catmeow();">Where is the box?</div>';


//visible & hidden
document.getElementById("small").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
          document.getElementById("option3").style.display ="none";

}













//****************************//
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
  document.getElementById("small").style.display ="none";
  document.getElementById("introtext").style.display ="block";
  document.getElementById("speechbubble").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}
