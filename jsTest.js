// �ǂݍ���CSV�f�[�^��񎟌��z��ɕϊ�����֐�convertCSVtoArray()�̒�`
function convertCSVtoArray(str) { // �ǂݍ���CSV�f�[�^��������Ƃ��ēn�����
    //var table = []; // �ŏI�I�ȓ񎟌��z������邽�߂̔z��
    var tmp = str.split("\n"); // ���s����؂蕶���Ƃ��čs��v�f�Ƃ����z��𐶐�

    // �e�s���ƂɃJ���}�ŋ�؂����������v�f�Ƃ����񎟌��z��𐶐�
    for (var i = 0; i < tmp.length; ++i) {
        table[i] = tmp[i].split(',');
    }
    return table;
}

function changeHTML() {
    var req = new XMLHttpRequest(); // HTTP�Ńt�@�C����ǂݍ��ނ��߂�XMLHttpRrequest�I�u�W�F�N�g�𐶐�
    req.open("get", "sample.csv", true); // �A�N�Z�X����t�@�C�����w��
    req.send(null); // HTTP���N�G�X�g�̔��s

    // ���X�|���X���Ԃ��Ă�����convertCSVtoArray()���Ă�	
    req.onload = function () {
        var table = convertCSVtoArray(req.responseText); // �n�����͓̂ǂݍ���CSV�f�[�^
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