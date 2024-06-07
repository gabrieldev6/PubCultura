export class Supplier {
    empresa: string
    representante: string
    cnpj: string
    inscricao: string
    email: string
    telefone: string

    private constructor(empresa: string, representante: string, cnpj: string, inscricao: string, email: string, telefone: string) {

        this.empresa = empresa
        this.representante = representante
        this.cnpj = cnpj
        this.inscricao = inscricao
        this.email = email
        this.telefone = telefone


    }
    static create(empresa: string, representante: string, cnpj: string, inscricao: string, email: string, telefone: string) {
        if (this.validateEmail(email) && this.validateCNPJ(cnpj) ) {
            return new Supplier(empresa, representante, cnpj, inscricao, email, telefone)
        } else {
            return "um ou mais campos foram preenchidos de forma indevida"
        }


    }

    private static validateEmail(email: string): boolean {
        const expression = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
        const validate = expression.test(email)
        return validate
    }

    private static validateCNPJ(cnpj: string) {
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj.length !== 14) return false;

        // Elimina CNPJs inválidos conhecidos
        if (/^(\d)\1{13}$/.test(cnpj)) return false;

        // Valida DVs
        let tamanho = cnpj.length - 2;
        let numeros = cnpj.substring(0, tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != parseInt(digitos.charAt(0))) return false;

        tamanho += 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != parseInt(digitos.charAt(1))) return false;

        return true;
    }
}