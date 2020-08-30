function add_card(title,id,text) {
    return ` <div class="card" data-title="${title}" data-id="${id}" data-text="${text}">
    <h1>${title}</h1>
  
</div>`
}


function ShowMenu(menu_id,title_id,text_id,title,text) {
    menu_id.style.bottom=-100+"px"
    title_id.value=title
    text_id.value=text
}

function HideMenu(id) {
    id.style.bottom=-2000+"px"
}
function ShowToast(id,text_id,message,type) {
    if(type=="error"){
        id.style.backgroundColor="tomato"
    }else{
        id.style.backgroundColor="rgb(62, 156, 103)"
    }
    
    text_id.innerHTML=message
    id.style.left=0+"px"
    setTimeout(()=>{
HideToast(id)
    },3000)
}
function HideToast(id) {
    id.style.left=-2000+"px"
}

function updateBTN(btns,fun) {
    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener("click",e=>{
            fun({id:btns[i].getAttribute("data-id"),text:btns[i].getAttribute("data-text"),title:btns[i].getAttribute("data-title")})
        })
    }
}

function updateDATA(data,state){
   
fetch("http://localhost:3000/update",{
    method:"put",
    headers:{"content-type":"application/json"}
    ,body:JSON.stringify({id:data.id,title:data.title,text:data.text})
}).then(res=>res.json()).then(res=>{
    state(200)
})
}
function deleteDATA(id,state){
   
    fetch("http://localhost:3000/delete",{
        method:"delete",
        headers:{"content-type":"application/json"}
        ,body:JSON.stringify({id:id})
    }).then(res=>res.json()).then(res=>{
        state(200)
    })
    }
function Add_NEW(title,text,state){
    fetch("http://localhost:3000/add",{
        method:"post",
        headers:{"content-type":"application/json"}
        ,body:JSON.stringify({title:title,text:text})
    }).then(res=>res.json()).then(res=>{
        state(200)
    })
    }
function view(id) {
    id.style.left=20+"px"
}
function hide(id) {
    id.style.left=-2000+"px"
}
function ShowMenu2(menu_id) {
    menu_id.style.bottom=-100+"px"
   
}

function HideMenu2(id) {
    id.style.bottom=-2000+"px"
}