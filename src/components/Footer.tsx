const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-xs text-background/70 mt-2">
          Built with passion for advancing global health through digital innovation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
