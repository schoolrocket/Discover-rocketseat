Nesse curso vamos aprender a como trabalhar com cores e backgrounds nos nossos elementos. Adicionar cores é algo necessário para qualquer layout e saber como trabalhar com imagens e cores de fundo é essencial.

# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos 

   * Tipos
   * Background-color (para caixas)
   * Color (para textos)
   * Border-color (para caixas)
   * Outros...

## Valores
Podemos definir valores por:

   * Palavra-chave (blue, transparent)
   * Hexadecimal (#990011)
   * Funções: rgb, rgba, hsl, hsla

   '''CSS
   element {
      /* Keyword values */
      color: currentcolor;

      /* <named-color> values */
      color: red;
      color: orange;
      color: tan;
      color: rebeccapurple;

      /* <hex-color> values 0-F */
      color: #090; /* RED GREEN BLUE */
      color: #009900;
      color: #090a;
      color:#009900aa;

      /*<rgb()> values */
      color: rgb(34, 12, 64, 0.6); /* 0-255 */
      color: rgba(34, 12, 64, 0.6);
      color: rgb(34 12 64 / 0.6);
      color: rgba(34 12 64 / 0.3);
      color: rgb(34.0 12 64 / 60%);
      color: rgba(34.6 12 64 / 30%);

      /*<hsl()> values */ 
      color: hsl(30, 100%, 50%, 0.6); /* HSL → Hue - Saturation - Lightness */
      color: hsla(30, 100%, 50%, 0.6);
      color: hsl(30 100% 50% / 0.6);
      color: hsla(30 100% 50% / 0.6);
      color: hsl(30.0 100% 50% / 60%);
      color: hsla(30.2 100% 50% / 60%);

      /* Global values */
      color: inheritr; /* Herda a cor do elemento anterior */
      color: initial; /* Volta a sua cor inicial */
      color: unset; /* Pega a cor do contexto */
   }

   * Entendendo esses princípios e com a prática, fica cada vez mais fácil entender como aplicar cores no CSS.

      ### Referência: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

      ..