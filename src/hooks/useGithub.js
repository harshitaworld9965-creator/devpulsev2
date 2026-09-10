import { useEffect, useState } from "react";

function useGithub(username) {
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

  return {
    profile,
    loading,
    error,
  };
}

export default useGithub;