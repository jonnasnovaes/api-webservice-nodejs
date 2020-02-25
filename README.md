<p align="center">
  <img width="400" heigth="400" src="https://user-images.githubusercontent.com/34194789/73881252-c2b47500-483e-11ea-84fd-9a85ad55c3e4.png" />
</p>


# Web Service

A simple model of WebService with Node.js. This WebService allows you to view the data from the Brazilian municipialities using the following URLs:


`ddns:port/` - Return the server status</br>
`ddns:port/ws` - Return the all data from municipiality</br>
`ddns:port/ws/<name_of_municipialities>` - Return the all data from all municipialities

### Example of request

```
{
  result: {
    Propriedade: "Jhonnata Novaes",
    Versão: "1.0.1",
    Data: "25/2/2020",
    Hora: "19:50",
    Ip: "::1",
    REGISTROS: [
          {
            codigo_ibge: "3303302",
            nome: "Niterói",
            latitude: "-22.8832",
            longitude: "-43.1034",
            capital: "0",
            codigo_uf: "33"
          } 
       ]
  }
}

```


# Version

* 1.0.2

# News

* Generated logs
* Create the bat of inicializated server
* Get IP of user and input in header of request
* Centered the function responsable for generate the header of json
* Integrated application with database mysql
* Implemented colors for server status
* Added function that returns all counties
* Added resource that enable basic authentication  


# Dependences

* nodeJS: ^12.14.0
* express: ^4.17.1
* express-basic-auth: ^1.2.0
* cli-color: ^2.0.0
* sync-mysql: ^3.0.1
    

# License

Distributed about license MIT. Look `LICENSE` for more informations. 
