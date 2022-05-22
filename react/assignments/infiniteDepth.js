import "./styles.css";

let dummy = [
  {
    listName: "buy",
    isCheck: false,
    items: [
      {
        listName: "Groceries",
        isCheck: false,
        items: [
          {
            listName: "Apples",
            isCheck: false
          }
        ]
      }
    ]
  },
  {
    listName: "Study",
    isCheck: false,
    items: [
      {
        listName: "React",
        isCheck: false
      },
      {
        listName: "Redux",
        isCheck: false,
        items: [
          {
            listName: "Action",
            isCheck: false
          },
          {
            listName: "Reducer",
            isChecl: false
          }
        ]
      }
    ]
  }
];

const addItem = () => {
  // click 했을 때 입력 input 생성
  // items에 push
};

const updateIsCheck = () => {
  // listName이 같은게 다른 depth에 있는 경우
  // listName 탐색
};

const generateList = ({ listName, isCheck, items }) => {
  return (
    <li style={{ textAlign: " left" }}>
      <div>
        <input
          type="checkbox"
          id={listName}
          onChange={() => updateIsCheck()}
          checked={isCheck}
        />
        <label for={listName}>{listName}</label>
        <button onClick={() => addItem()}>+</button>
      </div>
      {items && <ul>{items.map((item) => generateList(item))}</ul>}
    </li>
  );
};

// dummy data를 useState에 initiating 했으면 더 좋았을 것
export default function App() {
  return (
    <div className="App">
      <h1>To-do list</h1>
      <ul>{dummy.map((data) => generateList(data))}</ul>
    </div>
  );
}
