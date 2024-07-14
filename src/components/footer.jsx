const Footer = () => {
  return (
    <div className="bg-background w-full z-20">
      <div className="container flex items-center text-center justify-center h-[4.5rem] md:h-[5rem] text-sm font-[300] text-rich-palette">
        &copy; {new Date().getFullYear()} by Anson Benny
      </div>
    </div>
  );
};

export default Footer;
