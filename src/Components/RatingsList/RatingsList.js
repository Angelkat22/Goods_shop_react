
import styles from './RatingsList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingList = ({ rating }) => {
const x = {...rating}

// console.log(rating.rate)

	const ratingsResult = Math.round(x.rate)
	const ratingsStars = [];

	for (let index = 0; index < 5; index++) {

		let starsColor = index < ratingsResult ? 'yellow' : 'black)'

		ratingsStars.push(
			            <FontAwesomeIcon className={styles.star}
                                            icon={faStar}
                                            style={{ color: starsColor }}
			            />
		)
	}
	return (
		<ul className={styles.rating}>

			{
                ratingsStars.map((elem, index) => (
                    <li key={index}>
                        {elem}
                    </li>
			    ))
           }
		</ul>
	)
}

export default RatingList;