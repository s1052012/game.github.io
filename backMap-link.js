const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const leftmap_image = new Image();
leftmap_image.src = "img/00-遊戲元件/leftmap.png";//返回地圖(向左)
//農場地圖連接
var maplinkText="07-map.html";
var mapLeftX=65;
var mapLeftY=510;
var mapLeftWidth=99;
var mapLeftHeight=25;
var mapLeftInLink = false;

const rightmap_image = new Image();
rightmap_image.src = "img/00-遊戲元件/rightmap.png";//返回地圖(向右)
var mapRightX=685;
var mapRightY=473;
var mapRightWidth=99;
var mapRightHeight=25;
var mapRightInLink = false;


canvas.addEventListener("mousemove", on_mousemove);
canvas.addEventListener("click", on_click, false);
//check if the mouse is over the link and change cursor style
function on_mousemove (ev) {
      let x = ev.x - canvas.getBoundingClientRect().left;
      let y = ev.y - canvas.getBoundingClientRect().top;
      //-----------------------返回地圖(向左)連結----------------------
      if(x>=mapLeftX && x <= (mapLeftX + mapLeftWidth) &&
         y>=mapLeftY && y<= (mapLeftY+mapLeftHeight)){
          //console.log("moveApple");
          document.body.style.cursor = "pointer";
          mapLeftInLink=true;
      }
      else{
          document.body.style.cursor = "";
          mapLeftInLink=false;
      }
      //-----------------------返回地圖(向右)連結----------------------
      if(x>=mapRightX && x <= (mapRightX + mapRightWidth) &&
         y>=mapRightY && y<= (mapRightY+mapRightHeight)){
          //console.log("moveApple");
          document.body.style.cursor = "pointer";
          mapRightInLink=true;
      }
      else{
          document.body.style.cursor = "";
          mapRightInLink=false;
      }

}

//if the link has been clicked, go to link
function on_click(e) {
    if (mapLeftInLink)  {
      window.location = maplinkText;//農場主人的記憶連結
    }
    if (mapRightInLink)  {
      window.location = maplinkText;//農場主人的記憶連結
    }
}