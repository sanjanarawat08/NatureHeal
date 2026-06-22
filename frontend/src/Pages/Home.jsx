
function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home">
        <div className="hero-section">
          <h1>Reconnect with Nature, Rejuvenate Your Soul</h1>

          <p>
            Discover a peaceful retreat where comfort meets nature. At
            NatureHeal, we provide a serene homestay experience designed to
            help you relax, recharge, and create unforgettable memories amidst
            breathtaking landscapes.
          </p>

          <div className="hero-buttons">
            <button className="book-btn">
              Book Your Stay
            </button>

            <button className="explore-btn">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose NatureHeal?</h2>

        <div className="feature-cards">
          <div className="card">
            <h3>🌿 Peaceful Environment</h3>
            <p>
              Escape the busy city life and experience tranquility surrounded
              by nature.
            </p>
          </div>

          <div className="card">
            <h3>🏡 Comfortable Homestays</h3>
            <p>
              Enjoy cozy accommodations with modern amenities and warm
              hospitality.
            </p>
          </div>

          <div className="card">
            <h3>🥗 Healthy Living</h3>
            <p>
              Experience nutritious meals and wellness activities for a
              rejuvenating stay.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="stat-box">
          <h2>500+</h2>
          <p>Happy Guests</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Nature Experiences</p>
        </div>

        <div className="stat-box">
          <h2>4.9★</h2>
          <p>Guest Rating</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
      </section>
    </>
  );
}

export default Home;
