# At-rules

* Está relacionado ao comportamento do CSS
* Começa com o sinal de '@' seguido do identificador e valor

## Exemplos comuns
 
- @import       /* incluir um CSS externo */      

- @media        /* regras condicionais para dispositivos */

- @font-face    /* fontes externas */

- @keyframes    /* Animation */

'''css
@import "http://local.com/style.css";

@media (min-width:500px) {
    /* rules here */
}

@font-face {
   /* rules here */
}

@keyframes nameofanimation {

}

'''

### Descrição

São regras relacionadas ao comportamento do CSS, começa com um sinal de @ seguido do identificador e do valor.

São as seguintes:
@import serve para incluir um CSS externo.
@media são regras condicionais para vários dispositivos.
@font-face é para colocar fontes externas.
@keyframes serve para as animations do CSS.