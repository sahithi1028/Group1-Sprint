import {render} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

describe("component", ()=>{
    
    it("rendered email", ()=>{
        const {getByTestId} = render(<BrowserRouter><ForgotPassword/></BrowserRouter>);
        const input = getByTestId("email");
        expect(input).toBeTruthy();
    });
    it("rendered newPassword", ()=>{
        const {getByTestId} = render(<BrowserRouter><ForgotPassword/></BrowserRouter>);
        const input = getByTestId("newPassword");
        expect(input).toBeTruthy();
    });

    it("rendered Submit", ()=>{
        const {getByTestId} = render(<BrowserRouter><ForgotPassword/></BrowserRouter>);
        const button= getByTestId("Submit");
        expect(button).toBeTruthy();
    });

})