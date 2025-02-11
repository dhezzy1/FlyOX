import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <p>Contact Us: <a href="tel:+123456789">+2348154985891</a> | <a href="mailto:support@dhezzyairline.com">support@airdhezzy.com</a></p>
                </div>
                <div className="quick-links">
                    <a href="/faqs">FAQs</a>
                    <a href="/terms">Terms and Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/booking">Booking Information</a>
                </div>
                <div className="social-media">
                    <a href="https://dhezzy@facebook.com" target="_blank" 
rel="noopener noreferrer">Facebook</a>
                    <a href="https://dhezzygram@twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://dhezzygram@instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="newsletter-signup">
                    <form>
                        <input type="email" placeholder="Subscribe to our newsletter" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 AirDhezzy . All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
