import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import Controls from "./Controls.js";

test('it renders correctly', () => {
    render(<Controls />);
});

describe('controls btns closed & locked state ', () => {

    test('open / unlock', () => {
        const ControlsMock = jest.fn();
        const { queryByText } = render(<Controls locked={false}
            closed={false} toggleClosed={ControlsMock} />)

        const lockButton = queryByText('Lock Gate');
        // console.log(lockButton.disabled)
        expect(lockButton.disabled).toBe(true)

        const closeButton = queryByText('Close Gate');
        expect(closeButton.disabled).toBe(false)

        fireEvent.click(closeButton);
        expect(ControlsMock).toBeCalled()
    });

    test('closed / unlock', () => {
        const ControlsMock = jest.fn();
        const { queryByText } = render(<Controls locked={false}
            closed={true} toggleClosed={ControlsMock} />)

        const lockButton = queryByText('Lock Gate');
        expect(lockButton.disabled).toBe(false)

        const openButton = queryByText('Open Gate');
        expect(openButton.disabled).toBe(false)

        fireEvent.click(openButton);
        expect(ControlsMock).toBeCalled()
    });

    it('closed / locked', () => {
        const ControlsMock = jest.fn();
        const { queryByText } = render(<Controls locked={true}
            closed={true} toggleLocked={ControlsMock} />)

        const unlockButton = queryByText('Unlock Gate');
        expect(unlockButton.disabled).toBe(false)

        const openButton = queryByText('Open Gate');
        expect(openButton.disabled).toBe(true)

        fireEvent.click(unlockButton);
        expect(ControlsMock).toBeCalled()
    });

});