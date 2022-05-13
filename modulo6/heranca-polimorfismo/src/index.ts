// Herança

// Exercício 1

export class User {
    private id: string
    private email: string
    private name: string
    private password: string

    constructor(id: string, email: string, name: string, password: string) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return `Olá, bom dia! Eu sou ${this.name} e meu email é ${this.email}`
    }
}

// a) Não, pois ela é privada.

const user = new User("3", "rengar.email.com", "Rengar", "123456")

// b) Uma vez.

// ###############################################################################################################################

// Exercício 2

export class Customer extends User {
    public purchaseTotal: number = 0
    private creditCard: string

    constructor(id: string, email: string, name: string, password: string, creditCard: string) {
        super(id, email, name, password)
        console.log("Chamando o construtor da classe Customer")
        this.creditCard = creditCard
    }

    public getCreditCard(): string {
        return this.creditCard
    }
}

// a) Uma vez.

// b) Uma vez. Porque a classe Customer é uma classe filha da classe User e herda o seu construtor

// ###############################################################################################################################

// Exercício 3

// a) Não seria possível pois ela é privada e não há a disponibilidade de função get para ela.

// ###############################################################################################################################

// Exercício 4
const customer1 = new Customer("1", "bia@email.com", "Bia", "123456", "123456789")
console.log(customer1.introduceYourself())

// ###############################################################################################################################

// Exercício 5
const customer2 = new Customer("2", "math@email.com", "Matheus", "123456", "123456789")
console.log(customer2.introduceYourself())

// ###############################################################################################################################

// Polimorfismo

// Exercício 1

export interface Client {
    name: string
    registrationNumber: number
    consumedEnergy: number
    calculateBill(): number
}

const cliente1: Client = {
    name: "Matheus",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    },
}

console.log([
    cliente1.name,
    cliente1.registrationNumber,
    cliente1.consumedEnergy,
    cliente1.calculateBill(),
])

// a) Imprimi todas as informações do cliente. O método calculateBill() imprime apenas o retorno.

// ###############################################################################################################################

// Exercício 2

export abstract class Place {
    constructor(protected cep: string) {}

    public getCep(): string {
        return this.cep
    }
}

// const place1 = new Place("12345-678")

// a) Não é possível criar uma instância de uma classe abstrata.ts

// b) Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

// ###############################################################################################################################

// Exercício 3

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep)
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep)
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local

        cep: string
    ) {
        super(cep)
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

const residence = new Residence(5, "12345-678")
const commerce = new Commerce(2, "12345-678")
const industry = new Industry(10, "12345-678")

console.log([residence.getCep(), commerce.getCep(), industry.getCep()])

// ###############################################################################################################################

// Exercício 4

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}

// a) Métodos: getCpf e calculateBill; Propriedades: name, registrationNumber, consumedEnergy, cpf, pois as outras ele herda de seus pais.

// ###############################################################################################################################

// Exercício 5

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    public getCnpj(): string {
        return this.cnpj
    }
}

// a) Recebe as mesmas propriedades de Client.

// b) Recebe as exigências de Commerce e o cpnj que é proprio dele.

// ###############################################################################################################################

// Exercício 6

class IndustrialClinet extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: number,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustryNumber(): number {
        return this.insdustryNumber
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}

//  a) Industry. Pra herdar suas exigências

//  b) Client, para que todos os clientes enviem as informações certas.

//  c) Para que as informações não sejam alteradas. As info que poderiam ser mudadas já estão públicas permitindo a mudança.
