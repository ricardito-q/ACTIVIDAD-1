const axios = require('axios');
const colors = require('colors');

const obtenerLibrerias = async () => {
  try {
    const response = await axios.get('https://api.npms.io/v2/search?q=react');
    const libraries = response.data.results;

    console.log('Lista de Librerías:'.bgGreen.black);

    libraries.forEach((library, index) => {
      const { package: { name, description } } = library;
      console.log(`Librería ${index + 1}`.underline.red);
      console.log(`Nombre: ${name}`.cyan);
      console.log(`Descripción: ${description}`.yellow);
      console.log('='.repeat(50).grey);
    });
  } catch (error) {
    console.error('Error al traer datos:'.red, error);
  }
};

obtenerLibrerias();

