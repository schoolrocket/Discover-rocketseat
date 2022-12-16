 # Scope

* Escopo determina a visibilidade de alguma variável no JavaScript


# Block statement
```js
// vamos iniciar um bloco
{
//aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco, também é criado um novo escopo. Chamamos de `block-scoped`

## var
```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)

```

## let e const
```js
// const e let são locais e só funcionam no escopo onde foi criada 

{
    let y = 0
    console.log('> existe y ? ', y)
}

console.log('> existe y depois do bloco? ', y)
```