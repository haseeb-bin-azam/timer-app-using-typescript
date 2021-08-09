import React from 'react';
import { shallow } from "enzyme";
import TimerButton from "./TimerButton";

describe('TimerButton', () => {
    let container;

    beforeEach(() => {
        container = shallow(
            <TimerButton 
                buttonAction={jest.fn()} //bcz we are expection function
                buttonValue={''} // bcz we are expecting string
            />
        )
    });

    it('should render a <div />', () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1);
    });

    
});
