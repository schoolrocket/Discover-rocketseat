# Background
    
- Define um fundo para nosso elemento
- Sua área de atuação é a caixa toda
- Por padrão, é transparente

## Exemplos

- Usar cores solidas
- Usar imagens
- Controlar
        - a posição das imagens
        - se elas se repetem ou não
        - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente


### Background-color
-> HTML
<header>
</header>
<main>
    <h1>Evolua rápido com a tecnologia</h1>
    <p>Junte-se a milhares de devs e acelere
    na direção dos seus objetivos</p>
</main>
-> CSS
* {
    margin: 0;
}

header {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
    background-image: url();
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-origin: padding-box;
    background-clip: padding-box;
}

### Background-image-repeat
- Para adicionar uma imagem como background podemos usar a propriedade background-image
- Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade background-repeat

/* Values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Podedmos usar 2 valores: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

### Background-position
- Com a propriedade background-position podemos mudar a posição da imagem do background.

/* Pricipais valores */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

### Background-size
- Para mudar o tamanho da imagem do background usamos a propriedade background-size.

/* Values */
background-size: cover;
background-size: contain;

/* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
background-size: 40% auto;
background-size: 2em 25%;
background-size: auto 8px;
background-size: auto auto;

### Background-origin-clip
- A propriedade background-origin é quem define o ponto de origem de uma imagem específica.

/* Principais valores */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

- O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.

/* Principais valores */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

### Background-attachment
- A propriedade background-attachment determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.

/* Principais valores */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

### Gradient
- linear-gradient() é a função usada para criar gradient linear com o CSS.
background: linear-gradient(45deg, red, yellow)

- radial-gradient() é a função usada para criar gradient circular.
background: radial-gradient(green, red, yellow)
background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2))

### Múltiplos valores
Podemos aplicar múltiplos backgrounds em um mesmo elemento, podendo ter cor sólida, gradiente ou imagem. Para isso basta separar por vírgula cada background.