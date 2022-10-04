# A Cascata (cascading)

A Escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo, ou seja, caso haja algum selector com informações conflitantes, o mais embaixo é o que será atribuído.

É levado em consideração 3 fatores 

1. Origem do Estilo
2. Especificidade
3. Importância


## Origem do Estilo

inline > tag style > tag link


### Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. Id Selector
1000. Inline

### Descrição
- É um cálculo matemático, onde cada tipo de seletor e origem do estilo possuem valores a serem considerados.
- Os mais fracos são universal selector, combinators e negation pseudo-class, com o valor de 0. Em seguida, com valor de 1, são os element type selector e pseudo-elements.
- Também temos os classes e attribute selectors, com valor de 10, ou seja, são mais fortes que os anteriores.
- O segundo mais forte, ID selector, com um valor de 100, vence todos os selectors anteriores.
- Por fim, temos o inline, com o valor 1000, quaisquer desses selectors anteriormente citado



### A regra  !important 

* Cuidado, evite o uso.
* Não é considerado uma boa prática
* Quebra o fluxo natural da cascata

### Descrição
sintaxe: !important
São raras as ocasiões nas quais se devem usar um iportant, pois é em geral uma má pratica, visto que quebra o fluxo natural da cascata e pode acabar te atrapalhando caso você a deixe em algum lugar no seu código.

Portanto evite ao máximo seu uso.