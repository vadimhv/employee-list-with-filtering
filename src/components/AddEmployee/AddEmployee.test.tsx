import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import AddEmployee, {Props} from "./AddEmployee";

function renderLoginForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        addEmployee() {
            return
        },
        onNameChange() {
            return
        },
        onLastNameChange() {
            return;
        },
        onPositionChange(){
            return;
        }
    };
    return render(<AddEmployee {...defaultProps} {...props} />);
}

describe("<AddEmployee />", () => {
    test("should display a blank login form", async () => {
        const { findByTestId } = renderLoginForm();

        const loginForm = await findByTestId("login-form");

        expect(loginForm).toHaveFormValues({
            name: "",
            lastName: "",
            position: ""
        });
    });

    test("should allow entering a name", async () => {
        const onNameChange = jest.fn();
        const {findByTestId} = renderLoginForm({onNameChange});
        const name =  await findByTestId("name");

        fireEvent.change(name, {target: {value: "test"}});

        expect(onNameChange).toHaveBeenCalled();
        expect(onNameChange).toHaveBeenCalledWith("test");
    })

    test("should allow entering a last name", async () => {
        const onLastNameChange = jest.fn();
        const {findByTestId} = renderLoginForm({onLastNameChange});
        const lastName =  await findByTestId("lastName");

        fireEvent.change(lastName, {target: {value: "test"}});

        expect(onLastNameChange).toHaveBeenCalled();
        expect(onLastNameChange).toHaveBeenCalledWith("test");
    })

    test("should allow entering a position", async () => {
        const onPositionChange = jest.fn();
        const {findByTestId} = renderLoginForm({onPositionChange});
        const position =  await findByTestId("position");

        fireEvent.change(position, {target: {value: "test"}});

        expect(onPositionChange).toHaveBeenCalled();
        expect(onPositionChange).toHaveBeenCalledWith("test");
    })

    test("should submit the form with name, last name and position", async () => {
        const addEmployee = jest.fn();
        const {findByTestId} = renderLoginForm({addEmployee});

        const name = await findByTestId("name");
        const lastName = await findByTestId("lastName");
        const position =  await findByTestId("position");
        const submit = await findByTestId("submit");

        fireEvent.change(name, {target: {value: "name"}});
        fireEvent.change(lastName, {target: {value: "lastName"}});
        fireEvent.change(position, {target: {value: "position"}});

        fireEvent.click(submit);

        expect(addEmployee).toHaveBeenCalled();
    })
});
