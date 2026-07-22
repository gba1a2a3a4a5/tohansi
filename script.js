const yes =
document.getElementById("yes");


const no =
document.getElementById("no");


const welcome =
document.getElementById("welcome");


const loading =
document.getElementById("loading");


const blocked =
document.getElementById("blocked");


const gallery =
document.getElementById("gallery");



yes.onclick=function(){


welcome.classList.add("hidden");


blocked.classList.remove("hidden");


}



no.onclick=function(){


welcome.classList.add("hidden");


loading.classList.remove("hidden");



let text =
document.getElementById("loadingText");


let words=[

"正在搜索插画资源...",

"正在分析风格...",

"正在整理作品集...",

"加载完成"

];


let i=0;


let timer=setInterval(()=>{


text.innerHTML=words[i];


i++;


if(i>=words.length){


clearInterval(timer);



setTimeout(()=>{


loading.classList.add("hidden");


gallery.classList.remove("hidden");


},800);


}


},900);



}




// 图片查看

const imgs =
document.querySelectorAll(".grid img");


const viewer =
document.getElementById("viewer");


const big =
document.getElementById("bigImage");



imgs.forEach(img=>{


img.onclick=function(){


viewer.style.display="flex";


big.src=this.src;


}


});



viewer.onclick=function(){


viewer.style.display="none";


}