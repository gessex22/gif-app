import { render,screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/gifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid', ()=>{

    const category = 'One Punch'

    test('Debe de mostrar el Loading.. inicialmente', ()=>{
    
    
    useFetchGifs.mockReturnValue ( {
        images : [],
        isLoading : true
    })
    
        render(<GifGrid category={category} />)
       expect( screen.getByText('cargando...'))
       expect( screen.getByText(category))

    
    })

    test('should of show item when is loaded images using  useFetchGifs', ()=>{

    const gifs = [
    {
        id: 'ABC',
        title : 'Saitama',
        url: 'https://localhost/gisaitama.gif'
    
    },
    {
        id: '123',
        title : 'Batman',
        url: 'https://localhost/Batman.gif'
    
    }]

    useFetchGifs.mockReturnValue ( {
        images : gifs,
        isLoading : false
    })

        render( <GifGrid  category={ category}/>)
        expect( screen.getAllByRole('img').length).toBe(2)
        
    
    
    })


})