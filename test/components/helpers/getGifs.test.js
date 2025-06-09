import { getGifs } from "../../../src/helpers/getGifs";

describe("Pruebas en getGif", () => {
  
  test("Debe de retornar un arreglo de gif", async () => {
    const gif = await getGifs("One Punch");

    expect(gif.length ).toBeGreaterThan(0)
    expect(gif[0]).toEqual( {
        id: expect.any(String),
        title: expect.any( String),
        url: expect.any(String),
    })
  });

 });
