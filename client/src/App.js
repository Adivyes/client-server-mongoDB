
import './App.css';
import MoviesRouter from './MoviesRouter';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h5>hello</h5>
      <MoviesRouter/>
      </header>
    </div>
  );
}

export function averageCalc(num1 , num2, num3, num4, num5){
let sumUp =   num1 + num2 + num3 + num4 + num5
return sumUp/5
}
export default App;
