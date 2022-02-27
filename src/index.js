import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liを生成
  const li = document.createElement("li");
  li.classList.add("list-item");

  // pタグを生成
  const p = document.createElement("p");
  p.innerText = text;

  // 完了ボタンを生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeBtn.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeBtn.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // liの中身を生成
    const p = document.createElement("p");
    p.innerText = text;

    // 戻すボタンの生成
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      //　押された戻すボタンの親タグ（li）を完了リストから削除
      const backTarget = backBtn.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);
      // テキスト取得
      const text = backTarget.firstChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(p);
    addTarget.appendChild(backBtn);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタンを生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteBtn.parentNode);
  });

  // liタグの子要素に各要素を追加
  li.appendChild(p);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
