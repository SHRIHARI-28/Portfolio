const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex justify-center items-center gap-6">
  <div className="social-icon">
    <a href="https://github.com/SHRIHARI-28" target="_blank" rel="noopener noreferrer">
      <img src="/assets/github.svg" alt="github" className="w-10 h-10" />
    </a>
  </div>
  <div className="social-icon">
    <a href="https://x.com/ShrihariJagtap1?t=oq3CmIJ3Q9q36RBG33tFeg&s=08 " target="_blank" rel="noopener noreferrer">
      <img src="/assets/X_logo.jpg" alt="twitter" className="w-10 h-10" />
    </a>
  </div>
  <div className="social-icon">
    <a href="https://www.instagram.com/_shrihari_jagtap/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/instagram.svg" alt="instagram" className="w-10 h-10" />
    </a>
  </div>
</div>

      <p className="text-white-500">© 2025 Shrihari Jagtap. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
