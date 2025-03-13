"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endereco_1 = require("./endereco");
var telefone_1 = require("./telefone");
var empresa_1 = require("./empresa");
var funcionario_1 = require("./funcionario");
var descritor_1 = require("./descritor");
var endereco = new endereco_1.default();
endereco.numero = 888;
endereco.rua = 'Rua do João';
endereco.bairro = 'Bairro das Palmeiras';
endereco.cidade = 'São Paulo';
var telefone = new telefone_1.default();
telefone.ddd = '11';
telefone.numero = '0329092039';
var funcionario = new funcionario_1.default();
funcionario.nome = 'Alex de Niterói';
funcionario.matricula = '99923982';
funcionario.cpf = '876.786.678-87';
funcionario.endereco = endereco;
funcionario.telefone = telefone;
var funcionarios = [funcionario];
var telefones = [telefone];
var empresa = new empresa_1.default();
empresa.funcionarios = funcionarios;
empresa.endereco = endereco;
empresa.razaoSocial = 'Naipe-Naipe';
empresa.nomeFantasia = 'Tom dos Moletom';
empresa.cnpj = '123.231.321-23';
telefones;
var descrever = new descritor_1.default();
console.log(descrever.descritor(empresa));
