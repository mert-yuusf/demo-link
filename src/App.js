import logo from './logo.svg';
import './App.css';

function App() {
  const handleLink = async () => {
    console.log("Clicked");
    window.open("https://www.google.com/", "_blank", "noreferrer");

  }
  return (
    <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <button onClick={handleLink}>Click Me</button>
    </div>
  );
}

export default App;
