import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModel = jest.fn();
const currentPhoto = { 
    name: "Panoramic village by sea", 
    category: 'landscape', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 3
}

afterEach(cleanup);

describe('Modal is rendering', () => {
    it('renders', () => {
        render(<Modal
            onClose={mockToggleModel}
            currentPhoto={currentPhoto}
        />);
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Modal onClose={mockToggleModel} currentPhoto={currentPhoto}  />)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe('Click Event', () => {
    it('Calls onClose handler', () => {
        const { getByText } = render(<Modal onClose={mockToggleModel} currentPhoto={currentPhoto} />);
        fireEvent.click(getByText('Close this modal'))

        expect(mockToggleModel).toHaveBeenCalledTimes(1);
    });
})
