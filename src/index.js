import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liを生成
  const li = document.createElement("li");
  li.classList.add("list-item");

  // pタグを生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // 完了ボタンを生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    alert("完了");
  });

  // 削除ボタンを生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    alert("削除");
  });

  // liタグの子要素に各要素を追加
  li.appendChild(p);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
  console.log(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
