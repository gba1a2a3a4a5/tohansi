const agePage =
document.getElementById("agePage");


const blockedPage =
document.getElementById("blockedPage");


const loadingPage =
document.getElementById("loadingPage");


const galleryPage =
document.getElementById("galleryPage");



const adult =
document.getElementById("adult");


const child =
document.getElementById("child");





// 点击 是

adult.onclick=function(){


agePage.classList.add("hide");


blockedPage.classList.remove("hide");


}







// 点击 否

child.onclick=function(){


agePage.classList.add("hide");


loadingPage.classList.remove("hide");



let text =
document.getElementById("loadingText");


let list=[

"正在搜索插画资源……",

"正在整理内容……",

"正在生成推荐……",

"加载完成"

];


let i=0;



let timer=setInterval(()=>{


text.innerHTML=list[i];


i++;



if(i>=list.length){


clearInterval(timer);



setTimeout(()=>{


loadingPage.classList.add("hide");


galleryPage.classList.remove("hide");


},700);



}


},900);



}