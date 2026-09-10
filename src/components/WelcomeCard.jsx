function WelcomeCard({ title, value, description, featured }) {
  return (
    <section>
      <h2>{title}</h2>
      <strong>{value}</strong>
      <p>{description}</p>

      {featured && <p>Featured Developer</p>}
    </section>
  );
}

export default WelcomeCard;