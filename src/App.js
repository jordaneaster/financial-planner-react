import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 174.31,
      date: new Date(2021, 8, 26),
    },
    {
      id: "e2",
      title: "Phone Bill",
      amount: 90.0,
      date: new Date(2021, 8, 14),
    },
    {
      id: "e3",
      title: "Car Note",
      amount: 402.12,
      date: new Date(2021, 9, 1),
    },
    {
      id: "e4",
      title: "Loan",
      amount: 280.0,
      date: new Date(2021, 9, 1),
    },
    {
      id: "e5",
      title: "Fines",
      amount: 75.32,
      date: new Date(2021, 9, 1),
    },
  ];

  return (
    <div className="App">
      <h2>Financial Planner- A React Web Application created by Jordan Easter</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
