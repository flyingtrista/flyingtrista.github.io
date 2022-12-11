console.clear();

// 處理監聽事件: 大範圍監聽數字按鈕

const Range_min = document.querySelector(".min");
const Range_max = document.querySelector(".max");

const inputData = document.querySelector("#password");
const btnclick = document.querySelector(".area-btn");
const btnreset = document.querySelector(".reset");

const icon = document.querySelector(".icon");

const showrange = document.querySelector(".show-range");
const over = document.querySelector(".over");
const count = document.querySelector(".count");


const mainbtn = document.querySelector(".main-btn");
const maincontent = document.querySelector(".main-content");


let inputStr = "";
let num = "";
let errorCount = 0;
let rangeCount = 0;
let blankCount = 0;


// 亂數的區間
let init_min = 0;
let init_max = 100;
let randomInt = getRandomInt(init_min, init_max);

// 設定頁面顯示區間範圍
nowRange(init_min, init_max);

function nowRange(min, max) {

    Range_min.innerText = min;
    Range_max.innerText = max;
}




console.log("終極密碼: " + randomInt);


// 清空輸入值
function resetInput() {
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
        } else if (e.target.getAttribute("class") == "btn") {
            console.log("我點到數字");
            num = e.target.getAttribute("data-num");
            renderInputData(num);
        } else {
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

function render_showrange() {
    showrange.innerHTML = str_showrange;
}
function render_count() {
    count.innerHTML = str_count;
}
function render_over() {
    over.innerText = str_over;
}
function render_icon() {
    icon.innerHTML = str_icon;
}
function render_mainbtn() {
    mainbtn.innerHTML = str_mainbtn;
}


let str_showrange = "";
let str_count = "";
let str_over = "";
let str_icon = ""
let str_mainbtn = "";





function checkInputData(inputStr) {
    console.log("inputStr:" + inputStr);
    inputValue = parseInt(inputStr);

    errorCount++;
    console.log(errorCount);

    // 密碼跟猜的數字
    if (inputStr === "") {

        str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/01.png" alt="">`;

        errorCount--;
        blankCount++;
        console.log(blankCount);
        if (errorCount === 0) {
            if(blankCount>3){
               
                str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/17.png" alt="">`;
                str_count = `你空白太多次了~`;
                str_over = `...我要送你去別的地方~(掰)`;

                setTimeout("location.href='https://karta060925.github.io/ultimatePassword/index.html'", 2000);

            }else{
                str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/02.png" alt="">`;

                str_count = `這次不算,好像怪怪的~?`;
                str_over = `送出前要輸入數字呀...==V==`;
                
            }
          

        } else {
            switch (blankCount) {
                case 1:
                    str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/02.png" alt="">`;
                    str_count = `這次不算,你只猜${errorCount}次`;
                    str_over = `別忘了輸入數字再送出啊...`;
                    break;
                case 2:
                    str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/02.png" alt="">`;
                    str_count = `這次不算,你只猜${errorCount}次`;
                    str_over = `還是空白耶~...==V==`;
                    break;

                case 3:
                    str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/02.png" alt="">`;
                    str_count = `這次不算,你只猜${errorCount}次`;
                    str_over = `一直送我空白~`;
                    break;


                default:
                    str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/17.png" alt="">`;
                    str_count = `你空白太多次了~`;
                    str_over = `...我要送你去別的地方~(掰)`;

                    setTimeout("location.href='https://karta060925.github.io/ultimatePassword/index.html'", 2000);

                    break;

            }

        }


        render_icon();
        render_count();
        render_over();

    } else if (randomInt === inputValue) {

        console.log("你答對了");

        str_showrange = `<p class="win">恭喜你猜對了<p> `;

        str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/20.png" alt="">`;

        str_count = `<span class="over"><br>安妮雅送你一首 <span><a class="music" href="https://www.youtube.com/watch?v=Tkp7gEC1E_0">安妮雅之歌`;
        str_over = `當作小禮物^^ `;

        str_mainbtn = `<button class="again">again</button> `
        maincontent.innerHTML = `<img class="winwin" src="https://cdn.bella.tw/index_image/QCkWEallEQ33VEr0ToMSGmG65rMnaHj54JXpV9fN.jpeg">`;
        render_showrange();
        render_icon();
        render_count();
        render_over();
        render_mainbtn();


    } else if (inputValue > init_max || inputValue < init_min) {

        // 密碼 超過 最大值 或  密碼 小於 最小值
        console.log("不在區間範圍內");

        str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/07.png" alt="">`;



        if (errorCount > 6) {
            str_count = `你猜第${errorCount}次了~`;
            str_over = `還是會輸入超出區間~我要把你送去其他地方!!`;

            setTimeout("location.href='https://karta060925.github.io/ultimatePassword/index.html'", 2000);
        } else {
            str_count = `你沒猜對~猜第${errorCount}次了~`;
            str_over = `超出區間範圍的數字了唷~`;
        }

        render_icon();
        render_count();
        render_over();


        // 清空輸入值
        resetInput();

    } else {


        // 密碼 超過 亂數 , 且 密碼 小於 區間最大值 
        if (inputValue > randomInt && inputValue < init_max) {

            str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/11.png" alt="">`;

            // 區間最大值  改為 本次輸入的密碼
            init_max = inputValue;
            nowRange(init_min, init_max);



            if (errorCount > 6) {
                str_count = `你猜第${errorCount}次了~還是沒猜對~`;

                str_over = `我要把你送去其他地方!!`;

                setTimeout("location.href='https://karta060925.github.io/ultimatePassword/index.html'", 2000);
            } else {
                str_count = `你沒猜對~你猜第${errorCount}次了`;
                str_over = `安尼亞幫你加油打氣呀~!!`;
            }


            render_icon();
            render_count();
            render_over();

            resetInput();

        } else if (inputValue < randomInt && inputValue > init_min) {

            str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/12.png" alt="">`;

            // 密碼 小於 亂數  且 密碼 大於 區間最小值 

            // 區間最小值  改為 本次輸入的密碼
            init_min = inputValue;
            nowRange(init_min, init_max);



            if (errorCount > 6) {
                str_count = `你猜第${errorCount}次了~還是沒猜對~`;
                str_over = `我要把你送去其他地方!!`;
                setTimeout("location.href='https://karta060925.github.io/ultimatePassword/index.html'", 2000);

            } else {
                str_count = `你沒猜對~你猜第${errorCount}次了`;
                str_over = `給你打打氣~!!`;
            }


            render_icon();
            render_count();
            render_over();

            resetInput();
        } else {
            str_icon = `<img class="icon" src="https://spy-family.net/assets/img/special/anya/04.png" alt="">`;
            if (errorCount > 6) {
                str_count = `你猜第${errorCount}次了~還是沒猜對~`;
                str_over = `我要把你送去其他地方!!`;
                setTimeout("location.href='https://karta060925.github.io/ultimatePassword/index.html'", 2000);

            } else {
                str_count = `你沒猜對~你猜第${errorCount}次了`;
                str_over = `可以確認一下輸入區間嗎...`;
            }


            render_icon();
            render_count();
            render_over();

            resetInput();
        }

    }

}

function getRandomInt(min, max) {

    // 函式會回傳大於等於所給數字的最小整數
    console.log(min);
    min = Math.ceil(min);
    console.log("最小值: " + min);
    // 函式會回傳小於等於所給數字的最大整數 
    console.log(max);
    max = Math.floor(max);
    console.log("最大值: " + max);

    // 取最小值
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

