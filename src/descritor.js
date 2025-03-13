"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descritor = function (empresa) {
        var txt = '';
        empresa.funcionarios.forEach(function (func) {
            txt += "Nome: ".concat(func.nome, " \n") + "Matr\u00EDcula: ".concat(func.matricula, "\n") + "CPF: ".concat(func.cpf, "\n") +
                "Rua: ".concat(func.endereco.rua, " Bairro: ").concat(func.endereco.bairro, " Cidade: ").concat(func.endereco.cidade, " N\u00FAmero: ").concat(func.endereco.numero, "\n");
        });
        return ("Raz\u00E3o Social: ".concat(empresa.razaoSocial, "\n") +
            "Nome Fantasia: ".concat(empresa.nomeFantasia, "\n") +
            "CNPJ: ".concat(empresa.cnpj, "\n") +
            "Endere\u00E7o:\n" +
            "Rua: ".concat(empresa.endereco.rua, " \n") +
            "Bairro: ".concat(empresa.endereco.bairro, "\n") +
            "Cidade: ".concat(empresa.endereco.cidade, "\n") +
            "N\u00FAmero: ".concat(empresa.endereco.numero, " \n\n") +
            "Funcion\u00E1rios:\n" +
            "".concat(txt));
    };
    return Descritor;
}());
exports.default = Descritor;
