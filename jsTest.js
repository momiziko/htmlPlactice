// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str) { // 読み込んだCSVデータが文字列として渡される
    //var table = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (var i = 0; i < tmp.length; ++i) {
        table[i] = tmp[i].split(',');
    }
    return table;
}

function changeHTML() {
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "sample.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行

    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function () {
        var table = convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
        document.getElementById('table').innerHTML = '<img src="test.jpg" alt="neko" />';
        var elm = document.getElementById('table_text');
        if (table[1][0] == "0001") {
            elm.textContent = table[1][2];
        }
        else {
            elm.textContent = table[0][2];
        }
    }
}