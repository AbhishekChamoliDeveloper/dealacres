"use client"
import styles from './maincontent2.module.css'
import {Lato} from 'next/font/google'
import Cities from '@/components/Homepage/Cities/Cities'
import InsightReview from './InsightReview'
import Hotspots from './Hotspots'
import Photos from './Photos'
import Topdev from './Topdev'
import Guides from '@/components/blog/guides/Guides'
import IntrestingReading from './IntrestingReads'
import FAQ from '@/components/property/maincontentcontainer/FAQ'
import {data} from './dummydata';
import GuideCard from '@/components/blog/guides/GuideCard'
import LocationGuides from './LocationGuides'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400','700','900']
})

const guidesData = [
    {
      "title": "Buyer's Guide",
      "img": "buyers-guide.png",
      "bgColor": "#FADDC6",
      "borderColor": "#F6C094",
      "textColor": "#F6A05A",
      "content": "Are you looking to buy your first home? Our Buyer's Guide will help you make informed decisions. Whether you prefer a luxurious apartment or a cozy villa, this guide covers it all. Explore financing options, understand the home buying process, and gain valuable insights into property inspections and negotiations."
    },
    {
      "title": "Seller's Guide",
      "img": "sellers-guide.png",
      "bgColor": "#FFF5D8",
      "borderColor": "#FFEBB0",
      "textColor": "#FDBD00",
      "content": "Ready to sell your property? Our Seller's Guide provides valuable insights and tips to maximize your property's value. Get started with confidence. Learn about pricing strategies, home staging, and marketing techniques to attract potential buyers. Navigate the selling process with ease."
    },
    {
      "title": "Rental Guide",
      "img": "rental-guide.png",
      "bgColor": "#F1F8D7",
      "borderColor": "#D3E1A0",
      "textColor": "#95BD00",
      "content": "Looking for a rental property? Our Rental Guide simplifies the process, helping you find the perfect place. Explore your options with ease. Learn about rental agreements, tenant rights, and tips for a smooth move-in process. Make informed decisions when renting your next home."
    },
    {
      "title": "Home Interior",
      "img": "home-interior-guide.png",
      "bgColor": "#F6E6FA",
      "borderColor": "#CB6CE6",
      "textColor": "#CB6CE6",
      "content": "Transform your home's interior with our Home Interior Guide. Discover trendy decor ideas and create a space you'll love. Explore the latest interior design trends, color schemes, and furniture selection tips. Turn your house into a stylish and comfortable haven."
    },
    {
      "title": "Home Vastu",
      "textColor": "#38B6FF",
      "img": "home-vastu-guide.png",
      "bgColor": "#E4FAFA",
      "borderColor": "#38B6FF",
      "content": "Enhance the harmony of your home with Vastu principles. Our Home Vastu Guide offers insights for a balanced and positive living environment. Learn about the significance of directions, Vastu dos and don'ts, and practical tips for a Vastu-compliant home."
    }
  ]
function MainContent2() {
  return (
    <div className={styles.mainContainer2} style={lato.style}>
        <div>
            <h5>Explore nearby localities</h5>
            <Cities/>
        </div>
        <InsightReview/>
        <div>
            <h5>Hotspots in Gurgaon</h5>
            <Hotspots/>
        </div>
        <div>
            <h5>Photos</h5>
            <Photos/>
        </div>
        <div>
            <h5>Top Developers in Sector 37D</h5>
            <Topdev/>
        </div>
        <div className=''>
            <h5>Start with these guides</h5>
            <LocationGuides guides={guidesData}/>

            <div className='grid grid-cols-5 gap-8 '>
            {/* {
                guidesData.map((guide, index) => {
                    return (<div className="col-span-1" key={index}>
                        <GuideCard variableWidth title={guide.title} img={guide.img} borderColor={guide.borderColor} bgColor={guide.bgColor} textColor={guide.textColor}/>
                    </div>)
                })
            } */}
            </div>
        </div>
        <div>
            <h5>Interesting Readings</h5>
            <IntrestingReading />
        </div>
        <div>
            <h5>Frequently Asked Questions</h5>
            <FAQ  faqdata = {data.mainContent.FaqData} />
        </div>
    </div>
  )
}

export default MainContent2