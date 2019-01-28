export const schema = {
    "type":"object",
    "required": [
      "fname",
      "fmessage",
      "femail",
    ],
    "properties": {
      "fname":{ 
        "type":"string",
        "title":"Seu nome",
      },
      "femail":{
        "type":"string",
        "format":"email",
        "title":"Seu email para contato",
      },
      "fmessage":{
        "type":"string",
        "title":"Sua mensagem",
      },
      "fsubject": {
        "title": "Assunto",
        "type": "string",
        "default": "Mais informações.",
        "enum": [
          "Mais informações.",
          "Quero alugar meu espaço.",
          "Quero agendar uma reunião.",
          "Outro assunto.",
          
        ],
        "enumNames": [
          "Mais informações.",
          "Quero alugar meu espaço.",
          "Quero agendar uma reunião.",
          "Outro assunto.",
        ]
      }
    }
  }
  
  export const uiSchema = {
    "fname" : {
      "ui:placeholder" : "Digite seu nome"
    },
    "femail": {
      "ui:placeholder": "nome@email.com"
    },
    "fmessage" :  {
      "ui:widget": "textarea",
      "ui:placeholder" : "Digite aqui a mensagem que gostaria de enviar",
      "ui:options": {
        rows: 5
      }
    }, 
  }