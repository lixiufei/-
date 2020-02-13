//获得主界面
var mainDiv=document.getElementById("maindiv");
//获得开始界面
var startdiv=document.getElementById("startdiv");

/*
创建子弹类
*/
function bullet(X,Y,sizeX,sizeY,imagesrc){
this.bulletX=X;
this.bulletY=Y;
this.bulletimage=null;
this.bulletattach=1;
this.bulletsizeX=sizeX;
this.bulletsizeY=sizeY;
//行为
/*
移动行为
*/
this.bulletmove=function(){
this.bulletimage.style.top=this.bulletimage.offsetTop-20+"px";
}
this.init=function(){
this.bulletimage=document.createElement("img");
this.bulletimage.style.left= this.bulletX+"px";
this.bulletimage.style.top= this.bulletY+"px";
this.bulletimage.src=imagesrc;
mainDiv.appendChild(this.bulletimage);
}
this.init();
}

/*
创建单行子弹类
*/
function oddbullet(X,Y){
bullet.call(this,X,Y,6,14,"image/bullet1.png");
}

/*
子弹对象数组
*/
var bullets=[];
var mark=0;
var mark1=0;
var backgroundPositionY=0;
/*
开始函数
*/
function start(){
mainDiv.style.backgroundPositionY=backgroundPositionY+"px";
backgroundPositionY+=0.5;
if(backgroundPositionY==568){
backgroundPositionY=0;
}

/*
创建子弹
*/
if(mark%5==0){
bullets.push(new oddbullet(parseInt(selfplan.imagenode.style.left)+31,parseInt(selfplan.imagenode.style.top)-10));
}

/*
移动子弹
*/
var bulletslen=bullets.length;
for(var i=0;i<bulletslen;i++){
bullets[i].bulletmove();
/*
如果子弹超出边界,删除子弹
*/
if(bullets[i].bulletimage.offsetTop<0){
mainDiv.removeChild(bullets[i].bulletimage);
bullets.splice(i,1);
bulletslen--;
}
}

/*
开始游戏按钮点击事件
*/
var set;
function begin(){
startdiv.style.display="none";
mainDiv.style.display="block";
selfplan.imagenode.style.display="block";
scorediv.style.display="block";
/*
调用开始函数
*/
set=setInterval(start,20);
}


