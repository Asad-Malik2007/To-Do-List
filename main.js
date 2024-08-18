const inputEl=document.getElementById("input-el");
const infoEl=document.getElementById("info-el");
const inputBtn=document.querySelector("#input-btn");
const deleteBtn=document.querySelector("#delete-btn");
const deleteAllBtn=document.querySelector("#delete-all-btn");
let ulEl=document.querySelector(".ul-el");
let myLeads=[]
inputBtn.addEventListener("click", function(){
    
    if (inputEl.value===""){
      infoEl.innerText="Please Enter Item!!"
    setTimeout(function(){
    infoEl.innerText=""
    
  },1000)
    }
    else{
      myLeads.push(inputEl.value);
    renderLeads()
    inputEl.value=""
    }
});

deleteBtn.addEventListener("click",function(){
    myLeads.pop()
    renderLeads()
})

deleteAllBtn.addEventListener("click",function(){
  infoEl.innerText="Please Double Click!"
  
  setTimeout(function(){
    infoEl.innerText=""
    
  },700)
});
deleteAllBtn.addEventListener("dblclick",function(){
    myLeads=[]
    renderLeads()
});
function renderLeads() {
let listItems=""
for (i=0; i<myLeads.length; i++){
   listItems+="<li class='links'>" +myLeads[i] +"</li>";
   
   // We can also use template strings instead of this long line
   
  //listItems+="<li><a class='links' target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>"
  }
ulEl.innerHTML=listItems

const liItems= document.querySelectorAll(".links")
liItems.forEach(function(li){
  li.addEventListener("click",function(){
    li.style.color="gray"
    li.style.textDecoration = "line-through";
  })
})
}

