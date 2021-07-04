import {RatingProps} from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from './img/Star.svg';
import {useEffect, useState, KeyboardEvent} from "react";

export const Rating = ({isEditable = false,rating,setRating,...props}:RatingProps):JSX.Element => {
    const [ratingArray,setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return;
        }
        constructRating(i);
    };
    const clickRating = (i:number) => {
        if(!isEditable || !setRating){
            return;
        }
        setRating(i);
    };
    const handleSpace = (i: number, event: KeyboardEvent<SVGElement>) => {
        if(event.code !== 'Space' || !setRating){
            return;
        }
        setRating(i);
    };
    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r:JSX.Element, i:number) => {
            return (
                <span
                    className={
                        cn(styles.star, {
                            [styles.filled]: i < currentRating,
                            [styles.editable]: isEditable,
                        })}
                    onMouseEnter={() => (changeDisplay(i + 1))}
                    onMouseLeave={() => (changeDisplay(rating))}
                    onClick={() => clickRating(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(event: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, event)}
                    />
                </span>);
        });
        setRatingArray(updatedArray);
    };

    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    return (
        <div
            {...props}
        >
            {ratingArray.map((rating:JSX.Element,index:number) => (<span key={index}>{rating}</span>))}
        </div>
    );
};