'use client'
import {useState} from 'react'
import styles from './mainContent1.module.css'
import {Lato} from 'next/font/google'
import ExploreNeighbour from './ExploreNeighbour.jsx'
import Locality from '@/components/property/maincontentcontainer/Locality'
import PopularProjects from './PopularProjects'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400','700','900']
})

function mainContent1() {

  const [showFull,setShowFull] = useState(false)
  const about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur a erat nam at lectus urna duis. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Enim ut sem viverra aliquet eget. Facilisis mauris sit amet massa. Ultrices dui sapien eget mi proin sed. Sapien nec sagittis aliquam malesuada bibendum. Suspendisse interdum consectetur libero id faucibus. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Eu sem integer vitae justo eget. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Enim praesent elementum facilisis leo. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Leo vel fringilla est ullamcorper eget nulla. Libero volutpat sed cras ornare arcu dui vivamus. Ipsum dolor sit amet consectetur. Ultrices vitae auctor eu augue ut lectus arcu. Urna duis convallis convallis tellus id interdum velit laoreet. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Viverra tellus in hac habitasse."
  const locality ={
    introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Sodales ut eu sem integer vitae justo eget. Nulla facilisi morbi tempus iaculis urna id volutpat. Morbi tristique senectus et netus. Interdum velit laoreet id donec ultrices tincidunt. Ac tortor dignissim convallis aenean et tortor at risus. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Ultrices sagittis orci a scelerisque purus semper. Placerat vestibulum lectus mauris ultrices eros in.',
    Pros: ['Ample Supply of ready-to-move-in premium 3BHK and 4BHK apartments.','Served by Greater Kailash Metro Station along the Magenta line of Delhi. The violet Line is nearby too.','N block and M block markets are popular shopping centres and retail centres in South Delhi'],
    Cons: ['Ample Supply of ready-to-move-in premium 3BHK and 4BHK apartments.','Served by Greater Kailash Metro Station along the Magenta line of Delhi. The violet Line is nearby too.','N block and M block markets are popular shopping centres and retail centres in South Delhi'],
  }

  return (
    <div className={styles.mainContainer} style={lato.style}>
      <div className={styles.mainContainerHead}>
        <h1>Sector 37D, Gurgaon</h1>
        <h6>Pin Code: 122505</h6>
      </div>
      <div className = {styles.mainContainerLine}></div>
      <div className={styles.mainContainerContent}>
        <h5>About Locality</h5>
        <p>{showFull?about:`${about.substring(0,600)}`}</p>
        <h6 onClick={()=>setShowFull(!showFull)}>{showFull? 'Show Less':'Show More'}</h6>
      </div>
      <div>
        <h5> Explore Neighbourhood </h5>
        <ExploreNeighbour/>
      </div>
      <div>
        <h5> Key Highlights of sector 37D, Gurgaon </h5>
        <Locality desc = {false} localityData={locality}/>
      </div>
      <div>
        <h5>Popular Projects in Sector 37D</h5>
        <PopularProjects/>
      </div>
    </div>
  )
}

export default mainContent1