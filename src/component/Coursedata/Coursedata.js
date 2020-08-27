import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Coursedata.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [course , setCourse] = useState(first10);
    const [cart , setCart] = useState([])
       
    const handelAddCourse = (course) => {
        const newCart = [...cart,course];
        setCart(newCart);
    }

    return (
        <div className="course-container">
        <div className="courseContainer">
            {
                course.map(pd => <Course
                    handelAddCourse = {handelAddCourse} 
                     Course={pd}>
                     </Course>)
            }
        </div>
        <div className="card-container">
          <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;