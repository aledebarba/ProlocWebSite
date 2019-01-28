export const schema = {
    "type":"object",
    "required": [
      "fcaseTitle",
      "fcaseDesc",
      "fcaseUrl",
      "fcaseDate",
      "fcaseTags",
      "fcaseImages"
    ],
    "properties": {
      "fcaseTitle":{ 
        "type":"string",
        "title":"Titulo do caso",
      },
      "fcaseDesc":{
        "type":"string",
        "title":"Descrição do caso",
      },
      "fcaseUrl":{
        "type":"string",
        "title":"Endereço Youtube do vídeo produzido",
        "default":"https://www.youtube.com/watch?v=AWh9gESAOO0",
      },
      "fcaseDate":{
        "type":"string",
        "format":"date",
        "title":"Data do case",
      },
      "fcaseTags":{
        "type":"string",
        "title":"Tags do case",
        "default":"externa, interna, institucional, proloc",
      },
      "fcaseImages":{
        "type":"string",
        "title":"URLs finais das imagens separadas por vírgula",
        "default":"https://picsum.photos/150/150/?random,https://picsum.photos/150/150/?random",
      }
    }
  }
  
  export const uiSchema = {
    "fcaseTitle" : {
      "ui:placeholder" : "Digite um título breve e explicativo"
    },
    "fcaseDesc" :  {
      "ui:widget": "textarea",
      "ui:placeholder" : "A descrição deve ser concisa, mas deve explicar rapidamente como a Proloc participou do projeto.",
      "ui:options": {
        rows: 5
      }
    },
    "fcaseImages": {
      "ui:widget": "textarea"
    }
  }