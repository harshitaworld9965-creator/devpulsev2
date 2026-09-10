import { useEffect, useState } from "react";

function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch(
        "https://api.github.com/users/octocat"
      );

      const data = await response.json();

      setProfile(data);
    }

    fetchProfile();
  }, []);

  return (
    <main>
      <h2>Developer Profile</h2>

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