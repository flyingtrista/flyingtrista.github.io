console.clear();

// 處理監聽事件: 大範圍監聽數字按鈕

const Range_min = document.querySelector(".min");
const Range_max = document.querySelector(".max");

const inputData = document.querySelector("#password");
const btnclick = document.querySelector(".area-btn");
const btnreset = document.querySelector(".reset");

const  icon = document.querySelector(".icon");

const showrange = document.querySelector(".show-range");
const over = document.querySelector(".over");


const mainbtn = document.querySelector(".main-btn");

let inputStr = "";
let num = "";



// 亂數的區間
let init_min = 0;
let init_max = 100;
let randomInt = getRandomInt(init_min, init_max);

// 設定頁面顯示區間範圍
nowRange(init_min,init_max);

function nowRange(min,max){

    Range_min.innerText = min;
    Range_max.innerText = max;
}




console.log("終極密碼: "+randomInt);


// 清空輸入值
function resetInput(){
    inputStr = "";
    inputData.value = inputStr;
    
}

// 輸入數字鍵盤的出發
btnclick.addEventListener("click", function (e) {
    console.log(e.target.nodeName);
    if (e.target.nodeName == "BUTTON") {
        if (e.target.getAttribute("class") == "reset") {
            console.log("我點到清除");
            resetInput();
        } else if (e.target.getAttribute("class") == "submit") {
            console.log("我點到送出");
            inputStr = inputData.value;
            checkInputData(inputStr);
        } else if(e.target.getAttribute("class") == "btn") {
            console.log("我點到數字");
            num = e.target.getAttribute("data-num");
            renderInputData(num);
        } else{
            window.location.reload();
        }
    }
});

function renderInputData(num) {

    console.log("長度" + inputData.value.length);
    if (inputData.value.length < 2) {
        // 可能有手動輸入，要把最新輸入的值重新取出
        inputStr = inputData.value;
        inputStr += num;
        inputData.value = inputStr;
    }
}

function checkInputData(inputStr) {
    console.log("inputStr:" + inputStr);
    inputValue = parseInt(inputStr);

    // 密碼跟猜的數字相同
    if(randomInt === inputValue){
        console.log("你答對了");
        showrange.innerHTML=`<p class="win">恭喜恭喜恭喜恭喜<p>`;
        over.innerText="你猜對了^^";
        icon.innerHTML = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/20.png" alt="">`;
        mainbtn.innerHTML = `<button class="again">again</button>`
    }else if(inputValue > init_max || inputValue< init_min){
        
        // 密碼 超過 最大值 或  密碼 小於 最小值
        console.log("不在區間範圍內");
        icon.innerHTML = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/07.png" alt="">`;
        over.innerText="你幹嘛猜不在區間範圍的數字~";

        // 清空輸入值
        resetInput();

    }else{

        
        // 密碼 超過 亂數 , 且 密碼 小於 區間最大值 
        if(inputValue > randomInt && inputValue < init_max){
            icon.innerHTML = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/11.png" alt="">`;

            console.log("進入")
            // 區間最大值  改為 本次輸入的密碼
            init_max = inputValue;
            nowRange(init_min,init_max);
            over.innerText="還沒猜對啦~";
            resetInput();
        }else if(inputValue < randomInt && inputValue > init_min){

            icon.innerHTML = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/12.png" alt="">`;

            // 密碼 小於 亂數  且 密碼 大於 區間最小值 

            // 區間最小值  改為 本次輸入的密碼
            init_min = inputValue;
            nowRange(init_min,init_max);
            over.innerText="還沒猜對啦~";
            resetInput();
        }else{
            icon.innerHTML = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/04.png" alt="">`;
            over.innerText="這不是區間範圍內的數字...";
            resetInput();
        }
        
        

    }

}

function getRandomInt(min, max) {

    // 函式會回傳大於等於所給數字的最小整數
    console.log(min);
    min = Math.ceil(min);
    console.log("最小值: "+min);
    // 函式會回傳小於等於所給數字的最大整數 
    console.log(max);
    max = Math.floor(max);
    console.log("最大值: "+max);

    // 取最小值
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}