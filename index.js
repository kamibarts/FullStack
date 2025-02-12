let resultado = document.getElementById('resultado');
function calcularinss() {
    let dados = {
        preco: Number(document.getElementById('preco').value)
    };
    fetch('http://localhost:4000/inss', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            resultado.innerHTML = `Desconto: ${data.reajuste} - Preço com desconto: ${data.precoComDesconto}`;
        })
}

-------------------------------------------

let triangulo = document.getElementById('triangulo');
function ladodotriangulo() {
    let dados = {
        lado1: Number(document.getElementById('lado1').value),
        lado2: Number(document.getElementById('lado2').value),
        lado3: Number(document.getElementById('lado3').value)
    };
    fetch('http://localhost:4000/lado', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            triangulo.innerHTML = `Ele é: ${data.oq}`;
        })
}
------------------------------------------------------
  
let mercado = document.getElementById('mercado');
function mercadinho() {
    let dados = {
        preco: Number(document.getElementById('preco').value),
        nome: document.getElementById('nome').value,
    };
    fetch('http://localhost:4000/mercadoria', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            mercado.innerHTML = `Preço Final: ${data.precofinal} - Nome: ${data.nome} -  Aumento: ${data.aumento}`;
        })
}

-------------------------------------------------

let maiorNum = document.getElementById('maiorNum');
function maiornum() {
    let dados = {
        num1: Number(document.getElementById('num1').value),
        num2: Number(document.getElementById('num2').value),
        num3: Number(document.getElementById('num3').value),
        num4: Number(document.getElementById('num4').value),
        num5: Number(document.getElementById('num5').value),
        num6: Number(document.getElementById('num6').value)
    };
    fetch('http://localhost:4000/maiorNum', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            maiorNum.innerHTML = `Maior numero digitado: ${data.maiorNumero}`;
        })
}

--------------------------------------------------

let ordem = document.getElementById('ordem');
function ordemcresc() {
    let dados = {
         n1 : parseInt(document.getElementById('n1').value),
         n2 : parseInt(document.getElementById('n2').value),
         n3 : parseInt(document.getElementById('n3').value),
         n4 : parseInt(document.getElementById('n4').value),
         n5 : parseInt(document.getElementById('n5').value)
    };
    fetch('http://localhost:4000/ordemC', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            ordem.innerHTML = `Maior numero digitado: ${data.numeros}`;
        })
}

--------------------------------------------

let maioremenor = document.getElementById('maioremenor');
function altobaixo() {
    let dados = {
         nu1 : Number(document.getElementById('nu1').value),
         nu2 : Number(document.getElementById('nu2').value),
    };
    fetch('http://localhost:4000/mem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            maioremenor.innerHTML = `Maior numero digitado: ${data.maiorNumero}, Menor numero digitado:  ${data.menorNumero}`;
        })
}

---------------------------------------------

let srj = document.getElementById('srj');
function reajustesal() {
    let dados = {
         salario : Number(document.getElementById('salario').value),
    };
    fetch('http://localhost:4000/salrj', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            srj.innerHTML = `Salario Reajustado: ${data.total}`;
        })
}

--------------------------------

let calculomedia = document.getElementById('calculomedia');
function calcmedia() {
    let dados = {
         nota1 : Number(document.getElementById('nota1').value),
         nota2 : Number(document.getElementById('nota2').value),
         nota3 : Number(document.getElementById('nota3').value),
         aluno: document.getElementById('aluno').value,

    };
    fetch('http://localhost:4000/media', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            calculomedia.innerHTML = `Media: ${data.media}, Situação: ${data.situação}, Aluno: ${data.aluno}`;
        })
}

---------------------------------------------------

let loljinha = document.getElementById('loljinha');
function lolja() {
    let dados = {
         vest : document.getElementById('vest').value
    };
    fetch('http://localhost:4000/lojaderoupa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(data => {
            loljinha.innerHTML = `Peça de Roupa: ${data.resultado}`;
        })
}
