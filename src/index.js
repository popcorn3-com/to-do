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

  // liタグの子要素に各要素を追加
  li.appendChild(p);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
  console.log(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
