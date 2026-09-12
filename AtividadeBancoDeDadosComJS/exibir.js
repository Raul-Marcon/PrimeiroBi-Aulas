const readline = require('readline');
const nome = "Roberto";
const agencia = 100;
const numeroConta = 1004488;
const tipo = "corrente";
let saldo = 2500;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log("\n=== Operacoes ===");
    console.log("\n1. Consultar dados");
    console.log("\n2. Consultar saldo");
    console.log("\n3. Realizar débito");
    console.log("\n4. Realizar crédito");
    console.log("\n5. Sair");
    
    rl.question("\nDigite o número da operação desejada: ", (opcao) => {
        switch (opcao.trim()) {
            case '1':
                console.log("Nome do titular: " + nome);
                console.log("Agência: " + agencia);
                console.log("Número da conta: " + numeroConta);
                console.log("Tipo: " + tipo);
                exibirMenu();
                break;
            case '2':
                console.log("Seu saldo atual: " + saldo + "R$");
                exibirMenu();
                break;
            case '3':
                rl.question("\nDigite o valor que deseja sacar: R$ ",(valor) =>{
                    const numValor = parseFloat(valor);

                    if(isNaN(numValor) || numValor <= 0){
                        console.log("Valor inválido, tente novamente");
                    }

                    else if(numValor > saldo){
                        console.log("Saldo insuficiente!");
                    }

                    else{
                        saldo -= numValor;
                        console.log(`\nSaque de R$ ${numValor.toFixed(2)} realizado com sucesso!`);
                    }
                });
                exibirMenu();
                break;
            case '4':
                rl.question("\nDigite o valor que deseja sacar: R$ ",(valor) =>{
                    const numValor = parseFloat(valor);

                    if(isNaN(numValor) || numValor < 0){
                        console.log("Valor inválido");
                    }

                    else{
                        saldo += numValor;
                        console.log(`\nDepósito de R$ ${numValor.toFixed(2)} realizado com sucesso!`);
                    }
                });
                exibirMenu();
                break;
            case '5':
                console.log("Saindo do programa...");
                rl.close();
                break;
            default:
                console.log("\nOpção inválida! Tente novamente.");
                exibirMenu();
                break;
        }
    });
}

exibirMenu();
