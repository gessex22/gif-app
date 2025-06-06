import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem>", () => {
  const title = "saitama";
  const url = "https://mrrobot.com/image/background.jpg";
  test("Debe hacer match snapchot", () => {
    const { container } = render(<GifItem  title={ title} url={url}/>);
    expect(container).toMatchSnapshot()

  });


  test('Debe de mostrar la imagen con el URL y el ALT indicado', ()=>{
    render(<GifItem title={title} url={url} />)
    const {alt,src} = screen.getByRole("img")
    expect(alt).toBe( title)
    expect(src).toBe( url)
  })

  test('Debe de mostrar el titulo del componente ', ()=>{
    render(<GifItem  title={title} url={url } />)
    //const {text} = screen.getByText(title).toBeTruthy()
    expect( screen.getByText(title)).toBeTruthy()
  })
});
