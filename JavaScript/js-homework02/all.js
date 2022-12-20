


const dataList = document.querySelector('.cardlist');


console.log(dataList);




// 將陣列資料設定到Card牌卡中
// 先把API的URL存成一個變數
let dataUrl = "https://ddragon.leagueoflegends.com/cdn/10.22.1/data/zh_TW/champion.json";

let titleStr;
let str = "";

// $.ajax({
//     url: dataUrl,  // 指定API 的 URL 
//     method: 'GET', // 指定請求方法
//     dataType: 'json',// API的格式
//     data: '', //若有傳送資料時的資料設定 (GET沒有)
//     async: true,  //  預設是true=非同步,false=同步 (true時整行可省略)

//     success: res => { // 成功的話執行...
//         console.log("執行成功");
//         console.log(res.type);
//         // TODO
//     },
//     error: err => { // 失敗的話執行...
//         // TODO
//     },
// });

// 箭頭涵式寫法:success: res =>{  ....}
// 原始一般寫法:success: function(res){  ....}


fetch(dataUrl)
    .then(function (response) {

        console.log(response);


        return response.json(); // .json 是 fetch 的函式 可以轉換資料

    })
    .then(function (Json) {


        // 取到物件資料

        console.log(Json);

        let jsonObj = Json.data;



        var obj = Object.keys(jsonObj).map(function (_) { return jsonObj[_]; });

        console.log(obj)

        obj.forEach(function (item, index) {



            let imgUrl = `https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/${obj[index].id}_0.jpg`
            // console.log(imgUrl)
            card_title = `${index} : ${obj[index].id} - ${obj[index].name}`;

            // 0 : 英文名稱 - 中文名稱
            console.log(card_title);
            str += `
                    <div class="item">
                        <div><img src="${imgUrl}" alt=""></div>
                            <div class="desc">
                                <h2>${card_title}</h2>
                                <p class="text">${obj[index].blurb}</p>
                            </div>
                        <div class="btn">
                            <button>詳細</button>
                            <button>影片</button>
                        </div>
                    </div>
                    
                    `;
        })


        dataList.innerHTML = str;


    })
    .catch(function (error) {
        console.log(error);
    });


// const api = fetch('dataUrl')
// console.log(api)


// axios
//     .get(dataURL)
//     .then(function (response) {
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
