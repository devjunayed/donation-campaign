import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donation = ({ donationItem }) => {

    return (
        <div className="flex shadow-xl" style={{ backgroundColor: `${donationItem.styles.cardBg}` }}>
            <img src={donationItem.thumbnail} className='w-6/12' alt="Shoes" />
            <div className="p-4 space-y-2">

                <h2 className={`text-center inline px-4 py-1 rounded-md`} style={{ background: `${donationItem.styles.categoryBg}`, color: `${donationItem.styles.textColor}` }}>{donationItem.category}</h2>


                <h2 className="card-title">{donationItem.title}</h2>
                <p style={{ color: `${donationItem.styles.textColor}` }}>$290</p>
                <div className="card-actions">
                    <Link to={`/donate/${donationItem.id}`}>
                        <button className="text-white px-4 py-2 rounded-md" style={{ background: `${donationItem.styles.textColor}` }}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Donation.propTypes = {
    donationItem: PropTypes.object
}

export default Donation;