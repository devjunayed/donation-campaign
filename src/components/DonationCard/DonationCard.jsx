import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const DonationCard = ({ data }) => {

    const { id, thumbnail, category, title, styles} = data;

    return (
        <Link to={`donate/${id}`}>
           <div className="card shadow-xl " style={{background: `${styles.cardBg}`}}>
            <img className='w-full' src={thumbnail} alt={`thumbnail-${title}`} />
            <div className="p-4 " >
                <h2 className={ `text-center inline px-4 py-1 rounded-md`} style={{background: `${styles.categoryBg}`, color: `${styles.textColor}`}}>{category}</h2>
                <p className='text-xl mt-2' style={{color: `${styles.textColor}`, fontWeight: 'bold'}}>{title}</p>
            </div>
        </div>
        </Link>
     
    );
};

DonationCard.propTypes = {
    data: PropTypes.object
}

export default DonationCard;