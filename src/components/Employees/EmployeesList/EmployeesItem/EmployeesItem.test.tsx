import React from "react";
import {render} from "@testing-library/react";

import EmployeesItem, {Props} from "./EmployeesItem";

function renderLoginForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        employee: {id: 1, name: 'testName', lastName: 'testLastName', position: 'testPosition'},
        onDeleteEmployee() {
            return;
        }
    };
    return render(<EmployeesItem {...defaultProps} {...props} />);
}

describe("<EmployeesItem />", () => {
    test("should render employee data", async () => {
        const { findByTestId } = renderLoginForm();

        const name = await findByTestId("name");
        const lastName = await findByTestId("lastName");
        const position = await findByTestId("position");

        expect(name.textContent).toBe('testName');
        expect(lastName.textContent).toBe("testLastName");
        expect(position.textContent).toBe("testPosition");
    });
});
