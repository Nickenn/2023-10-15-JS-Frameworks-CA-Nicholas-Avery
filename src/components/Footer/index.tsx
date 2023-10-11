function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {currentDate} Gadgets'n'Stuff </p>
    </footer>
  );
}
export default Footer;
