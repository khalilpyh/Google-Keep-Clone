export default function Footer() {
    //get the current year
    const date = new Date()
    const currentYear = date.getFullYear();

    return (
      <footer >
        <p>Copyright &#169;{currentYear} Yuhao Peng </p>
      </footer>
    );
  }
  