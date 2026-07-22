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

// =================
// 图片点击预览
// =================


const images =
document.querySelectorAll(".gallery img");


const preview =
document.getElementById("preview");


const previewImage =
document.getElementById("previewImage");





images.forEach(image=>{


image.onclick=function(){


preview.style.display="flex";


previewImage.src=this.src;



}


});





// 点击黑色背景关闭


preview.onclick=function(e){


if(e.target!==previewImage){


preview.style.display="none";


}


}