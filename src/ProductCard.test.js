import { render, screen } from "@testing-library/react"
import ProductCard from "./ProductCard"

describe("ProductCard", () => {
    test("render the product image, title, description", () => {
        render(<ProductCard title="Phone" description="dajkbk" imageurl="edds" />)
        let h1 = screen.getAllByDisplayValue(/Phone/i)
        expect(h1).toBeInDocument()
    })
})