var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    ;
    Customer.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    ;
    Customer.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Customer.prototype.getFullName = function () {
        return this.fullName;
    };
    ;
    Customer.prototype.getFirtName = function () {
        return this.firstName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    return Customer;
}());
;
var customer = new Customer("Jame", "Smith");
document.body.innerHTML = customer.fullName;

//# sourceMappingURL=Customer.js.map
