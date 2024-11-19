import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe('Greet', ()=>{
    test('renders correctly', ()=>{
        render(<Greet/>)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })
    test('renders with name', ()=>{
        render(<Greet name='Gypsee'/>)
        const textElement = screen.getByText(/hello gypsee/i)
        expect(textElement).toBeInTheDocument()
    })
})
