# Trabalhando com fontes

A tipografia transmite uma mensagem, por exemplo, quando queremos dar uma ênfase no texto nós podemos escrever o mesmo em negrito.

Nós podemos transmitir uma mensagem diferente dependendo do estilo que escrevemos o texto.

Tipografia trasmite mensagem

    - Negrito
    - Tamanho
    - Estilo

## Basic Font Properties

Algumas das propriedades de fonts do CSS que podem nos ajudar a transmitir uma mensagem através dos textos da página são:

    - font-family
    - font-weight
    - font-style
    - font-size

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* Inclui *fallback* font

'''css
p {
    font-family: "Times New Roman", Times, serif;
}
'''
    - serif (com serifa)
    - sans-serif (sem serifa)

## Font Weight

* Peso da fonte
Valores: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
Dependendo da família da fonte não conseguimos utilizar todos os pesos de fonte.
https://www.w3.org/TR/css-fonts-3/

'''css
p {
	font-weight: bold;
}
'''

## Font Style

Valores: normal | italic | oblique
Os valores que podem ser aplicados dependem da fonte usada

'''css
span {
	font-style: italic;
}
'''

## Font Size

* O tamanho da fonte

'''css
p {
	font-size: 18px;
}
'''

## Web Fonts

Fontes do sistema são as fontes que estão instaladas na máquina do usuário e nem sempre o cliente vai ter instalado as fontes usadas no projeto e isso pode fazer com que os estilos dos textos não sejam aplicados corretamente, mas para resolver esses casos podemos preparar nossas fonts para web ou usar fontes da web.

- Fontes do sistema x Fontes da web
    Como usar fontes para web?
        * @font-face
        * @import
        * link
        
Referência
https://fonts.google.com/ https://css-tricks.com/snippets/css/using-font-face-in-css/