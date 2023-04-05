import logo from './logo.svg';
import './App.css';
import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';


function App() {
  const [{data, err, flag}] = useJsonFetch("http://localhost:7070/loading", 5);
  console.log(data);
  console.log(err);
  console.log(flag)
  return (
   <div>
    <h3>Результат загрузки:</h3>
     {flag? "идет загрузка...": <p>{data.status}</p>}
    <h3>Ошибки:</h3>
    <p> {err? "имеются ошибки..": "ошибок нет..."} </p>
    <h3>Загрузка:</h3>
     <p> {flag? "идет загрузка...": "загрузка завершена..."} </p>
   </div>
  );
}

export default App;
