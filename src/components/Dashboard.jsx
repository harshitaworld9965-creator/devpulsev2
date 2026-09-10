import WelcomeCard from "./WelcomeCard";

function Dashboard() {
  return (
    <main>
      <WelcomeCard title="Your Developer Intelligence"
      description="Enter a Github username to analyse their profile" 
      />
      <WelcomeCard title= "Repository insights"
      description="Explore repositories, languages, stars and developer activity" />
      <WelcomeCard
  title="Public Repositories"
  value={127}
  description="Repositories owned by this developer."
  featured={true}
/>
    </main>
  );
}

export default Dashboard;