// <!DOCTYPE html>

// <html>

//     <body>
//         <video id="video1" controls width="980" height="570" autoplay src="img/05-前導動畫/movie.mp4"></video>

//         <canvas id="myCanvas" width="1200" height="800"></canvas>

//         <input class="button" type="button" value="回憶中" onclick="Control('start');">
//     </body>
    

// </html>
//<script src="icon.js"></script>
// var video = document.getElementById("video1");
// const movie_video = new Video();
// movie_video.play = "img/05-前導動畫/movie.mp4";
//背景圖
const BG = new Image();
BG.src = "img/05-前導動畫/movie-bg.png";


//背景圖
const movieBG={
	sx: 0,//圖片的x
	sy: 0,//圖片的y
	sw: 1200,//切割的寬度
	sh: 800,//切割的高度
	dx: 0,//放到畫布的x
	dy: 0,//放到畫布的y
	dw: 900,//放到畫布的圖片寬度
	dh: 600,//放到畫布的圖片高度
	draw: function(){
		if(status.current != status.gameMovie)
            return;
		//ctx.drawImage(圖片, 圖片的x, 圖片的y, 切割的寬度, 切割的高度, 放到畫布的x, 放到畫布的y, 放到畫布的圖片寬度, 放到畫布的圖片高度);
		ctx.drawImage(BG, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);
	}
}
// const movie = {
// 	sx: 0,//圖片的x
// 	sy: 0,//圖片的y
// 	sw: 1200,//切割的寬度
// 	sh: 800,//切割的高度
// 	dx: 110,//放到畫布的x
// 	dy: 180,//放到畫布的y
// 	dw: 980,//放到畫布的圖片寬度
// 	dh: 570,//放到畫布的圖片高度
// 	draw: function(){
// 		if(status.current != status.gameMovie)
//             return;
// 		ctx.drawImage(video, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);
// 	}
// }

		// function Control(x){
		// 	if(x=='start'){
		// 	　document.getElementById("video1").play();
		// 	}
		// }
		
		// var vedioP=false;
		// video.addEventListener('play',videoPlayING, false);
		// function videoPlayING(){
		// 	vedioP=true;
		// }



  //       function draw(){
		// 	bg.draw();
		// 	movie.draw();
		// 	// ctx.drawImage(BG, 0, 0, 1200, 800, 0, 0, 1200, 800);
  //  //          ctx.drawImage(iRemem, 0, 0, 262, 159, 253, 50, 132, 85);
  //  //          ctx.drawImage(iMap, 0, 0, 186, 162, 425, 50, 94, 83);
  //  //          ctx.drawImage(iNote, 0, 0, 175, 180, 570, 50, 88, 90);
            
		// 	// ctx.drawImage(video, 110, 180, 980, 570);


		// }

		// function update(){

		// }

		// function loop(){
		// 	draw();
			
		// 	update();
		// 	requestAnimationFrame(loop);
		// }
		// loop();







		
		//----------------------------連結設定-----------------------------
        // canvas.addEventListener("click", on_click, false);
        // //if the link has been clicked, go to link
        // function on_click(e) {
        //     if (rememB)  {
        //       window.location = iRememlinkText;//農場主人的記憶連結
        //     }
        //     if (mapB)  {
        //       window.location = iMaplinkText;//農場主人的記憶連結
        //     }
        //     if (noteB)  {
        //       window.location = iNotelinkText;//農場主人的記憶連結
        //     }
        // }

        // function drawInfo(){
        	
        // }
        // window.onload=function(){    
        // 	ctx.drawImage(BG, 0, 0, 1200, 800, 0, 0, 1200, 800); 
        // 	remem();      
        //     map();
        //     note();
        // }
		
        