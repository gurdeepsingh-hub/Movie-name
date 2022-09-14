let MenuIcon=['Home','Library','Friends'];
MenuPages();
function MenuPages(){
    MenuIcon.forEach((item) => {
        document.getElementById("MenuPages").innerHTML +=  ' <a href="" class="menuPages"> <div class="menuPages"><img src="./images/'+ item +'.svg" alt="'+ item +' logo" class="iconimg" /><p>'+item+'</p></div></a> ';
    });
}

let navlist = ['Action.jfif','Detective.jfif','Fantasy.jfif','Space.jpg', 'Blockbuster.jpg'];
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
let Posterlist = ['1.jpg','2.jpg','3.jfif','4.webp', '5.jfif','6.jfif','7.webp','8.jfif','9.jfif','10.jfif'];
Posters();
function Posters(){
    Posterlist.forEach((item) => {
        document.getElementById("Posters").innerHTML += `<div class="poster">
            <img src="./images/MoviePoster/`+item+`" alt="`+item.substring(0,item.lastIndexOf('.'))+` image" class="posterImage" />
            <p class="MovieName">`+ item.substring(0,item.lastIndexOf('.'))+`</p>
            <p class="MovieCategory">Fantasy</p>
          </div>`
    });
  }