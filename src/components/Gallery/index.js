import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
    const { currentCategory } = props;
    const {name, description} = currentCategory;
    
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{capitalizeFirstLetter(description)}</p>
            <PhotoList category={name} />
        </section>
    );
}

export default Gallery;