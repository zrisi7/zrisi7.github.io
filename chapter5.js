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


            document.getElementById("gamecontainer").style.backgroundImage = "url('library.png')";
          document.getElementById("speech").innerText = "What are you doing! Look what you did to my flowers! Give me the key!";



        //Button
        document.getElementById("option1").outerHTML = '  <div class="button" id="option1" onclick="ohno(); catmeow(); audio();">Yes!</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="lose(); audio();" style="display:block;">No,nevermind</div>';


      //visible & hidden

      document.getElementById("introtext").style.display ="none";
      document.getElementById("catbox").style.display ="none";
        document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
      document.getElementById("option3").style.display ="none";

      //LET THERE BE MUSIC

}



function ohno(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('library.png')";
  document.getElementById("introtext").innerText = "OH NO!!!You've released all the evils of humanity. The witch and wizard are now plotting to kill each other. You're also feeling strange... You've been possessed by the darkness. Who's side are you going be on? The only thing we have left is hope.";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="();"><a href="https://drive.google.com/open?id=1mTt1x_28SFBZ-bzBnA2zfK09f9t9DwdP" target="_blank" style="text-decoration: none; color:white;">Collect Awards</a></div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="whatudone(); catmeow();">Wait! What happens Next?</div>';
  //visible & hidden
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}

function whatudone(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('desklibnwitch.png')";
document.getElementById("speechbubble").innerText ="What have you've done!";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="destroylib();">Destroy Library</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="destroyflower();">Destroy Flower</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="gotowizard();">Go to wizard</div>';
  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="block";
}

function destroylib(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('desklibnwitch.png')";
        document.getElementById("introtext").innerText = "You've accidently Opened A book";
document.getElementById("speechbubble").innerText ="STOP! YOU DUMB CAT! I AM GOING TO TURN U INTO BUBBLES!";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="openbook();">Throw books</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="destroyflower();">Destroy Flower</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="gotowizard();">Go to Wizard</div>';
  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="block";
}

function destroyflower(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('run.png')";
      document.getElementById("introtext").innerText = "Witch is incredibly sad and cries and says “YOU KILLED HIM”";

  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="goodjob();">Go to Wizard</div>';

  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
}

function openbook(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('desklib.png')";
        document.getElementById("introtext").innerText = "You've accidently Opened A book";

  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="readit();">Read it</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="gotowizard();">Leave it before she gets mad</div>';
document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="goodjob();">Go to Wizard</div>';
  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="block";
}

function readit(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('booknlib.png')";
        document.getElementById("introtext").innerText = "Bia's Journal: Oct 12th 1940 Something really horrible happened to Erin... I'm devastated and I can't find a cure for him! I've looked everywhere. His father refuses to help. What do I do? Give up? His father might have the cure...";

  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="destroyflower();">Destroy Flower</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="gotowizard();">Go to Wizard</div>';
  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
            document.getElementById("option3").style.display ="none";
}

function goodjob() {

  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";
document.getElementById("speechbubble").innerText ="Good job! You did exactly what I needed you to do.";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="();">Collect Loss</div>';
//visible & hidden
document.getElementById("box").style.display ="none";
document.getElementById("speechbubble").style.display ="block";
document.getElementById("introtext").style.display ="none";

document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="none";
        document.getElementById("option3").style.display ="none";

}

function gotowizard() {


  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
          document.getElementById("option3").style.display ="none";

  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardpot.png')";
document.getElementById("introtext").innerText = "Wizard is sleeping. Let's destroy his place.";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="crazycat();">Yes, destroy';
//visible & hidden
document.getElementById("speechbubble").style.display ="none";
document.getElementById("introtext").style.display ="block";


}


function crazycat() {
  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";
  document.getElementById("speechbubble").innerText ="You crazy cat! How dare you!? Stop! *uses a spell on cat to turn it back to normal*";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="whoflower();">Who is the flower?</div>';
  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="none";

  document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="none";
        document.getElementById("option3").style.display ="none";


}



function whoflower() {
  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";
  document.getElementById("speechbubble").innerText ="A flower? What are you saying?";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="turnedhim();">He is your son, is he not?</div>';
  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="none";

  document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="none";
        document.getElementById("option3").style.display ="none";


}


function turnedhim() {
  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";
  document.getElementById("speechbubble").innerText ="She turned him into a flower!? ";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="bubble(); drown();">You did it!</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="youdidnt();">You didnt do it?</div>';
  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="none";
  document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="block";
        document.getElementById("option3").style.display ="none";


}


function youdidnt(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnroom.png')";
  document.getElementById("speechbubble").innerText ="No! He's been missing for some quite time. I need you to help me turn him back. Here take a potion and pour this over the witch. So I can rescue him. ";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="sure();">Sure</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="bubble(); drown();">No!</div>';
    document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="lookbox();">Quietly look for cure for flower</div>';

  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="none";

  document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="block";
        document.getElementById("option3").style.display ="block";

}


function bubble(){

    document.getElementById("gamecontainer").style.backgroundImage = "url('roomnbubble.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="();">Collect loss</div>';

  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="none";

  document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="none";
        document.getElementById("option3").style.display ="none";

}

