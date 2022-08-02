import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import SpinnerLoading	 from "./Spinner";


test('render content', () => {
    const component = render(<SpinnerLoading/>)

    component.getByText('Loading...')
} )
