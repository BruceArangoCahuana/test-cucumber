Feature: Verificar respuesta JSON de una API

  Scenario: Acceder a la URL y verificar que la respuesta sea en formato JSON
    Given que accedo a la URL "https://randomuser.me/api/"
    Then la respuesta de la API debe ser en formato JSON
    And el objeto "results" en la respuesta debe ser un arreglo
    And dentro de "results" se encuntra "gender"


  Scenario Outline: Verificar el género en la respuesta
    When dentro de "gender" debe contener el '<sexo>'

    Examples:
      | sexo  |
      | male  |
      | female |

