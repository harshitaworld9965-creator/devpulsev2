import { useState } from "react";

function SearchBar() {
    const [username, setUsername] = useState("");
    const [searchedUsername, setSearchedUsername] = useState("");

    return (
        <section>
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />

            <button onClick={() => setSearchedUsername(username)}>
                Analyze Developer
            </button>
            <p>Submitted username: {searchedUsername}</p>

            <p>Searching for: {username}</p>
        </section>
    );
}

export default SearchBar;