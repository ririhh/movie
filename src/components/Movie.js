import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';
import {Link} from 'react-router-dom';

const Movies = ({id, title, year, summary, poster, genres}) => {
    return (
        <div className='movie'>
            <Link to='/Detail/'>
                <img src={poster} alt={title} title={title}></img>
                <div className='movie_data'>
                    <h3 className='movie_title'>{title}</h3>
                    <h5 className='movie_year'>{year}</h5>
                    <h4>장르</h4>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => {
                            return <li key={index} className='movie_genre'>{genre}</li>
                        })}
                    </ul>
                    <p className="movie_summary">{summary.slice(0, 180)}</p>
                </div>
            </Link>
        </div>
    );
};

Movies.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movies;