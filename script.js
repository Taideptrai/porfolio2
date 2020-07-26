var progress = document.getElementsByTagName("progress")
progress = [...progress]
console.log(progress)
window.onload = function(){loadHTML()}
  function loadHTML(){
  progress.map(item=>{
    var value = item.value;
    var per = value/200;
    item.value = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (item.value>=value) {
        clearInterval(id);
      } else {
        item.value+=per;
      }
    }
  })
};



var about = document.getElementById("About")
about.addEventListener("click",function(){
var element = document.getElementsByClassName("main-body")[0]
const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y-40,
  behavior: 'smooth'
});
  loadHTML();
  resetCircleSkill()
})

function resetCircleSkill(){
  var circle1 = document.getElementsByClassName("one")[0]
  var circle2 = document.getElementsByClassName("two")[0]
  var circle3 = document.getElementsByClassName("three")[0]
       circle1.classList.remove("one");
       setTimeout(function(){circle1.classList.add("one");},10)
      circle2.classList.remove("two");
       setTimeout(function(){circle2.classList.add("two");},10)
      circle3.classList.remove("three");
       setTimeout(function(){circle3.classList.add("three");},10)
}

document.getElementById("clickHere").addEventListener("click",function(){
var element = document.getElementsByClassName("main-body")[0]
const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y-40,
  behavior: 'smooth'
});
  loadHTML();
  resetCircleSkill()
})

document.getElementById("Porfolio-Navigation").addEventListener("click",function(){
var element = document.getElementsByClassName("Porfolio")[0]
const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y-39,
  behavior: 'smooth'
});
  loadHTML();
  resetCircleSkill()
})

document.getElementById("home-navigation").addEventListener("click",function(){
const y = 0;
window.scroll({
  top: y,
  behavior: 'smooth'
});
  loadHTML();
  resetCircleSkill()
})

document.getElementById("Contact-Navigation").addEventListener("click",function(){
var element = document.getElementsByClassName("Contact")[0]
const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y,
  behavior: 'smooth'
});
  loadHTML();
  resetCircleSkill()
})


document.getElementById("Exprience").addEventListener("click",function(){
var element = document.getElementsByClassName("TimelinePart")[0]
const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y-40,
  behavior: 'smooth'
});
  loadHTML();
  resetCircleSkill();
  var myTimeLine = document.getElementById("myTimeLine")
  myTimeLine.classList.add("effectMyTimeLine");
   timeline1.style.opacity = 0
   timeline2.style.opacity = 0
   timeline3.style.opacity = 0
   timeline4.style.opacity = 0
   timeline5.style.opacity = 0
   timeline6.style.opacity = 0
  setTimeout(function(){myTimeLine.classList.remove("effectMyTimeLine")},1000)
  setTimeout(function(){HideShowTimeline()},1000);
})

function HideShowTimeline(){ 
   var timeline1 = document.getElementById("timeline1");
   var timeline2 = document.getElementById("timeline2");
   var timeline3 = document.getElementById("timeline3");
   var timeline4 = document.getElementById("timeline4");
   var timeline5 = document.getElementById("timeline5");
   var timeline6 = document.getElementById("timeline6");
    function hideShowTimeLine(item){
      item.classList.add("hide");
      item.style.opacity = 1;
      setTimeout(function(){
        item.classList.remove("hide");
        
        },1000)
    }
  setTimeout(function(){hideShowTimeLine(timeline1)},200)
  setTimeout(function(){hideShowTimeLine(timeline2)},400)
  setTimeout(function(){hideShowTimeLine(timeline3)},600)
  setTimeout(function(){hideShowTimeLine(timeline4)},800)
  setTimeout(function(){hideShowTimeLine(timeline5)},900)
  setTimeout(function(){hideShowTimeLine(timeline6)},1000)
}