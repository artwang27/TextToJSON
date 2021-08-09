
function print2(data) {
    console.log(data);
}

//在網頁上直接顯示
function printHtml(data="") {
    globals.printLines += (data) + "</br>";  //每列印一筆，要記得換行
    $("#printArea").html(globals.printLines);
}

function print3(data){
    printHtml(data);
}

function cls() {
    globals.printLines = "";
}



function checkIsBoy(sex){
    return (sex == 1 || sex=="男");
}


//產生 0 ~ n-1，隨機的整數
function randomInt(n) {
    return Math.floor(Math.random() * n);
}


//把 ary 的索引亂數化
//傳回亂數化過的 ary 索引
function randomArrayIndex(ary){
    let aryLength = ary.length;
    let indexAry = [];
    //先將索引值，按順序填入
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


//算出繞了幾圈，還剩多少距離
function lapsMod(totalDistance, circumference) {
    let obj = {};
    obj.laps = Math.floor(totalDistance / circumference);    //繞了幾圈
    obj.remain = totalDistance - obj.laps * circumference;   //剩多少距離
    return obj;
}