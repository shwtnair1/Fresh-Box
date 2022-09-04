import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <a href="/" title="Home">
        <img height="30px" src="/HelloFreshLogo.png" alt="HelloFresh Logo" />
      </a>
    </div>
  );
}

export default Header;
