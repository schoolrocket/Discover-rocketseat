/*  
    Function() constructor

    * expressão new
    * criar um objeto
    * this keyword
    */ 



    // let date = new Date("2023-01-08")
    // console.log(date)
    
    let name = new String("Victor")
    console.log(name)
    
    function Person (name) {
        this.name = name
        this.walk = function() {
            return this.name + " está andando"
        }
    }
    
     const vug = new Person("Victor")
     const joao = new Person("João")
     //console.log(vug.walk())


    console.log(vug)
    console.log(joao)