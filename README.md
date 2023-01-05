# API CRUD de One Piece

Este é um projeto onde foi feito um CRUD API de One piece feito para estudo de NodeJS.


## Pré requisitos

NodeJS

## Instalação

##### Clone o repositório

```
$ git clone 
```

##### Instale as dependências na pasta do projeto

```
$ npm install
```

##### Inicie o back-end do projeto

Crie um arquivo  `.env`  a partir de  `.env.example`  fornecendo a  **`PORT`**

```
$ npm start 
```

## Rotas da API

-   `/character`  
	 - `POST` Recebe um JSON e cria um personagem.
	- `GET`  Retorna uma lista com todos os personagens.
	
-   `/character/:id`
	- `PUT`Recebe um JSON e atualiza um personagem.
	 - `GET` Retorna um personagem especificado pelo ID.
    - `DELETE`Deleta um personagem especificado pelo ID.
    
-   `/locale`
- 	- `POST`Recebe um JSON e cria um local.
	 - `GET` Retorna uma lista com todos os locais.
	 
-   `/locale/:id`
	- `PUT`Recebe um JSON e atualiza um local.
	 - `GET` Retorna um local especificado pelo ID.
    - `DELETE`Deleta um local especificado pelo ID.
    
-   `/organization`
- 	- `POST`Recebe um JSON e cria uma organização.
	 - `GET` Retorna uma lista com todas as organizações.
	 
-   `/organization/:id`
- 	- `PUT`Recebe um JSON e atualiza uma organização.
	 - `GET` Retorna uma organização especificada pelo ID.
    - `DELETE`Deleta uma organização especificada pelo ID.

### Schemas
#### Personagem
```JSON
{
	"name": "placeholder",
	"nickname": "placeholder",
	"mainSkill": "placeholder",
	"LocaleId": 1,
	"OrganizationId": 1
}
```
#### Local
```JSON
{
	"name": "placeholder",
	"sea": "placeholder"
}
```

#### Organização
```JSON
{
	"name": "placeholder"
}
```