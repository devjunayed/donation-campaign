import PropTypes from 'prop-types';
import './Banner.css';


const Banner = ({ setCategory }) => {


    const handleSearch = e => {
        e.preventDefault();
       setCategory(e.target.search.value);
       e.target.search.value = "";
    }
    return (
        <div className="banner-container">
            <div className='hero-overlay md:py-40 py-28 lg:py-52 bg-white bg-opacity-95 flex flex-col justify-center items-center'>
                <h2 className='text-xl md:text-3xl lg:text-5xl font-bold mb-6 text-center m-2 '>I Grow By Helping People In Need</h2>

                <form onSubmit={handleSearch} className='flex justify-center w-full gap-0 items-center m-4'>
                    <input type="text" name='search' onChange={handleSearch} className='px-4 py-3 border-2 h-full' placeholder='Search here...' />
                    <button className='py-0 btn h-4 bg-[#FF0404] hover:bg-[#a84a4a] text-white rounded-none rounded-e-xl'>Search</button>
                </form>

            </div>
        </div>
    );
};

Banner.propTypes = {
    setCategory: PropTypes.func
}
export default Banner;