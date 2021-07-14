# Desafío #09 API RESTful

### Consigna:  
Sobre el proyecto entregable de la clase anterior, incorporar las siguientes rutas:
- Actualizar un producto (put) : '/api/productos/:id' -> devuelve producto actualizado

- Borrar un producto (delete) : '/api/productos/:id' -> devuelve producto eliminado

```
{
  title: (nombre del producto),
  price: (precio),
  thumbnail: (url al logo o foto del producto)
}
```

## Aspectos a incluir en el entregable:
### Implementar las rutas put y delete junto a las funciones necesarias (utilizar la estructura ya creada).

- Incorporar el Router de express en la url base '/api' y configurar todas las subrutas en base a este.

- Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.

- Probar la funcionalidad con Postman y el formulario de ingreso de datos.


## Ejemplo para consumir el EP que actualiza un producto:

```
curl --location --request PUT 'localhost:8080/api/productos/2' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "title": "manzana",
        "price": "222",
        "thumbnail": "dsafwea"        
    }
]'
```

## Ejemplo para consumir el EP que borra un producto:

```
curl --location --request DELETE 'localhost:8080/api/productos/2'
```