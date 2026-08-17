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
// 图片 / 视频点击预览
// =================

const preview =
document.getElementById("preview");


const previewImage =
document.getElementById("previewImage");


const previewVideo =
document.getElementById("previewVideo");


function openPreview(type, src){

preview.style.display="flex";

if(type==="image"){

previewVideo.pause();

previewVideo.removeAttribute("src");

previewVideo.classList.remove("show");

previewImage.src=src;

previewImage.classList.add("show");

}else{

previewImage.removeAttribute("src");

previewImage.classList.remove("show");

previewVideo.src=src;

previewVideo.classList.add("show");

previewVideo.play().catch(()=>{});

}

}


document.querySelectorAll(".gallery img").forEach(image=>{

image.onclick=function(){

openPreview("image",this.src);

};

});


document.querySelectorAll(".gallery video").forEach(video=>{

video.onclick=function(){

openPreview("video",this.currentSrc || this.src);

};

});


// 点击黑色背景关闭

preview.onclick=function(e){

if(e.target===preview){

preview.style.display="none";

previewVideo.pause();

previewVideo.removeAttribute("src");

previewImage.removeAttribute("src");

previewVideo.classList.remove("show");

previewImage.classList.remove("show");

}

};


// =================
// 图片 / 视频加载动画
// =================

const galleryMedia =
document.querySelectorAll(".image-card img, .image-card video");


galleryMedia.forEach(media=>{

const card = media.closest(".image-card");


function loaded(){

media.classList.add("loaded");

}


// 图片

if(media.tagName==="IMG"){

if(media.complete && media.naturalWidth>0){

loaded();

}

media.onload=loaded;

}


// 视频

if(media.tagName==="VIDEO"){

media.onloadeddata=function(){

loaded();

media.play().catch(()=>{});

};

if(media.readyState>=2){

loaded();

media.play().catch(()=>{});

}

}

});
