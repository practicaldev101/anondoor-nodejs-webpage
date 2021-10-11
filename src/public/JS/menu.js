var flag = false;


function showMenu(){
    let objective = document.getElementsByClassName("nav-bar__list--mobile")[0];
    let close = document.getElementById("menu");
    if(flag != true){
        close.className = "nav-bar__icon ri-close-line";
        close.style.display = "block";
        objective.style.display = "block";
        flag = true;
    }
    else{
        close.className = "nav-bar__icon ri-menu-line";
        close.style.display = "inline";
        objective.style.display = "none";
        flag = false;
    }
}