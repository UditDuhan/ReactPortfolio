import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render(){
    return(
      <div>
        <table cellspacing="5">
          <tr>
            <td>
            <img src="https://raw.githubusercontent.com/UditDuhan/UditDuhan.github.io/master/udit.jpg" alt="Udit" width="200px"/>
            </td>
            <td>
              <h1>Udit Duhan</h1>
              <p><em>B.Tech 4th year student at <strong><a href="https://www.lpu.in" target="_blank" rel="noopener noreferrer">LPU</a></strong></em></p>
              <p>I am a Web Developer. I <span role="img" aria-labelledby="Heart">❤️</span> animals.</p>
            </td>
          </tr>
        </table>
        <hr size="3px" color="black"/>
        <h2>My favorites movies of all times</h2>
        <ul>
          <li>Lord of the Ring</li>
          <li>Harry Potter</li>
          <li>Marvel Franchise</li>
          <li>3 idiots</li>
        </ul>
        <hr size="3px" color="black"/>
        <h2>Skills</h2>
        <table cellspacing="10">
          <tr>
            <td>Web Development</td>
            <td><span role="img" aria-label="5 Stars">⭐⭐⭐⭐⭐</span></td>
          </tr>
          <tr>
            <td>Machine Learning</td>
            <td><span role="img" aria-label="3 Stars">⭐⭐⭐</span></td>
          </tr>
          <tr>
            <td>Communication Skills</td>
            <td><span role="img" aria-label="4 Stars">⭐⭐⭐⭐</span></td>
          </tr>
        </table>
      </div>
    );
  }
}
export default App;
