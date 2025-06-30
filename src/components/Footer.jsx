import { Image } from '@imagekit/react';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <h1>Thanks for visiting!</h1>
                <ul className="contact-links">
                    <li><Image urlEndpoint='https://ik.imagekit.io/1h1de1d5x' src='/static/email.svg' alt="email icon" /><a href="mailto:paulinecampos13@gmail.com" className="contact-link">Email</a></li>
                    <li><Image urlEndpoint='https://ik.imagekit.io/1h1de1d5x' src='/static/github.png' alt="GitHub logo" /><a href="https://github.com/pcamp44" className="contact-link">GitHub</a></li>
                    <li><Image urlEndpoint='https://ik.imagekit.io/1h1de1d5x' src='/static/linkedin.svg' alt="LinkedIn logo" /><a href="https://www.linkedin.com/in/pauline-c-ab714a242/" className="contact-link">LinkedIn</a></li>
                </ul>
                <h5>Built by Pauline 2025</h5>
            </div>
        </div>
    );
};
