
        
let set = false;
let close = false;
//set 
const music_image = new Image();
music_image.src = "img/00-遊戲元件/music.png";
const setBG_image = new Image();
setBG_image.src = "img/05-設定/set-bg.png";
const setBar_image = new Image();
setBar_image.src = "img/05-設定/set-bar.png";
const setClose_image = new Image();
setClose_image.src = "img/05-設定/set-close.png";
//載入音效
const gameStart_audio = new Audio();
gameStart_audio.src = "img/05-設定/音效_bgm/03關卡一開始.mp3";
const index_audio = new Audio();
index_audio.src = "img/05-設定/音效_bgm/01背景音效主遊戲(包含地圖).mp3";
const yes_audio = new Audio();
yes_audio.src = "img/05-設定/音效_bgm/04叮.wav";
const no_audio = new Audio();
no_audio.src = "img/05-設定/音效_bgm/05咚(備).wav";



const music = {
    sx: 0,
    sy: 0,
    sw: 129,
    sh: 129,
    dx: 27,
    dy: 545,
    dw: 25.8,
    dh: 25.8,
    draw:function(){
        ctx.drawImage(music_image,this.sx,this.sy,this.sw,this.sh,this.dx,this.dy,this.dw,this.dh);
    }

}
const setBG = {
    sx: 0,
    sy: 0,
    sw: 1540,
    sh: 877,
    dx: 168,
    dy: 150,
    dw: 550,
    dh: 313.2,
    draw:function(){
        ctx.drawImage(setBG_image,this.sx,this.sy,this.sw,this.sh,this.dx,this.dy,this.dw,this.dh);
    }
}
const setClose = {
    sx: 0,
    sy: 0,
    sw: 75,
    sh: 75,
    dx: 675,
    dy: 165,
    dw: 25,
    dh: 25,
    draw:function(){
        ctx.drawImage(setClose_image,this.sx,this.sy,this.sw,this.sh,this.dx,this.dy,this.dw,this.dh);
    }
}
//min=332;max=613
const setBar = {
    sx: 0,
    sy: 0,
    sw: 180,
    sh: 180,
    dx: 332,
    dy: 223,
    dw: 60,
    dh: 60,
    min: 332,
    max: 613,
    draw:function(){
        ctx.drawImage(setBar_image,this.sx,this.sy,this.sw,this.sh,this.dx,this.dy,this.dw,this.dh);
    }
}
const setBar_BG = {
    sx: 0,
    sy: 0,
    sw: 180,
    sh: 180,
    dx: 532,
    dy: 336,
    dw: 60,
    dh: 60,
    min: 332,
    max: 613,
    draw:function(){
        ctx.drawImage(setBar_image,this.sx,this.sy,this.sw,this.sh,this.dx,this.dy,this.dw,this.dh);
    }
}
