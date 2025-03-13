import Endereco from "./endereco"
import Funcionario from "./funcionario"

export default class Empresa{
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public funcionarios: Funcionario[]
}