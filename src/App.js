import logo from './logo.svg';
import './App.css';

function App() {
  const handleLink = async () => {
    console.log("Clicked");
    window.open("http://bpsdashboard/PagesZiraat/ZiraatLogin.aspx?rd=d63XLE4Sf7Xf4CbVPZ8UH57pBj/LTfZkeyurllH3MXH1mqJe9P+8ZP8Be2h6Rixnv7U7tuetKZZWUvnFFPFUy4IobfNDOhRg=&t=FWc0mQq4INoUNPNWA==&guidn=", "_blank", "noreferrer");

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
