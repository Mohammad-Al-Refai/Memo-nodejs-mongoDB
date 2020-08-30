let LIST=document.getElementById("cards") ///card list
let MENU=document.getElementById("menu_view")/// card view
let MENU2=document.getElementById("menu_view2")/// menu add
let CARDS=document.getElementsByClassName("card")////it is return set of card
let CLOSE=document.getElementById("close")
let MESSAGE=document.getElementById("message")
let TOAST=document.getElementById("toast")
let TITLE=document.getElementById("title")
let TEXT2=document.getElementById("data2")
let TITLE2=document.getElementById("title2")
let UPDATE=document.getElementById("update")/// button for update data of card
let TEXT=document.getElementById("data")
let ADD=document.getElementById("add")////it is for show MENU add
let ADD_NEW_BTN=document.getElementById("add_new")////it is for add new card and send to API localhost
let CLOSE_BTN=document.getElementById("close_btn")
let DELETE=document.getElementById("delete")
let ID=0
CLOSE.addEventListener("click",e=>{
    HideMenu(MENU)
})


DownloadCards()
ShowToast(TOAST,MESSAGE,"Loading...","ok")






UPDATE.addEventListener("click",e=>{
    updateDATA({id:ID,title:TITLE.value,text:TEXT.value},(state)=>{
if(state==200){
    ShowToast(TOAST,MESSAGE,"Updated","ok")
    DownloadCards()
    HideMenu(MENU)
}
    })
    
})
DELETE.addEventListener("click",e=>{
   deleteDATA(ID,(state)=>{
if(state==200){
    ShowToast(TOAST,MESSAGE,"Deleted","ok")
    DownloadCards()
    HideMenu(MENU)
}
    })
    
})
function DownloadCards() {  
LIST.innerHTML=""
fetch("http://localhost:3000").then(data=>data.json()).then(data=>{
   for(let i=0;i<data.length;i++){
    LIST.innerHTML+=add_card(data[i].title,data[i].id,data[i].text)
    
   }
   updateBTN(CARDS,(data)=>{
       ShowMenu(MENU,TITLE,TEXT,data.title,data.text)
       ID=data.id
   })
})
}

ADD_NEW_BTN.addEventListener("click",e=>{
    Add_NEW(TITLE2.value,TEXT2.value,state=>{
        if(state==200){
            ShowToast(TOAST,MESSAGE,"added","ok")
            CLOSE_BTN.click()
            DownloadCards()
            TITLE2.value=""
            TEXT2.value=""
        }
    })
})

ADD.addEventListener("click",e=>{
    ShowMenu2(MENU2)
    hide(ADD)
    view(CLOSE_BTN)
   
})
CLOSE_BTN.addEventListener("click",e=>{
    view(ADD)
    hide(CLOSE_BTN)
    HideMenu2(MENU2)
})
