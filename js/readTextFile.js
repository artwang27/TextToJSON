/*
【註解】
doc檔 與  text檔:
普通的文字檔我稱它為 text 檔，
doc 檔有特定的格式，是處理過的 text 檔，專門用來記錄資料，他的第一列是欄位名稱，接下來的各列是資料的內容
*/


/*
//範例：onLoadComplete

//當檔案讀取完畢之後，萃取資料
function onLoadComplete(text) {
    print2("file 載入完畢，且已經去掉所有的空白列 ");

    //return;
    let lines = readAsLines(text);
    print2("共"+lines.length+"筆");

    print2(lines[20]);   //取其中一列
    let data = makeLineData(lines[20]); //分解成陣列 
    console.log(data);
}
*/




/*
參數一 inputFileId:  是指 <input type="file" id="inputID"> 裡的 id 字串，此處為 "inputID"，
    它將被轉為 jquery 物件， 若寫成 "#inputID" 也是 OK 的
參數二 onLoadComplete: 當檔案載入完畢後，要進一步處理的回呼函式，它的實做形式為 onLoadComplete(doc){...}

讀檔完畢自動回呼： onLoadComplete(doc)
【注意】接收的回呼函數，形如: 
function onLoadComplete(doc)
已有內建的 doc 參數可以使用，且已經先去除了不必要的空白列

程式寫法
註一：
bind 語法: $(selector).bind(event,data,function(e))
其中 e 是 Event 物件，包含了很多屬性，像是 
    type:"change", 
    target:input#myfile, 
    data : 額外資料屬性
當有額外資訊要傳入時，可以用 bind 的第二個參數來設定 e.data

註二：
    fReader.onload = function (event) 與 change 的 event 為了避免名稱衝突，
    所以把 change 的 event 改名為 E 
*/
// 
class LoadTextFile {
    constructor(inputFileId, onLoadComplete, whoCallMe) {

        alertt("LoadTextFile已經棄用，請改為 new TextFileReader() 為佳！");
        let self=this;

        if (inputFileId[0] != "#"){ inputFileId = "#" + inputFileId;  }
        let $myfileDom = $(inputFileId);  //select id 是以 '#' 開頭

        $myfileDom.on("change", { fReaderOKFunction: onLoadComplete }, function (E){
            //print2(this);      //這裡的 this 是  <input id="myfile" type="file"> dom 物件，不是 jQuery 喔！

            let file = this.files[0];   //只處理第一個檔
            let fReader = new FileReader();
            fReader.readAsText(file);

            fReader.onload = function (event) {
                let doc = event.target.result;  //讀完的文字檔可能包含了不必要的空白列
                doc = self.removeBlankLines(doc);   //清除所有空白列

                //print2(E);  //E 是 Event 物件
                E.data.fReaderOKFunction(doc, whoCallMe);  //當檔案讀取完畢，呼叫預設的 onLoadComplete()
            }//fReader
            
        })//on  (也就是 bind)
    }//constructor

    
    //去掉所有空白列
    removeBlankLines (doc) {
        return doc.replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '')
    }


}//class


// class LoadTextFile {
//     constructor(inputFileId, onLoadComplete) {
//         let self = this;

//         if (inputFileId[0] != "#") { inputFileId = "#" + inputFileId; }
//         let $myfileDom = $(inputFileId);  //select id 是以 '#' 開頭

//         $myfileDom.bind("change", { fReaderOKFunction: onLoadComplete }, function (E) {
//             //print2(this);      //這裡的 this 是  <input id="myfile" type="file"> dom 物件，不是 jQuery 喔！

//             let file = this.files[0];   //只處理第一個檔
//             let fReader = new FileReader();
//             fReader.readAsText(file);

//             fReader.onload = function (event) {
//                 let doc = event.target.result;  //讀完的文字檔可能包含了不必要的空白列
//                 doc = self.removeBlankLines(doc);   //清除所有空白列

//                 //print2(E);  //E 是 Event 物件
//                 E.data.fReaderOKFunction(doc);  //當檔案讀取完畢，呼叫預設的 onLoadComplete()
//             }//fReader
//         })//bind
//     }//constructor


//     //去掉所有空白列
//     removeBlankLines(doc) {
//         return doc.replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '')
//     }


// }//class


