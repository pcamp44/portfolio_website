import emailIcon from '../assets/email.svg';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';

const contacts = [
    { href: 'mailto:paulinecampos13@gmail.com', label: 'Email', icon: emailIcon },
    { href: 'https://github.com/pcamp44', label: 'GitHub', icon: githubIcon },
    { href: 'https://www.linkedin.com/in/pauline-c-ab714a242/', label: 'LinkedIn', icon: linkedinIcon }
]

export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <h1>Thanks for visiting!</h1>
                <h6 className='subtitle'>✧ let's connect ✧
                </h6>
                <ul className='contact-links'>
                    {contacts.map(({href, label, icon}) => (
                        <li key={label}>
                            <a href={href} target='_blank' rel='noopener noreferrer' className='contact-link'>
                                <img src={icon} alt={`${label} icon`} className='icon' /> <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <h6 className='footer-credit'>&copy; Made by Pauline 2025</h6>
            </div>
        </footer>
    );
};