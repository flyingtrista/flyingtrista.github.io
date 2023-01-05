
// DOM 變數
let buttonArea;
let myContainer;

// 渲染資料表格
let table;
let thead;
let tbody;

// DOM 會新增節點區域
let myType;
let myTitle;
let myDesc;

// DOM 價格區域
let myPrice;
// DOM 顏色區域
let myColor;

let nodeProduct = [];
let nodeTable = [];

let imgPath = "/JavaScript/js-homework03/img/";
let tr4_td1_2_img = "";
// 外部json 相關變數
const url = "https://raw.githubusercontent.com/flyingtrista/FileStorage/main/apple_json";
let xhr = new XMLHttpRequest();
let appleData;
let appleKeys;  //apple 產品類型



window.onload = function () {


    buttonArea = document.querySelector(".myButtonArea");
    myContainer = document.querySelector("#myContainer");

    myType = document.querySelector("#myType");
    myTitle = document.querySelector("#myTitle");
    myDesc = document.querySelector("#myDesc");
    myPrice = document.querySelector("#myPrice");
    myColor = document.querySelector("#myColor");

    // 設定清除節點的清單
    nodeProduct.push(myType);
    nodeProduct.push(myPrice);
    nodeProduct.push(myTitle);
    nodeProduct.push(myDesc);

    nodeTable.push(myDesc);
    nodeTable.push(myColor);
    nodeTable.push(myPrice);


    // 取得 json 資料
    getAppleAPI(url);



}

// 取得 github上的 json資料
function getAppleAPI(url) {

    xhr.open("GET", url);
    // 指定回傳值為JSON
    // xhr.responseType="json";
    xhr.send();
    xhr.onload = function () {

        // api 回傳 後進行...
        console.log("xhr.onload...")
        if ((xhr.readyState == 4 && xhr.status == 200) || (xhr.readyState == 4 && xhr.statusText == "OK")) {

            appleData = JSON.parse(xhr.responseText);
            // appleData = this.response;

            console.log("渲染按鈕");

            appleKeys = Object.keys(appleData);
            // 先把所有要顯示於畫面上的資料準備好

            appleKeys.forEach(item => {

                let appleItems = appleData[item];
                appleItems.forEach((data, index) => {
                    let product_group = data.group;

                    // 將按鈕顯示在畫面上

                    let btn = document.createElement("button");
                    btn.setAttribute("id", product_group);
                    btn.setAttribute("class", "product-btn btn btn-dark");
                    btn.innerText = product_group;

                    btn.addEventListener("click", renderData.bind(null, item, index));
                    buttonArea.appendChild(btn);
                });
            });

        } else {
            document.writeln(xhr.status + "error無法成功取得Json資料:" + xhr.status);
        }

    }

}



// 渲染資料
function renderData(item, index) {

    // 清空原先選取的產品資料
    removeRander(nodeProduct);

    let headerData = document.createElement("header");
    let productTitle = document.createElement("h2");

    console.log("renderData...");

    // 先把所有要顯示於畫面上的資料準備好

    let data = appleData[item][index];


    console.log(data);

    let title = document.createElement("h2");


    title.innerText = data.group;
    title.innerText += data.isNew ? "新上市" : "";


    myTitle.appendChild(title);



    showProductName(item, index);

    console.log("......");


    let product_chip = data.chip;
    let productData = data.product;
    productData.forEach(item => {
        console.log(item);

    });


}

// 點選產品顯示產品列表按鈕
function showProductName(item, index) {

    let data = appleData[item][index];
    let productData = data.product;
    data.product.forEach((btnName, productIndex) => {
        // 新增產品按鈕
        let titleBtn = document.createElement("button");
        titleBtn.setAttribute("class", "p-4 d-flex flex-column justify-content-center align-items-center");
        titleBtn.innerText = btnName.productName;

        // 新增產品按鈕的監聽事件
        titleBtn.addEventListener("click", renderMyTable.bind(null, item, index, productIndex));

        myType.appendChild(titleBtn);

    });

}




function renderMyTable(item, index, productIndex) {

    // 清空表格內容
    removeRander(nodeTable);

    console.log(item, index, productIndex);
    let data = appleData[item][index].product[productIndex];
    console.log("renderMyTable...");
    console.log(data);

    table = document.createElement("table");
    thead = document.createElement("thead");
    tbody = document.createElement("tbody");

    createTbodyContent(data);

}

