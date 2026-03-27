import{render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Movie from "../components/Movie";

test ("Movie list headings rendering", ()=>{
    render(
        <BrowserRouter>
        <Movie/>
        </BrowserRouter>
    );

    expect(screen.getByText(/Movies/i)).toBeInTheDocument();
});