/* import { Form, FormGroup, Label, Input, Button } from "reactstrap"; */

export default function Contact() {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <h1>Let's Chat</h1>
                    <div className="col" >
                        <ul>
                            <li><a href="https://github.com/pcamp44" className="contactLink">GitHub</a></li>
                            <li><a href="mailto:paulinecampos13@gmail.com" className="contactLink">Email</a></li>
                            <li><a href="https://www.linkedin.com/in/pauline-c-ab714a242/" className="contactLink">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div className="col" style={{display:'flex', alignItems:'flex-end', justifyContent:'right'}}>
                        <p>Thanks for visiting :)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
