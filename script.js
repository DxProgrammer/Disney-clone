const slider = document.getElementById("slider");
const prebtn=document.getElementById("prebtn")
const nxtbtn=document.getElementById("nxtbtn")
var no = 1;
setInterval(changeImage, 3000)
prebtn.addEventListener('click',function(){
    prebtn.innerHTML=no;
    no=no-1;
    if(no==0)
    {
        no=5;
    }

})
function changeImage() {
    slider.setAttribute("src", "image/"+no + ".PNG")
    no = no + 1;
    if (no == 6) {
        no = 1;
    }
   
}
const nxt = document.getElementById("nxt")
nxt.addEventListener('click', function () {
    window.scrollBy(100,0);
})
const pre = document.getElementById("pre")
pre.addEventListener('click', function () {
    window.scrollTo(-100,0);
})