import './footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-container">
                <div className="brand">
                    <h2 className="brand-title">Tesa Cafe</h2>
                    <p className="brand-sub">คาเฟ่บรรยากาศอบอุ่น</p>
                </div>

                <div className="footer-social" aria-label="Social links">
                    <a href="#" aria-label="Facebook">Facebook</a>
                    <a href="#" aria-label="Instagram">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;