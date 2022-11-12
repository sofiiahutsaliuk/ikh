class VolOrg {
    _name = "";
    _email = "";
    _phone = "";
    _address = "";

    constructor(name = "", email = "", phone = "", address = "") {
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._address = address;
    }

    set name(value) {
        this._name = value;
    }
    get name() {
        if (this._name === "") {
            throw new Error('Немає назви організації');
        }
        return this._name;
    }

    set email(value){
        this._email = value;
    }
    get email(){
        if(this._email === ""){
            throw new Error('Немає пошти організації');
        }
        return this._email;
    }

    set phone(value){
        this._phone = value;
    }
    get phone(){
        if(this._phone === ""){
            throw new Error('Немає номеру телефона організації');
        }
        return this._phone;
    }
    
    set address(value){
        this._address = value;
    }
    get address(){
        if(this._address === ""){
            throw new Error('Немає адреси організації');
        }
        return this._address;
    }

    validateData() {
        if (this._name === "") {
            throw new Error('Немає назви організації');
        } else if(this._email === ""){
            throw new Error('Немає пошти організації');
        } else if(this._phone === ""){
            throw new Error('Немає номеру телефона організації');
        } else if(this._address === ""){
            throw new Error('Немає адреси організації');
        } else {
            return "OK";
        }
    }
}
module.exports = VolOrg;