import {fireEvent, render,screen} from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <addCategory', () => {

 test('should change the value on textbox', () => {
    
    render( <AddCategory  onNewCategory={()=>{}} />)
    
        const input = screen.getByRole('textbox')
        fireEvent.input(input , { target: { value: 'saitama'}})

        expect( input.value ).toBe('saitama')
    screen.debug()
    

   })
   
   
    test('Submit del form Should call onNewCategory si tiene un valor' , ()=>{

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()


        render( <AddCategory onNewCategory={   onNewCategory }  />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input , { target: { value: 'Saitama'}})
        fireEvent.submit( form )
        

        expect(input.value).toBe("")
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

    
    
    
    })

    test('Submit del form Shouldn`t call onNewCategory si NO tiene un valor' , ()=>{

        const onNewCategory = jest.fn()


        render( <AddCategory onNewCategory={   onNewCategory }  />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input , { target: { value: ''}})
        fireEvent.submit( form )
        

        expect(input.value).toBe("")
           expect(onNewCategory).toHaveBeenCalledTimes(0)
        expect(onNewCategory).not.toHaveBeenCalled()


    
    
    
    })
   
    })