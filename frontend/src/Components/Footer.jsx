function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section brand">
          <h2 className="footer-logo">NatureHeal</h2>
          <p>
            Experience peace, wellness, and unforgettable moments surrounded by nature.
            </p>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>📧 support@natureheal.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 New Delhi, India</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/guide">Health Guide</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 NatureHeal. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;