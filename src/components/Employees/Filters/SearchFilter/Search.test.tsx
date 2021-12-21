import React from "react";
import {fireEvent, render} from "@testing-library/react";

import SearchFilter, {Props} from "./SearchFilter";

function renderLoginForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        employeeFilter() {
            return
        }
    };
    return render(<SearchFilter {...defaultProps} {...props} />);
}

describe("<SearchFilter />", () => {
    test("should display a blank input to filter", async () => {
        const { findByTestId } = renderLoginForm();

        const loginForm = await findByTestId("filter");

        expect(loginForm).toHaveFormValues({
            filterInput: ""
        });
    });

    test("should allow entering data to filter", async () => {
        const employeeFilter = jest.fn();
        const {findByTestId} = renderLoginForm({employeeFilter});

        const filter = await findByTestId("filterInput");

        fireEvent.change(filter, {target: {value: "test"}});

        expect(employeeFilter).toHaveBeenCalledWith("test");
    })
});
