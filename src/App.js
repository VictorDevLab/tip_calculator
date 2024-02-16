import { useState } from "react";

export default function App() {
  return <TipCalculator />;
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [yourLike, setYourLike] = useState(0);
  const [friendLike, setFriendLike] = useState(0);
  //derived state
  const tip = (bill * (yourLike + friendLike)) / 2 / 100;

  const handleReset = () => {
    setBill("");
    setYourLike(0);
    setFriendLike(0);
  };
  // console.log("your like " + yourLike);
  // console.log("your friends like " + friendLike);
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage like={yourLike} onSetLike={setYourLike}>
        How did You like the service?
      </SelectPercentage>
      <SelectPercentage like={friendLike} onSetLike={setFriendLike}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor="bill">
        How much was the bill?
        <input
          type="text"
          id="bill"
          value={bill}
          placeholder="input bill"
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
function SelectPercentage({ like, onSetLike, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={like} onChange={(e) => onSetLike(Number(e.target.value))}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
