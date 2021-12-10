// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = [];
    for (i = array.length - 1; i >= 0; i--)
    {
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function compararNumeros(a, b) {
        return a - b;
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = [];

    for (i = 0; i < array.length; i++)
    {
        if (array[i] % 2 === 0)
        {
            arrayPares.push(array[i]);
        }
    }

    return arrayPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayQuadrados = [];

    for (i = 0; i < array.length; i++)
    {
        if (array[i] % 2 === 0)
        {
            arrayQuadrados.push(Math.pow(array[i], 2));
        }
    }

    return arrayQuadrados;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;

    for (i = 0; i < array.length; i++)
    {
        if (array[i] > maior)
        {
            maior = array[i];
        }
    }

    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let objeto = {
        maiorNumero:'',
        maiorDivisivelPorMenor:'',
        diferenca:'',
    }
    
    if (num1 > num2)
    {
        objeto.maiorNumero = num1;
        if (num1 % num2 === 0)
        {
            objeto.maiorDivisivelPorMenor = true;
        }
        else
        {
            objeto.maiorDivisivelPorMenor = false;
        }
        objeto.diferenca = num1 - num2;
    }
    else
    {
        objeto.maiorNumero = num2;
        if (num2 % num1 === 0)
        {
            objeto.maiorDivisivelPorMenor = true;
        }
        else
        {
            objeto.maiorDivisivelPorMenor = false;
        }
        objeto.diferenca = num2 - num1;
    }

    return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPares = [];

    for (i = 0; arrayPares.length < n; i++)
    {
        if (i % 2 === 0)
        {
            arrayPares.push(i);
        }
    }

    return arrayPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC)
    {
        console.log('Este triângulo é ESCALENO')
        return "Escaleno";
    }
    else if (ladoA === ladoB && ladoA !== ladoC && ladoB !== ladoC ||
             ladoA === ladoC && ladoA !== ladoB && ladoB !== ladoC ||
             ladoB === ladoC && ladoA !== ladoC && ladoA !== ladoB
            )
    {
        console.log('Este triângulo é ISÓSCELES')
        return "Isósceles";
    }
    else
    {
        console.log('Este triângulo é EQUILÁTERO')
        return "Equilátero";
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let newArr = array.sort(function compararNumeros(a, b) {
        return a - b;
      });

    return [newArr[newArr.length - 2], newArr[1]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let novaPessoa = {...pessoa,
        nome: 'ANÔNIMO'
    }
    
    return novaPessoa;
    
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}