import logo from './logo.svg';
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import ironh from  "./images/ironhack-logo-xs.png";
import menub from  "./images/menu-top-xs.png";
import './App.css';

function App() {
  return (
    <div className="App">

    <div className = "App-header"> 
    <a href="./"><img src={ironh} alt="logo"/></a>
    <img className = "menut" src={menub} alt="menu bar"/>
    </div>
    <div className = "landing">
      <h1>Say hello to<br/>ReactJS</h1>
      <h3 className = "h3landing">You will learn how to use <br/> 
      the most popular frontend library, <br/>
      and become a super Ninja developer.</h3>
      <button className = "landingButton"><h3>Awesome!</h3></button>
    </div>
    <div className = "flexinfo">
      <div className = "card">
        <img className = "pic" src={icon1} alt=""/>
        <h2>Declarative</h2>
        <p>React makes it<br/>
        painless to create<br/>
        interactive UIs.</p>
      </div>
      <div className = "card">
        <img className = "pic" src={icon2} alt=""/>
        <h2>Components</h2>
        <p>Build encapsulated<br/>
        components that<br/>
        manage their state.</p>
      </div>
      <div className = "card">
        <img className = "pic" src={icon3} alt=""/>
        <h2>Single-Way</h2>
        <p>Build encapsulated<br/>
        components that<br/>
        manage their state.</p>
      </div>
      <div className = "card">
        <img className = "pic" src={icon4} alt=""/>
        <h2>JSX</h2>
        <p>Statically-typed<br/>
        designed to run on<br/>
        modern browsers.</p>
      </div>
    </div>
    </div>
      
   
  );
}




export default App;
