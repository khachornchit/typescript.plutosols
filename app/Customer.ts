class Customer {
    public firstName: string;
    public lastName: string;
    public fullName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    };

    public setFirstName(firstName: string) {
        this.firstName = firstName;
    };

    public setLastName(lastName: string) {
        this.lastName = lastName;
    }

    public getFullName(): string {
        return this.fullName;
    };

    public getFirtName(): string {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }
};

let customer = new Customer("Jame", "Smith");
document.body.innerHTML = customer.fullName;