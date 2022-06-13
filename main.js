// COMPROBAR FUNCION parseInt();

let mainPJ = document.getElementById('img-mainpj');
let topMainPJ = mainPJ.style.top;
let leftMainPJ = mainPJ.style.left;

posX = 45;
posY = 65;
speed = 5;

mainPJ.style.transform = "translateX("+posX+"px)";
mainPJ.style.transform = "translateY("+posY+"px)";


document.addEventListener('keydown', () => {
    let type = event.code;
    if (type == "ArrowUp") {
        posY -= speed;
        mainPj.style.top= posY.toString();
    } else if (type == "ArrowLeft") {
        posX -= speed;
        mainPj.style.left= posX.toString();
    } else if (type == "ArrowDown") {
        posY +=speed;
        mainPj.style.top= posY.toString();
    } else if (type == "ArrowRight") {
        posX += speed;
        mainPj.style.left= posX.toString();
    }; 
});