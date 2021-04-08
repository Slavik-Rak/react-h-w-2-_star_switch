import React, { useState} from 'react'
import './star.css';

import 'font-awesome/css/font-awesome.min.css';


export const Star = () => {

    // let arrStars = ["one", "two", "three", "for", "five"];

    const [someVal, chengStar] = useState(["fa fa-star ONeStar"]);

    const changeStar = () => {
        chengStar(someVal + ' ONeStarActive');
    }

    return (
        <div className="blockStar">
            <div><i id="one" className={someVal}/></div>
            <div><i id="two" className={someVal}/></div>
            <div><i id="three" className={someVal}/></div>
            <div><i id="for" className={someVal}/></div>
            <div><i id="five" className={someVal} onClick={changeStar}/></div>
        </div>


    )
}
