import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li ><a href="#home" className={styles.navLink}>Home</a></li>
                <li ><a href="#about" className={styles.navLink}>About</a></li>
                <li ><a href="#skills" className={styles.navLink}>Skills</a></li>
                <li ><a href="#projects" className={styles.navLink}>Projects</a></li>
                <li ><a href="#Contact" className={styles.navLink}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;