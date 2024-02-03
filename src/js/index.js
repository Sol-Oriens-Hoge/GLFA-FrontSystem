/* JSの教科書 P.756より
旧来はイベント処理との紐づけを「onxxxxxx属性」を使い、行っていたが、
今は「addEventListenerメソッド」を使うのが一般的 */
window.addEventListener("load", (event) => {
    let wantList = document.querySelector('.list');
    for (let rd of getList()) {
        let i = 0;
        //<li>要素を生成
        let li = makeLi(rd, i);
        wantList.append(li);
        i++;
    }
});

function getList() {
    let list = new Array('貯金100万円！', 'ソファーを新調する', 'お肌をつるつるにする');
    return list;
}

function makeLi(rd, no) {
    //<li>要素を生成
    let li = document.createElement('li');
    //クラス名を設定
    li.className = "recode";
    //チェックボックス生成
    let checkB = document.createElement('input');
    //各種設定
    checkB.type = "checkbox";
    checkB.name = "li_" + no;
    // checkB.textContent = rd;
    //詳細画面遷移ボタン生成
    let bt = document.createElement('input');
    bt.className = "listBt"
    bt.type = "button";
    bt.value = "GO!!";

    //リスト作成
    li.append(checkB);
    li.append(rd);
    li.append(bt);
    return li;
}

document.querySelector('.inputB').addEventListener('click', function () {
    location.pathname = "C:/Users/kakif/OneDrive/mypage/html/input.html";
}, false);

