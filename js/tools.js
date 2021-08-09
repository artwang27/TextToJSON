//=================列印相關===============================

//在此設定要 print 指令要顯示在哪個區域( DOM 元件上)
let myPrint={
    area: "#printArea" //注意： #， id 別忘了
}

function print2(data) {
    console.log(data);
}

function print3(data) {
    printHtml(data);
}


//在網頁上直接顯示連續的 data
//列印在 myPrint.area 所指定的位置
//把要列印的地方的 id 傳給 myPrint.area 
function printHtml(data = "") {
    $(myPrint.area).append(data + "<br />");   //每列印一筆，要記得換行
}


//清除列印範圍
function printCls() {
    $(myPrint.area).html("");
}


//=================亂數相關===============================

//產生 0 ~ n-1，隨機的整數
function randomInt(n) {
    return Math.floor(Math.random() * n);
}


//把 ary 的索引亂數化
//傳回亂數化過的 ary 索引
//例如:學生有28人，索引範圍 0~27
//把 0~27 隨機交換，產生一個新的陣列
//此函式並不會改變原本的陣列，請安心使用
function randomArrayIndex(ary){
    alert("randomArrayIndex(ary)已經過時，請改用 randomIntArray(start,end)");
    return randomIntArray(0, ary.length-1);

    // let aryLength = ary.length;
    // let indexAry = [];
    // //先將索引值，按順序填入
    // for (let i = 0; i < aryLength; i++) {
    //     indexAry.push(i);
    // }

    // //交換第 i,j 元素的內容
    // for (let i = 0; i < aryLength; i++) {
    //     let j = randomInt(aryLength);
    //     [indexAry[i], indexAry[j]] = [indexAry[j], indexAry[i]];
    // }
    // return indexAry;
}


//產生 start ~ end 之間的整數，打亂之後，放入陣列
//用途：產生隨機的索引值 
function randomIntArray(start,end) {
    let aryLength = end-start+1;
    let indexAry = new Array(aryLength);
    //先將數字按順序填入
    for (let i = 0; i < aryLength; i++) {
        indexAry.push(i);
    }

    //交換第 i,j 元素的內容
    for (let i = 0; i < aryLength; i++) {
        let j = randomInt(aryLength);
        [indexAry[i], indexAry[j]] = [indexAry[j], indexAry[i]];
    }
    return indexAry;
}



//=================讀檔相關===============================

//去掉文件中所有空白列
function removeBlankLines(doc) {
    return doc.replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '')
}


//把文件拆成一列一列，構成 lines 陣列
function docAsLines(doc) {
    let lines = doc.split(/[\n|\r\n]{1,}/);
    return lines;
}


//每一橫列，以空白為區隔，分解成陣列
//傳回每一列的欄位內容
//split函数以空格分割的正确用法：
//String.split函数支持正则表达式匹配字符串，\s表示匹配任何空格，包括tab键，+表示一次或者多次，\\s进行转义
function lineAsArray(line) {
    //line=" 22 陳安箴 教室 第三組 ";
    //lineData = ["22", "陳安箴", "教室", "第三組"];
    let lineAry = line.trim().split(/\s+/);
    //print2(lineData.length);
    return lineAry;
}


//=================其他===============================

function checkIsBoy(sex) {
    return (sex == 1 || sex == "1" || sex == "男");
}


//算出繞了幾圈，還剩多少距離
function lapsMod(totalDistance, circumference) {
    let obj = {};
    obj.laps = Math.floor(totalDistance / circumference);    //繞了幾圈
    obj.remain = totalDistance - obj.laps * circumference;   //剩多少距離
    return obj;
}