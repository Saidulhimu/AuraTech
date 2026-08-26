import React from 'react'
import Banner from '../components/home/Banner'
import FeatureProducts from '../components/home/FeatureProducts'
import UserReview from '../components/home/UserReview'
import Accordion from '../components/home/Accordion'

const Home = () => {
    return (
        <div>
            <Banner />

            <div className="container mx-auto ">

                <div className='my-22'>
                    <FeatureProducts />
                </div>


                <div className='my-22'>
                    <UserReview />
                </div>


                <div className="my-22">
                    <Accordion />
                </div>

            </div>
        </div>
    )
}

export default Home;