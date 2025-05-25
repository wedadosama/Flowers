import styles from "./Header.module.css";
import logo from "../../../public/images/logo.png"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.text}>
            <div>Museum of</div>
            <div>Red Flowers</div>
          </div>
        </div>
        <nav className={styles.nav}>
          <a href="#">Exhibitions</a>
          <a href="#">About</a>
          <a href="#">Store</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
