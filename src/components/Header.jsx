import styles from '../style/Header.module.css'
const Header = () => {
return (<header className={styles.header}>
  <h1>Todos</h1>
  <p>Item will persist in browser local storage</p>
</header>)
};

export default Header;