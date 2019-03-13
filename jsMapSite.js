var CSV_FILE = "sample.csv";
var req = new XMLHttpRequest();


function convertCSVtoArray(str) {
    var table = [];
    var tmp = str.split("\n");
    for (var i = 0; i < tmp.length; ++i) {
        table[i] = tmp[i].split(',');
    }
    return table;
}

function reloadTable() {
    req.open("get", CSV_FILE, false);
    req.send(null);
}

function changeImage(imageID) {
    imageID = Number(imageID);
    reloadTable();
    var table = convertCSVtoArray(req.responseText);
    var str = imageID + '.jpg'
    document.getElementById('mapImage').innerHTML = '<img src="' + str + '" alt="map" />';
}

function changeTimeStamp(timeID) {
    timeID = Number(timeID);
    var table = convertCSVtoArray(req.responseText); // ìnÇ≥ÇÍÇÈÇÃÇÕì«Ç›çûÇÒÇæCSVÉfÅ[É^
    alert(table[id][2]);
}

function init() {
    req.open("get", CSV_FILE, true);
    req.send(null);
    req.onload = function () {
        var table = convertCSVtoArray(req.responseText);
        var buttons = '';
        document.getElementById('mapImage').innerHTML = '<img src="brank.jpg" alt="map" />'
        for (var i = 0; i < table.length; i++) {
            buttons += '<button onclick="changeImage(' + table[i][3] + ');">';
            buttons += table[i][0];
            buttons += '</button ><br>';
        }
        document.getElementById('ids').innerHTML = buttons;
    }
}

init();