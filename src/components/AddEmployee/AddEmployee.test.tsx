import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import AddEmployee, {Props} from "./AddEmployee";

function renderLoginForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        addEmployee() {
            return;
        },
        employees: [
            {id: 0, name: 'John', lastName: 'Doe', position: 'manager'},
            {id: 1, name: 'Peter', lastName: 'Doe', position: 'manager'},
            {id: 2, name: 'Andrew', lastName: 'Doe', position: 'manager'},
            {id: 3, name: 'Roman', lastName: 'Goe', position: 'manager'},
        ]
    };
    return render(<AddEmployee {...defaultProps} {...props} />);
}

describe("<AddEmployee />", () => {
    test("should display a blank login form, with remember me checked by default", async () => {
        const { findByTestId } = renderLoginForm();

        const loginForm = await findByTestId("login-form");

        expect(loginForm).toHaveFormValues({
            name: "",
            lastName: "",
            position: ""
        });
    });
});
