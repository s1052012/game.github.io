const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


//農場主人的記憶icon
const iRemem = new Image();
iRemem.src = "img/07-農場地圖/map-icon10.png";
var iRememlinkText="05-movie.html";
//農場地圖icon
const iMap = new Image();
iMap.src = "img/07-農場地圖/map-icon20.png";
var iMaplinkText="07-map.html";
//筆記本icon
const iNote = new Image();
iNote.src = "img/07-農場地圖/map-icon30.png";
var iNotelinkText="12-note.html";

let rememB = false;
//play hover效果  //------------------------農場主人的記憶-------------------------------
function remem(){
        //ctx.drawImage(圖片, 圖片的x, 圖片的y, 切割的寬度, 切割的高度, 放到畫布的x, 放到畫布的y, 放到畫布的圖片寬度, 放到畫布的圖片高度);
    ctx.drawImage(iRemem, 0, 0, 262, 159, 253, 50, 132, 85);
    canvas.addEventListener('mousemove',function(e){
        let playX = e.clientX - canvas.getBoundingClientRect().left;
        let playY = e.clientY - canvas.getBoundingClientRect().top;
        if(playX>253 && playX<385 && playY>50 && playY<140){
             console.log("rememMve");
            rememB = true;
        }
        else{
            rememB = false;
        }
        iRemem.src = rememB ? "img/07-農場地圖/map-icon11.png" : "img/07-農場地圖/map-icon10.png";
        canvas.style.cursor = rememB ? "pointer" : "unset";

        drawInfo();
    });

}

let mapB = false;
//play hover效果
function map(){
        //ctx.drawImage(圖片, 圖片的x, 圖片的y, 切割的寬度, 切割的高度, 放到畫布的x, 放到畫布的y, 放到畫布的圖片寬度, 放到畫布的圖片高度);
    ctx.drawImage(iMap, 0, 0, 186, 162, 425, 50, 94, 83);
    canvas.addEventListener('mousemove',function(e){
        let playX = e.clientX - canvas.getBoundingClientRect().left;
        let playY = e.clientY - canvas.getBoundingClientRect().top;
        //------------------------地圖-------------------------------
        if(playX>425 && playX<520 && playY>50 && playY<140){
             console.log("mapMove");
            mapB = true;
        }
        else{
            mapB = false;
        }
        iMap.src = mapB ? "img/07-農場地圖/map-icon21.png" : "img/07-農場地圖/map-icon20.png";
        canvas.style.cursor = mapB ? "pointer" : "unset";
        //------------------------筆記本-------------------------------
        drawInfo();
    });

}


let noteB = false;
//play hover效果
function note(){
        //ctx.drawImage(圖片, 圖片的x, 圖片的y, 切割的寬度, 切割的高度, 放到畫布的x, 放到畫布的y, 放到畫布的圖片寬度, 放到畫布的圖片高度);
    ctx.drawImage(iNote, 0, 0, 175, 180, 570, 50, 88, 90);
    canvas.addEventListener('mousemove',function(e){
        let playX = e.clientX - canvas.getBoundingClientRect().left;
        let playY = e.clientY - canvas.getBoundingClientRect().top;
        //------------------------地圖-------------------------------
        if(playX>570 && playX<660 && playY>50 && playY<140){
             console.log("mapMove");
            noteB = true;
        }
        else{
            noteB = false;
        }
        iNote.src = noteB ? "img/07-農場地圖/map-icon31.png" : "img/07-農場地圖/map-icon30.png";
        canvas.style.cursor = noteB ? "pointer" : "unset";
        //------------------------筆記本-------------------------------
        drawInfo();
    });

}


