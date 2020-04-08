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
        document.getElementById("speechbubble").style.display ="none";

        //Background image


            document.getElementById("gamecontainer").style.backgroundImage = "url('library.png')";




        //Button
        document.getElementById("option1").outerHTML = '  <div class="button" id="option1" onclick="library(); catmeow(); audio();">Look from higher ground</div>';
    document.getElementById("option2").outerHTML = '<div class="button" id="option2" onclick="toplib(); audio(); " style="display:block;">Look at Library</div>';
    document.getElementById("option3").outerHTML = '<div class="button" id="option3" onclick="tablelib(); audio(); " style="display:block;">Look at Desk</div>';


      //visible & hidden

      document.getElementById("introtext").style.display ="none";
      document.getElementById("catbox").style.display ="none";
        document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="block";
      document.getElementById("option3").style.display ="block";
        document.getElementById("hiddenbox").style.display ="none";

      //LET THERE BE MUSIC

}



function library(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('library.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1();">Back</div>';


  //visible & hidden
document.getElementById("hint").style.display ="block";
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
            document.getElementById("hiddenbox").style.display ="none";
}

function toplib(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('toplib.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1();">Back</div>';

  //visible & hidden
document.getElementById("hint").style.display ="block";
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
            document.getElementById("hiddenbox").style.display ="block";
}

function tablelib(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('tablelib.png')";
  document.getElementById("option1").outerHTML = '<div class="button" id="option1" onclick="page1();">Back</div>';

  //visible & hidden
document.getElementById("hint").style.display ="block";
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="none";
    document.getElementById("option1").style.display ="block";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
              document.getElementById("hiddenbox").style.display ="none";
}

function riddle(){
      document.getElementById("gamecontainer").style.backgroundImage = "url('booknlib1.png')";


  //visible & hidden
document.getElementById("hint").style.display ="none";
  document.getElementById("box").style.display ="none";
  document.getElementById("speechbubble").style.display ="none";
  document.getElementById("introtext").style.display ="block";
    document.getElementById("option1").style.display ="none";
      document.getElementById("option2").style.display ="none";
            document.getElementById("option3").style.display ="none";
              document.getElementById("hiddenbox").style.display ="none";
}
