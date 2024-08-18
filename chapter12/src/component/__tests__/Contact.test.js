 import Contact from '../Contact'
 import {render, screen} from '@testing-library/react'
 import "@testing-library/jest-dom"

describe("Contact Us Page Test Case", () => {
   it("should load contact us componetn", () => {
      render(<Contact />);

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
   });

   it("should load Button us componetn", () => {
      render(<Contact />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
   });
    
   // it("should load 2 input box us componetn", () => {
   //    render(<Contact />);

   //    const inputBoxes = screen.getAllByRole("textbox");

   //    console.log(inputBoxes);

   //    expect(inputBoxes.length).toBe();
   // });

})