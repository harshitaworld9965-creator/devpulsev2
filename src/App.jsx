import { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Dashboard from "./components/Dashboard";

function App() {
  const [username, setUsername] = useState("");
  const [searchedUsername, setSearchedUsername] = useState("");

  return (
    <>
      <Header title="DevPulse" />

      <SearchBar
        username={username}
        setUsername={setUsername}
        setSearchedUsername={setSearchedUsername}
      />

      <Dashboard username={searchedUsername} />
    </>
  );
}

export default App;