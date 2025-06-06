// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

import { checkPropTypes } from 'prop-types';

// Opción 1: Convertir warnings de PropTypes en errores (recomendado)
const originalConsoleError = console.error;
console.error = (message) => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message); // Falla el test si hay PropTypes inválidas
  }
  originalConsoleError(message);
};

// Opción 2: Mock de console.error (alternativa)
jest.spyOn(console, 'error').mockImplementation((message) => {
  if (!message.includes('Failed prop type')) {
    console.error(message); // Permite otros errores
  }
});