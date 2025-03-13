import Endereco from "./endereco";
import Telefone from "./telefone";
import Empresa from "./empresa";
import Funcionario from "./funcionario";
import Descritor from "./descritor";

let endereco = new Endereco()
endereco.numero = 888
endereco.rua = 'Rua do João'
endereco.bairro = 'Bairro das Palmeiras'
endereco.cidade = 'São Paulo'

let telefone = new Telefone()
telefone.ddd = '11'
telefone.numero = '0329092039'

let funcionario = new Funcionario()
funcionario.nome = 'Alex de Niterói'
funcionario.matricula = '99923982'
funcionario.cpf = '876.786.678-87'
funcionario.endereco = endereco
funcionario.telefone = telefone

let funcionarios = [funcionario]
let telefones = [telefone]

let empresa = new Empresa()
empresa.funcionarios = funcionarios
empresa.endereco = endereco
empresa.razaoSocial = 'Naipe-Naipe'
empresa.nomeFantasia= 'Tom dos Moletom'
empresa.cnpj = '123.231.321-23'
telefones

let descrever = new Descritor()
console.log(descrever.descritor(empresa));