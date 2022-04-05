import React from 'react'
import { Link } from 'react-router-dom'
import useReview from '../../Hook/useReview'
import Card from '../Review/Card/Card'
import './Home.css'
import product from './images/cokacola.jpg'
function Home() {
    const [reviews , setReview]  = useReview()
    return (
        <section className='container'>
           <div className="header">
           <div className='header-content '>
                <h1>The World's Largest Nonalcoholic Beverage Company</h1>
                <h2>Our company’s purpose is to refresh the world and make a difference. Our portfolio of brands includes Coca-Cola, Sprite, Fanta and other sparkling soft drinks.</h2>
                
            </div>
            <div className='image'>
                <img src={product} alt="" />
            </div>
           </div>
            

           <div className="reviews container">
            <h1 className='review-heading'> Public Reviews</h1>
            <div className="review">

               {
                   reviews.slice(0,3).map(review => {
                      return(
                          <Card key={review.id} review={review}/>
                      )
                   })
               }

                
            </div>
            <Link className='btn btn-danger rounded-pill  mt-5' to="/review">See All Reviews</Link>
        </div>



        </section>
    )
}

export default Home