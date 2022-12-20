
let index = 1;
const min = 1;
const max = 60;

let container = document.querySelector(".container");
let imgURL;
let img;

let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');

window.onload = function () {

    imgURL = `/utility-img/ALTIS/360EXT_1_18_${index}.png`;

    // 建立一個img的DOM
    img = document.createElement("img");

    // 將新增的DOM加入屬性
    img.setAttribute("src", imgURL);

    // 將新增的DOM append至 container標籤內
    container.append(img);

    let flag = false;
    let stop;

    btnLeft.addEventListener("click", function (item) {
        console.log(item.target);
        if (index > min) {
            index--;
        } else {
            index = max;
        }
        setImg();
        
    });




    btnRight.addEventListener("click", function (item) {
        console.log(item.target);
        if (index < max) {
            index++;
        } else {
            index = min;
        }

        setImg();

    });




}

function setImg() {

    imgURL = `/utility-img/ALTIS/360EXT_1_18_${index}.png`;
    console.log(index);
    console.log(imgURL);
    img.setAttribute("src", imgURL);
    container.append(img);

}









