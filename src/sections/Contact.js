export default function Contact() {
    return (
        <div id="contact">
            <div className="container">
                <div className="row" style={{display: 'flex', alignItems:'center'}}>
                    <div className="col-6">
                        <h1>Let's Chat</h1>
                    </div>
                    <div className="col-6">
                        <ul className="contact-links">
                            <li><a href="https://github.com/pcamp44" className="contact-link">GitHub</a></li>
                            <li><a href="mailto:paulinecampos13@gmail.com" className="contact-link">Email</a></li>
                            <li><a href="https://www.linkedin.com/in/pauline-c-ab714a242/" className="contact-link">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
