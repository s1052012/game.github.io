const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//打勾圖
const tick = new Image();
tick.src = "img/12-記事本/n-3infe-1tick.png";
const ok = new Image();
ok.src = "img/12-記事本/n-3infe-1tick.png";
boxWidth=42;
boxHeight=42;

who1X=300;
who1Y=310;
who1Pic=false;

who2X=300;
who2Y=400;
who2Pic=false;

who3X=300;
who3Y=490;
who3Pic=false;

who4X=300;
who4Y=580;
who4Pic=false;

var point11,point22,point33,point44 = false;
//----------------------------連結設定-----------------------------
canvas.addEventListener("mousemove", on_mousemove);
canvas.addEventListener("click", on_click, false);
//if the link has been clicked, go to link
function on_mousemove (ev) {
    let x = ev.x - canvas.getBoundingClientRect().left;
    let y = ev.y - canvas.getBoundingClientRect().top;
    //-----------------------who1----------------------
    if(who1Pic==false && x>=who1X && x <= (who1X + boxWidth) &&
        y>=who1Y && y<= (who1Y+boxHeight)){
        point11 = true;
    }
    else{
        point11 = false;
    }

    //-----------------------who2----------------------
    if(who2Pic==false && x>=who2X && x <= (who2X + boxWidth) &&
        y>=who2Y && y<= (who2Y+boxHeight)){
        // console.log("who2Move");
        point22 = true;
    }
    else{
        point22 = false;
    }

    //-----------------------who3----------------------
    if(who3Pic==false && x>=who3X && x <= (who3X + boxWidth) &&
        y>=who3Y && y<= (who3Y+boxHeight)){
        console.log("who3Move");
        point33 = true;
    }
    else{
        point33 = false;
    }

    //-----------------------who4----------------------
    if(who4Pic==false && x>=who4X && x <= (who4X + boxWidth) &&
        y>=who4Y && y<= (who4Y+boxHeight)){
        point44 = true;
    }
    else{
        point44 = false;
    }
    
    
      
}

function on_click(ev) {
    let x = ev.x - canvas.getBoundingClientRect().left;
    let y = ev.y - canvas.getBoundingClientRect().top;
    if(who1Pic==false && x>=who1X && x <= (who1X + boxWidth) &&
        y>=who1Y && y<= (who1Y+boxHeight)){

        who1Pic = who2Pic = who3Pic = who4Pic = false;
        who1Pic=true;
        console.log("click");
    }
    else if(who2Pic==false && x>=who2X && x <= (who2X + boxWidth) &&
        y>=who2Y && y<= (who2Y+boxHeight)){

        who1Pic = who2Pic = who3Pic = who4Pic = false;
        who2Pic=true;
        console.log("click");
    }
    else if(who3Pic==false && x>=who3X && x <= (who3X + boxWidth) &&
        y>=who3Y && y<= (who3Y+boxHeight)){

        who1Pic = who2Pic = who3Pic = who4Pic = false;
        who3Pic=true;
        console.log("click");
    }
    else if(who4Pic==false && x>=who4X && x <= (who4X + boxWidth) &&
        y>=who4Y && y<= (who4Y+boxHeight)){

        who1Pic = who2Pic = who3Pic = who4Pic = false;
        who4Pic=true;
        console.log("click");
    }
    
}

const who1Picture={
    draw: function(){
        ctx.drawImage(tick, 0, 0, 95, 105, who1X, who1Y, boxWidth, boxHeight);
    }
}
const who2Picture={
    draw: function(){
        ctx.drawImage(tick, 0, 0, 95, 105, who2X, who2Y, boxWidth, boxHeight);
    }
}
const who3Picture={
    draw: function(){
        ctx.drawImage(tick, 0, 0, 95, 105, who3X, who3Y, boxWidth, boxHeight);
    }
}
const who4Picture={
    draw: function(){
        ctx.drawImage(tick, 0, 0, 95, 105, who4X, who4Y, boxWidth, boxHeight);
    }
}