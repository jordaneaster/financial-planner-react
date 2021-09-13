import Expenses from './components/Expenses/Expenses';
import Goals from "./components/Goals/Goals";
import './components/UI/jordan.css'
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
  
  const goals = [
    {
      id:"g1",
      title: "Start a career in software development",
      howReach: "Network, Apply, Network",
      date: new Date(2021,9,1)
    },
    {
      id:"g2",
      title: "Relocate further south",
      howReach: "Research cities on the east coast",
      amount: 0,
      date: new Date(2022,1,1),
    },
    {
      id:"g3",
      title: "Buy a home",
      howReach: "Save for downpayment",
      amount: 10000,
      date: new Date(2022,6,1),
    }
  ]

  return (
    <div className="App">
      <h2 className="myTitle">Life Planner- A React Web Application created by Jordan Easter</h2>
      <Expenses items={expenses}/>
      <Goals goals={goals}/>
    </div>
  );
}

export default App;