function bubble2(){

    document.getElementById("gamecontainer").style.backgroundImage = "url('bedroom.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="();">Collect loss</div>';

  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="none";

  document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="none";
        document.getElementById("option3").style.display ="none";

}


function lookbox(){

  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardpot.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lookdesk();">Look at Desk</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="lookbed();">Look at Bedroom</div>';
  document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="lookshelf();">Look at Shelf</div>';

  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
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
  document.getElementById("hiddenbox").style.display ="none";


}


function lookbed(){
  document.getElementById("gamecontainer").style.backgroundImage = "url('bed.png')";


  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="lookbox();">Back</div>';

  document.getElementById("hint").style.display ="block";
  document.getElementById("option2").style.display ="none";
  document.getElementById("option3").style.display ="none";
  document.getElementById("hiddenbox").style.display ="block";

}


function found(){
document.getElementById("gamecontainer").style.backgroundImage = "url('bed.png')";
document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="gotowitch();">Go to Witch with the cure</div>';
document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="wizflower();">Pour the wizards own potion on him</div>';

document.getElementById("hiddenbox").style.display ="none";
document.getElementById("option1").style.display ="block";
document.getElementById("option2").style.display ="block";
document.getElementById("option3").style.display ="none";
document.getElementById("box").style.display ="none";
document.getElementById("potion").style.display ="none";


}


function wizflower(){

  document.getElementById("introtext").innerText = "You've turned the wizard into a flower";

  document.getElementById("gamecontainer").style.backgroundImage = "url('wizflower.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="gotowitch();">Go to Witch</div>';

  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="none";
      document.getElementById("option3").style.display ="none";

  document.getElementById("introtext").style.display ="block";
  document.getElementById("hint").style.display ="none";
  document.getElementById("box").style.display ="none";
document.getElementById("potion").style.display ="none";
  document.getElementById("hiddenbox").style.display ="none";

}

function sure() {

  document.getElementById("gamecontainer").style.backgroundImage = "url('roomnangry.png')";
  document.getElementById("speechbubble").innerText ="You're back! I will see to it that you'll never cause trouble again! ";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="witchflower();">Pour potion on witch</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="bubble2();">Im sorry</div>';

  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="none";

  document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="block";
        document.getElementById("option3").style.display ="none";


}


function witchflower() {

  document.getElementById("introtext").innerText = "You've turned the wizard into a flower";

  document.getElementById("gamecontainer").style.backgroundImage = "url('bednflower.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="goodjobtwo();">Was that supposed to happen?</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="goodjobtwo();">Good riddance</div>';


  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
      document.getElementById("option3").style.display ="none";

  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("hint").style.display ="none";
  document.getElementById("box").style.display ="none";
document.getElementById("potion").style.display ="none";
  document.getElementById("hiddenbox").style.display ="none";

}

function goodjobtwo() {

  document.getElementById("gamecontainer").style.backgroundImage = "url('wizardnwitch.png')";
  document.getElementById("speechbubble").innerText ="Good job! You did exactly what I needed you to do. I hated them both after they destroyed my career in potion making ";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="wizardflower2();">Pour potion on wizard too</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="bubble2();">You are evil!</div>';
    document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="();"><a href="witch.html" target="_blank" style="text-decoration: none; color:white;">I hate them too</div>';
  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="none";

  document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="block";
        document.getElementById("option3").style.display ="block";


}

function wizardflower2() {

  document.getElementById("introtext").innerText = "You've turned the wizard into a flower. Looks like you have a lot of gardening to do. ";

  document.getElementById("gamecontainer").style.backgroundImage = "url('bednflowerw.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1();">Can I restart?</div>';
  document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="();"><a href="wizard&witch.html" target="_blank" style="text-decoration: none; color:white;">Awesome</div>';


  document.getElementById("option1").style.display ="block";
    document.getElementById("option2").style.display ="block";
      document.getElementById("option3").style.display ="none";

        document.getElementById("speechbubble").style.display ="block";
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("hint").style.display ="none";
  document.getElementById("box").style.display ="none";
document.getElementById("potion").style.display ="none";
  document.getElementById("hiddenbox").style.display ="none";

}


function gotowitch() {

  document.getElementById("gamecontainer").style.backgroundImage = "url('roomnangry.png')";
  document.getElementById("speechbubble").innerText ="You're back! I will see to it that you'll never cause trouble again! ";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="happy();">Pour cure on flower</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="witchflower();">Pour potion from wizard on witch</div>';

  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="none";

  document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="block";
        document.getElementById("option3").style.display ="none";

}

function happy() {

  document.getElementById("gamecontainer").style.backgroundImage = "url('sonnroom.png')";
  document.getElementById("speechbubble").innerText ="Thank you! You've given us hope and turned me back into a human! Remember, even when the world crumbles around us, we still can thrive and have hope. ";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="();"><a href="flowerhuman.html" target="_blank" style="text-decoration: none; color:white;">Your welcome</div>';

  //visible & hidden
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="block";
  document.getElementById("introtext").style.display ="none";

  document.getElementById("option1").style.display ="block";
  document.getElementById("option2").style.display ="none";
        document.getElementById("option3").style.display ="none";
}
