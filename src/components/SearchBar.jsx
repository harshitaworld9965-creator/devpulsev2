function SearchBar({
  username,
  setUsername,
  setSearchedUsername,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    setSearchedUsername(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <button type="submit">
        Analyze Developer
      </button>
    </form>
  );
}

export default SearchBar;