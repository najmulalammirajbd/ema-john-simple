import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Course.css';


const Course = (props) => {
    // console.log(props);
    const { img, name, by, price, } = props.Course
    return (
        <div className="Course">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='Course-name'>{name}</h4>
                <br />
                <p><small>By:{by}</small></p>
                <p>${price}</p>
                <button className="main-button" onClick={() => props.handelAddCourse(props.Course)}><FontAwesomeIcon icon={faShoppingCart} />  Add To Card</button>
            </div>
        </div>
    );
};

export default Course;