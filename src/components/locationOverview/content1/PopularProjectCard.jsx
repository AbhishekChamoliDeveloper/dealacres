import styles from './popularProjectCard.module.css'
import Image from 'next/image'
import {BsCurrencyRupee} from 'react-icons/bs'

function PopularProjectCard() {
  return (
    <div className={styles.popularProjectCardContainer}>
        <div className={styles.ImgCont}>
            <Image
                src='/locationOverview/locationPic.jpg'
                alt="Property Image"
                layout="fill"
                style={{objectFit:"cover"}}
            />
        </div>
        <div className={styles.popularCardContentContainer}>
            <h4>M3M 57th Suites</h4>
            <p>By M3M Pvt. Ltd <br/>Studio Studio Flat <br/>Sector 57th, Gurgaon</p>
            <h3><BsCurrencyRupee style={{display:'inline'}}/>1.46Cr*</h3>
        </div>
        <div className={styles.popularCardBtnContainer}>
            <button>Explore</button>
        </div>
    </div>
  )
}

export default PopularProjectCard