# Atributos mais estilos às fontes
 Ref: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals


## Font Variant

* Faz variações na apresentação da fonte

```css
p {
	font-variant: small-caps;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

## Font Stretch

    * Alargamento ou encolhimento da fonte
    * Aceita palavras-chaves como: expanded, condensed, normal
    * Aceita porcentagens de 50% a 200%

```css
p {
	font-stretch: expanded;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

## Letter spacing

Define o espaçamento entre os caracteres

```css
p {
	letter-spacing: 4px;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

## Word spacing

- Define o espaçamento entre palavras

```css
p {
	word-spacing: 1em;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing

## Line-height

	- Define os espaços entre linhas
	- Pode ser com unidades ou sem unidades de medida
	- Valores comuns: 1.5 ou 2

```css
p {
	line-height: 1.5;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

## Text-decoration

Aparência decorativa de um texto
- line: underline | overline | line-through
*	 `podemos aplicar mais de 1 valor` *
- style: wavy | dotted | double | dashed | solid
- color: <color> values

```css
h1 {
	text-decoration: underline; /* shorthand */
}

p {
  text-decoration: wavy overline blue; /* shorthand */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

## Text-align

Alinhamento de um texto
- Valores: start | end | left | right | center | justify | match-parent

```css
p {
	text-align: center;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

## Text shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css
p {
  text-shadow: 1px 1px 1px red,
	       2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```


https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow