import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from "@testing-library/react";
import CardHome from './Card';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
  }));

describe('<CardHome/>', () => {
    let component;

    const mockHandler = jest.fn();

    beforeEach(() => {
        component = render(<CardHome  
            id={"Esto es un ID"}
            img={"public/logo512.png"}
            title={"Esto es un título"}
            date={"Esto es una fecha"}
            onClick={mockHandler}/>
            )
    })

    test('render content', () => {
        component.getByText('Esto es un título')
        component.getByText('Esto es una fecha')
    } )
    
    test('clicking the button calls event handler once', () => {
    
        component.getByText('Esto es un título')
        component.getByText('Esto es una fecha')
    
        const button = component.getByText('Leer más')
        fireEvent.click(button)
    
        expect(mockHandler.mock.calls).toHaveLength(1)
    })
})
