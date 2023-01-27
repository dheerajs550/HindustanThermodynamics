
import styles from '../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCom from './components/HomeCom';

export default function Home() {
  return (
    <div className={styles.container}>
   this is home
   <HomeCom/>
    </div>
  )
}
