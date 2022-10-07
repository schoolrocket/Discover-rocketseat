# Display: block vs Display: inline

- Como as caixas se comportam em relação às outras caixas.
- Comportamento externo das caixas

|  **block**                        |  **inline**                       |
|-----------------------------------|-----------------------------------|
| Ocupa toda a linha, colocando o   | Elemento ao lado do outro         |
| próximo elemento abaixo desse     |                                   |
|-----------------------------------|-----------------------------------|
| width e heigth são respeitados    | width e heigth não funcionam      | 
|-----------------------------------|-----------------------------------|
| padding, margin, border, irão     | Somente valores horizontais de    |
| funcionar normalmente.            | margin, padding e border          |
|-----------------------------------|-----------------------------------|

Exemplos:
block: <p> <div> <section> , todos dos headings <h1><h2>...
inline: <a> <strong> <span> <em>

-------------------------------------------------------------------------

💻 Exemplo:
# HTML:
<div>um conteúdo</div>outro conteúdo

width e height são respeitados

# CSS:
div {
    height: 100px;
}

padding, margin, border irão funcionar normalmente

div {
    width: 80px;
    height: 100px;
    margin: 10px;
    padding: 20px;
    border: 1px solid red;
}

<p> <div> <section>, todos os headings <h1> <h2>...

## Display Inline

Os elementos ficam ao lado do outro e não empurram outros elementos para baixo

💻 Exemplo:
# HTML:
<p>
    Um <strong>texto</strong> qualquer
</p>    

`width` e `height` não funcionam
Somente valores horizontais de margin

# CSS:
span {
    margin: 10px; /*só aplica na horizontal*/ 
    border: 1px solid green;
}