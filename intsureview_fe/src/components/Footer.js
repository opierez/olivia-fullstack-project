function Footer() {
  return (
    <footer className="fixed-bottom py-3 text-center">
        <div className="container">
            <p className="mb-0">© {new Date().getFullYear()} Lumi Foundation. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
