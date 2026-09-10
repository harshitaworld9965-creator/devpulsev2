import useGithub from "../hooks/useGithub";

function Dashboard({ username }) {
  const { profile, loading, error } = useGithub(username);

  return (
    <main>
      <h2>Developer Profile</h2>

      {!username && (
        <p>Enter a GitHub username to begin.</p>
      )}

      {loading && <p>Loading developer...</p>}

      {error && <p>{error}</p>}

      {profile && (
        <div>
          <img
            src={profile.avatar_url}
            alt={profile.login}
            width="100"
          />

          <h3>{profile.name}</h3>

          <p>@{profile.login}</p>

          <p>{profile.bio}</p>

          <p>Repositories: {profile.public_repos}</p>
        </div>
      )}
    </main>
  );
}

export default Dashboard;