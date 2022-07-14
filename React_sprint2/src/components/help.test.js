import {render} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Help from "./Help";

describe("component", ()=>{
    
    it("rendered email", ()=>{
        const {getByTestId} = render(<BrowserRouter>< Help/></BrowserRouter>);
        const input = getByTestId("email");
        expect(input).toBeTruthy();
    });
    it("rendered name", ()=>{
        const {getByTestId} = render(<BrowserRouter>< Help/></BrowserRouter>);
        const input = getByTestId("name");
        expect(input).toBeTruthy();
    });
    it("rendered message", ()=>{
        const {getByTestId} = render(<BrowserRouter>< Help/></BrowserRouter>);
        const input = getByTestId("message");
        expect(input).toBeTruthy();
    });

    it("rendered Submit", ()=>{
        const {getByTestId} = render(<BrowserRouter><Help/></BrowserRouter>);
        const button= getByTestId("Submit");
        expect(button).toBeTruthy();
    });

})