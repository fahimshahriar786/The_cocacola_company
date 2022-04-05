import React from 'react'
import './Blogs.css'
function Blogs() {
    return (
        <div className='mt-5 container'>
            <div>
                <h1>What is contex API ?</h1>
                <p>The new React Context API, allows us to pass data through our component trees,
                     giving our components the ability to communicate and share data at different levels. </p>
            </div>

            <div>
                <h1>What are semantic tags in HTML?</h1>
                <p>Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.

For example, header, footer, article are considered semantic elements as they clearly describe their purpose and the type of content they should enclose.</p>
            </div>
        </div>
    )
}

export default Blogs