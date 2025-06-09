import {fireEvent, render,screen} from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <addCategory', () => {

 test('should change the value on textbox', () => {
    
    render( <AddCategory  onNewCategory={()=>{}} />)
    
        const input = screen.getByRole('textbox')
        fireEvent.input(input , { target: { value: 'saitama'}})

        expect( input.value ).toBe('saitama')
    screen.debug()
    

   }) })