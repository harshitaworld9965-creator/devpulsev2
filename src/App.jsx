import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Header title = "DevPulse AI " />
      <SearchBar />
      <Dashboard />
    </div>
  );
}

export default App;