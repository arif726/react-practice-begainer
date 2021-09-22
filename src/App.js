import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Rubel" profession="Crickter"></Person>
      <Person name="Razzak" profession="Hero"></Person>
      <Person name="Sabana" profession="Heroien"></Person>
      <Person name="Jamal" profession="Footballer"></Person>
      <Person name="Jhankar" profession="Mentor"></Person>
    </div>
  );
}

function Person({ name, profession }) {
  return (
    <div className="Person">
      <h1>Name : {name}</h1>
      <h3>Profession : {profession}</h3>
    </div>
  )
}
export default App;
