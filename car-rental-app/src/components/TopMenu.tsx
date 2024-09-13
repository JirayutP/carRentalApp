import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import Link from 'next/link'

export default function TopMenu() {
    return(
        <div className={styles.menucontainer}>
            <Link href="/">
                <Image src={'/img/logo.png'} className={styles.logoimg} 
                alt='logo'
                width={0}
                height={0}
                sizes='100vh'/>
            </Link>
            <TopMenuItem title='Reservation' pageRef='/reservations'/>
            <TopMenuItem title='Manage' pageRef='/reservations/manage'/>
            <TopMenuItem title='About' pageRef='/about'/>
            <TopMenuItem title='Car' pageRef='/car'/>
        </div>
    )
}