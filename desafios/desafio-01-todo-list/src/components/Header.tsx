import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <h1>
                <img src={rocketLogo} alt="Rocket Logo" />
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
            </h1>
        </header>
    )
}
