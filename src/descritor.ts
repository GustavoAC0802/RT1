import Empresa from "./empresa";

export default class Descritor {
    public descritor(empresa) {
        let txt = ''
        empresa.funcionarios.forEach(func => {
            txt += `Nome: ${func.nome} \n` + `Matrícula: ${func.matricula}\n` + `CPF: ${func.cpf}\n` +
                `Rua: ${func.endereco.rua} Bairro: ${func.endereco.bairro} Cidade: ${func.endereco.cidade} Número: ${func.endereco.numero}\n`
        })
        return (
            `Razão Social: ${empresa.razaoSocial}\n` +
            `Nome Fantasia: ${empresa.nomeFantasia}\n` +
            `CNPJ: ${empresa.cnpj}\n` +
            `Endereço:\n` +
            `Rua: ${empresa.endereco.rua} \n` +
            `Bairro: ${empresa.endereco.bairro}\n` +
            `Cidade: ${empresa.endereco.cidade}\n` +
            `Número: ${empresa.endereco.numero} \n\n` +
            `Funcionários:\n` +
            `${txt}`
        )
    }
}