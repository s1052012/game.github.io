where1X=710;
where1Y=360;
where1Pic=false;

where2X=710;
where2Y=435;
where2Pic=false;

where3X=710;
where3Y=510;
where3Pic=false;

where4X=710;
where4Y=583;
where4Pic=false;

where5X=710;
where5Y=655;
where5Pic=false;

var point1,point2,point3,point4,point5 = false;
//----------------------------連結設定-----------------------------
canvas.addEventListener("mousemove", on_mousemove);
canvas.addEventListener("click", on_click, false);
//if the link has been clicked, go to link
function on_mousemove (ev) {
    let x = ev.x - canvas.getBoundingClientRect().left;
    let y = ev.y - canvas.getBoundingClientRect().top;
    console.log("x:"+x+"y:"+y);
    //-----------------------where1----------------------
    if(where1Pic==false && x>=where1X && x <= (where1X + boxWidth) &&
        y>=where1Y && y<= (where1Y+boxHeight)){
        point1 = true;
    }
    else{
        point1 = false;
    }

    //-----------------------where2----------------------
    if(where2Pic==false && x>=where2X && x <= (where2X + boxWidth) &&
        y>=where2Y && y<= (where2Y+boxHeight)){
        // console.log("where2Move");
        point2 = true;
    }
    else{
         point2 = false;
    }

    //-----------------------where3----------------------
    if(where3Pic==false && x>=where3X && x <= (where3X + boxWidth) &&
        y>=where3Y && y<= (where3Y+boxHeight)){
        console.log("where3Move");
        point3 = true;
    }
    else{
         point3 = false;
    }

    //-----------------------where4----------------------
    if(where4Pic==false && x>=where4X && x <= (where4X + boxWidth) &&
        y>=where4Y && y<= (where4Y+boxHeight)){
        point4 = true;
    }
    else{
         point4 = false;
    }
    //-----------------------where5----------------------
    if(where5Pic==false && x>=where5X && x <= (where5X + boxWidth) &&
        y>=where5Y && y<= (where5Y+boxHeight)){
        point5 = true;
    }
    else{
         point5 = false;
    }
    if(point1 || point2 || point3 || point4 || point5 || point11 || point22 || point33 || point44){
        document.body.style.cursor = "pointer";
    }
    else{
        document.body.style.cursor = "";
    }
      
}

function on_click(ev) {
    let x = ev.x - canvas.getBoundingClientRect().left;
    let y = ev.y - canvas.getBoundingClientRect().top;
    if(where1Pic==false && x>=where1X && x <= (where1X + boxWidth) &&
        y>=where1Y && y<= (where1Y+boxHeight)){
        where1Pic = where2Pic = where3Pic = where4Pic = where5Pic = false;
        where1Pic=true;
        console.log("click");
    }
    else if(where2Pic==false && x>=where2X && x <= (where2X + boxWidth) &&
        y>=where2Y && y<= (where2Y+boxHeight)){
        where1Pic = where2Pic = where3Pic = where4Pic = where5Pic = false;
        where2Pic=true;
        console.log("click");
    }
    else if(where3Pic==false && x>=where3X && x <= (where3X + boxWidth) &&
        y>=where3Y && y<= (where3Y+boxHeight)){
        where1Pic = where2Pic = where3Pic = where4Pic = where5Pic = false;
        where3Pic=true;
        console.log("click");
    }
    else if(where4Pic==false && x>=where4X && x <= (where4X + boxWidth) &&
        y>=where4Y && y<= (where4Y+boxHeight)){
        where1Pic = where2Pic = where3Pic = where4Pic = where5Pic = false;
        where4Pic=true;
        console.log("click");
    }
    else if(where5Pic==false && x>=where5X && x <= (where5X + boxWidth) &&
        y>=where5Y && y<= (where5Y+boxHeight)){
        where1Pic = where2Pic = where3Pic = where4Pic = where5Pic = false;
        where5Pic=true;
        console.log("click");
    }
    
}

const where1Picture={
    draw: function(){
        ctx.drawImage(tick, 0, 0, 95, 105, where1X, where1Y, boxWidth, boxHeight);
    }
}
const where2Picture={
    draw: function(){
        ctx.drawImage(tick, 0, 0, 95, 105, where2X, where2Y, boxWidth, boxHeight);
    }
}
const where3Picture={
    draw: function(){
        ctx.drawImage(tick, 0, 0, 95, 105, where3X, where3Y, boxWidth, boxHeight);
    }
}
const where4Picture={
    draw: function(){
        ctx.drawImage(tick, 0, 0, 95, 105, where4X, where4Y, boxWidth, boxHeight);
    }
}
const where5Picture={
    draw: function(){
        ctx.drawImage(tick, 0, 0, 95, 105, where5X, where5Y, boxWidth, boxHeight);
    }
}