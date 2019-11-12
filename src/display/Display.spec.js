// Test away! 	
import React from "react"
import { render } from "react-testing-library"
import "react-testing-library/cleanup-after-each";
import Display from "./Display";

test('display renders correctly', () => {
    render(<Display />);
});

describe('<Display />', () => {
    test('Shows unlocked open green color ', () => {
        const { getByText } = render(<Display />);
        expect(getByText('Unlocked'));
        expect(getByText('Open'));

        const lockState = getByText('Unlocked');
        const OpenState = getByText('Open');

        expect(lockState.classList.value).toContain('green-led');
        expect(OpenState.classList.value).toContain('green-led');

    })
    test('Changes state through props red color', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        expect(getByText('Locked'));
        expect(getByText('Closed'));

        const lockState = getByText('Locked');
        const OpenState = getByText('Closed');

        expect(lockState.classList.value).toContain('red-led');
        expect(OpenState.classList.value).toContain('red-led');
    })
})