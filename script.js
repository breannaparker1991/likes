
// add1(0)-- in HTML
// var likes = [3, 9, 15];
// var spans = [
//   document.querySelector("#count1"),
//   document.querySelector("#count2"),
//   document.querySelector("#count3")
// ];

// function add(id){
//   likes [id]++;
//   spans[id].innerHTML = likes[id] + "like(s)";
// }





var currentcount1 = 3
var countadd1 = document.querySelector("#count1");

function add1(){
  currentcount1++;
  countadd1.innerText = currentcount1 + " like(s)"
  return(currentcount1);
  }

var currentcount2 = 12
var countadd2 = document.querySelector("#count2");

function add2(){
  currentcount2++;
  countadd2.innerText = currentcount2 + " like(s)"
  return(currentcount2);
  }

var currentcount3 = 15
var countadd3 = document.querySelector("#count3");

function add3(){
  currentcount3++;
  countadd3.innerText = currentcount3 + " like(s)"
  return(currentcount3);
}