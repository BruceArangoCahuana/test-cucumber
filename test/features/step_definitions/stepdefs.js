const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const axios = require('axios');

let response;

Given('que accedo a la URL {string}', async function (url) {
  response = await axios.get(url);
});

Then('la respuesta de la API debe ser en formato JSON', function () {
  if (response.headers['content-type'].includes('application/json')) {
  } else {
    throw new Error('La respuesta no es de tipo JSON.');
  }
});



Then('el objeto "results" en la respuesta debe ser un arreglo', function () {
  if (response.data && Array.isArray(response.data.results)) {
    console.log('El objeto "results" es un arreglo en la respuesta.');
  } else {
    throw new Error('El objeto "results" no es un arreglo en la respuesta.');
  }
});

Then('dentro de "results" se encuntra "gender"', function () {
  if (response.data && Array.isArray(response.data.results)) {
    const resultado = response.data.results;
    const existe  = resultado.every(result => "gender" in result);
    if(existe){
      console.log('El objeto "results" tiene su atributo "gender".')
    } else{
      console.log('El objeto "results" no tiene su atributo "gender".')
    }
  } else {
    throw new Error('El objeto "results" no es un arreglo en la respuesta.');
  }
});

When('dentro de "gender" debe contener el {string}', function (sexo) {
  if (response.data && Array.isArray(response.data.results)) {
    const resultado = response.data.results;
    const existe = resultado.some(result => result.gender === sexo);
    if (existe) {
      console.log('El sexo es ' + sexo);
    } else {
      console.log('El sexo no es ' + sexo);
    }
  } else {
    throw new Error('El objeto "results" no es un arreglo en la respuesta.');
  }
});




