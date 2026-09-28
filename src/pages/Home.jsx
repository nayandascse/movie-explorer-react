import Hero from "../components/Hero";

const Home = () => (
  <main>
    <Hero />
    <section className="home-info">
      <div className="container">
        <div className="section-heading">
          <p>WHY MOVIE EXPLORER?</p>
          <h2>Everything You Need to <span>Explore Shows</span></h2>
          <p>Search for shows, discover new titles and explore detailed information about your favorite series.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card"><div className="feature-icon">🔍</div><h3>Smart Search</h3><p>Quickly search shows by title.</p></div>
          <div className="feature-card"><div className="feature-icon">🎬</div><h3>Huge Collection</h3><p>Browse a large collection from TVMaze.</p></div>
          <div className="feature-card"><div className="feature-icon">⭐</div><h3>Ratings</h3><p>Check ratings, genres and release information.</p></div>
          <div className="feature-card"><div className="feature-icon">📱</div><h3>Responsive</h3><p>Enjoy the experience on every device.</p></div>
        </div>
      </div>
    </section>
  </main>
);

export default Home;