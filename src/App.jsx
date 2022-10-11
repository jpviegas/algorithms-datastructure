import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <section>
        <h1>5 JavaScript projects to learn algorithms and data structures.</h1>
        <ul>
          <Link to="/palindrome">
            <li>Palindrome Checker</li>
          </Link>
          <li>Roman Numeral Converter</li>
          <li>Ceasars Cipher</li>
          <li>Telephone Number Validator</li>
          <li>Cash Register</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
