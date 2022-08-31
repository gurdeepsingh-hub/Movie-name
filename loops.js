let MenuIcon=['Home','Library','Friends'];
MenuPages();
function MenuPages(){
    MenuIcon.forEach((item) => {
        document.getElementById("MenuPages").innerHTML +=  ' <a href="" class="menuPages"> <div class="menuPages"><img src="./images/'+ item +'.svg" alt="'+ item +' logo" class="iconimg" /><p>'+item+'</p></div></a> ';
    });
}

let navlist = ['action.jfif','Detective.jfif','Fantasy.jfif','Space.jpg', 'Blockbuster.jpg'];
navListItems();
function navListItems(){
    navlist.forEach((item) => {
        document.getElementById("navListItem").innerHTML += ` <li class="navListItem">
              <a href="" class="navListItem">
                <img
                  class="navListImage"
                  src="./images/navigationList/`+ item +`"
                  alt="`+item.substring(0,item.lastIndexOf('.'))+` image"
                />
                <p class="navListItemText">`+ item.substring(0,item.lastIndexOf('.'))+`</p>
              </a>
            </li>`
    });
    document.getElementById("navListItem").innerHTML += `<a href="" class="navListItem CreateList" onclick="AddToNavList()">
              <li class="navListItem">
                <span class="plus">+</span>
                <p class="CLB">Create List</p>
              </li>`
}

AddToNavList();
function AddToNavList(){
    navlist.push('new.jpg');
    console.log(navlist);
}