function createTbodyContent(item) {
    let data = item;
    console.log("createTbodyContent....");
    console.log(data);


    // 第一筆資料

    let tbody_tr1 = document.createElement("tr");

    let tr1_td1_1 = document.createElement("td");
    let tr1_td1_2 = document.createElement("td");

    let tr1_td1_1_p = document.createElement("p");
    let tr1_td1_2_p = document.createElement("p");

    tr1_td1_1_p.innerText = "產品名稱：";
    tr1_td1_2_p.innerText = data.productName;


    tr1_td1_1.appendChild(tr1_td1_1_p)
    tr1_td1_2.appendChild(tr1_td1_2_p);

    tbody_tr1.append(tr1_td1_1, tr1_td1_2);

    table.append(tbody_tr1);
    myDesc.append(table);



    // 第二筆資料

    let tbody_tr2 = document.createElement("tr");

    let tr2_td1_1 = document.createElement("td");
    let tr2_td1_2 = document.createElement("td");

    let tr2_td1_1_p = document.createElement("p");
    let tr2_td1_2_p = document.createElement("p");

    let str = "";

    tr2_td1_1_p.innerText = "產品 Dim：";
    tr2_td1_1.appendChild(tr2_td1_1_p);

    let dimKeys = Object.keys(data.dim);


    dimKeys.forEach((dimitem, index) => {


        console.log(data.dim[dimitem].DimDetail);
        console.log(dimitem);


        str += dimitem + ":";
        str += data.dim[dimitem].DimDetail + " ";
        str += data.dim[dimitem].inches + " ";


    });
    tr2_td1_2_p.innerText = str;
    tr2_td1_2.appendChild(tr2_td1_2_p);

    tbody_tr2.append(tr2_td1_1, tr2_td1_2);
    table.append(tbody_tr2);
    myDesc.append(table);


    // 第三筆資料

    let tbody_tr3 = document.createElement("tr");

    let tr3_td1_1 = document.createElement("td");
    let tr3_td1_2 = document.createElement("td");

    let tr3_td1_1_p = document.createElement("p");
    let tr3_td1_2_p = document.createElement("p");

    let str3 = "";

    tr3_td1_1_p.innerText = "產品容量：";
    tr3_td1_1.appendChild(tr3_td1_1_p);
    tbody_tr3.appendChild(tr3_td1_1);
    table.append(tbody_tr3);
    myDesc.append(table);


    let detailsKeys = Object.keys(data.details);


    detailsKeys.forEach((detailsitem, index) => {


        // str3 += data.details[detailsitem].rom + ":";
        let itemPrice = data.details[detailsitem].oriprice;

        // 建立 容量 按鈕
        let detailsitem_btn = document.createElement("button");
        detailsitem_btn.innerText = data.details[detailsitem].rom;
        detailsitem_btn.addEventListener("click", showPrice.bind(null, itemPrice))



        tr3_td1_2.appendChild(detailsitem_btn);

        tbody_tr3.appendChild(tr3_td1_2);
        table.append(tbody_tr3);
        myDesc.append(table);

    });

    // 第四筆資料

    let tbody_tr4 = document.createElement("tr");


    let tr4_td1_1 = document.createElement("td");
    let tr4_td1_2 = document.createElement("td");

    let tr4_td1_1_p = document.createElement("p");
    let tr4_td1_2_p1 = document.createElement("p");
    let tr4_td1_2_p2 = document.createElement("p");

    let str4 = "";

    tr4_td1_2_p1.innerText = "產品顏色：";
    tr4_td1_1.appendChild(tr4_td1_2_p1);
    tbody_tr4.appendChild(tr4_td1_1);

    table.append(tbody_tr4);
    myDesc.append(table);


    let colorsKeys = Object.keys(data.colors);


    colorsKeys.forEach((colorsitem, index) => {


        let itemColors = data.colors[colorsitem];

        // 建立 顏色 按鈕
        let colorsitem_btn = document.createElement("button");
        colorsitem_btn.innerText = itemColors.colordesc;
        console.log(data.colors[colorsitem].img);
        colorsitem_btn.setAttribute("style", "background-color:" + data.colors[colorsitem].colorCSS);
        colorsitem_btn.addEventListener("click", showColor.bind(null, data.colors[colorsitem].img));



        tr4_td1_2.appendChild(colorsitem_btn);

        tbody_tr4.appendChild(tr4_td1_2);
        table.append(tbody_tr4);
        myDesc.append(table);

    });

    tr4_td1_2_img = document.createElement("img");
    tr4_td1_2_img.setAttribute("src", imgPath + "iphone-14-pro-all.jpg");
    tr4_td1_2_img.setAttribute("style", "width:100px");

    console.log(tr4_td1_2_img);
    tr4_td1_2_p2.appendChild(tr4_td1_2_img);
    tr4_td1_2.appendChild(tr4_td1_2_p2);
    tbody_tr4.appendChild(tr4_td1_2);
    table.append(tbody_tr4);
    myDesc.append(table);



}

function showPrice(setPrice) {
    myPrice.innerText = "產品售價： NT" + setPrice;

}

function showColor(item) {
    let data = item;
    console.log("item.....");

    console.log(data);
    tr4_td1_2_img.setAttribute("src", imgPath + data);

    tr4_td1_2_img.setAttribute("style", "width:100px");

}


// 移除新增的節點內容
function removeRander(nodelist) {

    nodelist.forEach(node => {
        console.log("移除新增的節點內容...");

        while (node.firstChild) {
            console.log(node.firstChild);
            node.removeChild(node.firstChild);
        }
    });
}


// 移除按鈕監聽事件
function removeEventListener(domName, fnName) {
    // domName.removeEventListener("click", fnName);
}
