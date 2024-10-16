import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Board from "./components/Board/Board";
import { orderAndGroupTickets, getUserMap } from './utils/helpers';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groups, setGroups] = useState({});
  const [users, setUsers] = useState([]);
  const [config, setConfig] = useState({
    grouping:localStorage.getItem("grouping") || "status", 
    ordering:localStorage.getItem("ordering") || "title"
  });

  useEffect(()=>{
    async function getData(){
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(getUserMap(data.users));
    }
    getData();
  },[]);

  useEffect(()=>{
    saveConfig(config);
    setGroups(orderAndGroupTickets(tickets,config.ordering, config.grouping));
  }, [config, tickets]);

  const saveConfig = useCallback((config)=>{
    localStorage.setItem("grouping", config.grouping);
    localStorage.setItem("ordering", config.ordering);
  },[])

  return (
    <div className="App">
      <Navbar config={config} setConfig={setConfig}/>
      <Board groups={groups} users={users} groupingType={config.grouping}/>
    </div>
  );
}

export default App;
