// Test away
import React from "react"
import { render, fireEvent } from "react-testing-library"
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";


test('Dashboard renders correctly', () => {
    render(<Dashboard />);

});

test('Dashboard renders display & controls component', () => {
    render(<Dashboard />);
    const component = render(<Dashboard />);
    const display = component.container.querySelector('.display');
    expect(display).toBeTruthy();
    const controls = component.container.querySelector('.controls');
    expect(controls).toBeTruthy();
});