import { useEffect, useState } from "react";

function Dashboard({ username }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setProfile(null);
      return;
    }

    async function fetchProfile() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
          throw new Error("GitHub user not found");
        }

        const data = await response.json();

        setProfile(data);
      } catch (err) {
        setError(err.message);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [username]);

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