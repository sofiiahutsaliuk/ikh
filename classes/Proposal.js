const fs = require("fs");

class Proposal {
    _proposalName = "";
    _proposalText = "";
    _email = "";
    _phone = "";
    _address = "";
    _filename = [];
    _dateCreated;

    constructor(proposalName = "", proposalText = "", email = "", phone = "", address = "", filenameArr = []){
        this._proposalName = proposalName;
        this._proposalText = proposalText;
        this._email = email;
        this._phone = phone;
        this._address = address;
        this._filename = [...filenameArr];
        this._dateCreated = Date.now();
    }

    set proposalName(value){
        this._proposalName = value;
    }
    get proposalName(){
        if(this._proposalName === ""){
            throw new Error('Немає назви пропозиції');
        }
        return this._proposalName;
    }

    set proposalText(value){
        this._proposalText = value;
    }
    get proposalText(){
        if(this._proposalText === ""){
            throw new Error('Немає опису пропозиції');
        }
        return this._proposalText;
    }

    set email(value){
        this._email = value;
    }
    get email(){
        return this._email;
    }

    set phone(value){
        this._phone = value;
    }
    get phone(){
        return this._phone;
    }
    
    set address(value){
        this._address = value;
    }
    get address(){
        return this._address;
    }

    set filename(arr){
        this._filename = [...arr]; // Copy array
    }
    get filename() {
        return this._filename;
    }

    get dateCreated() {
        return this._dateCreated;
    }
    
    getFilenameByIndex(i) {
        return this._filename[i];
    }

    deleteFilenameByIndex(i) {
        this._filename.splice(i, 1);
    }

    deleteFilenameByName(filename) {
        const index = this._filename.indexOf(filename);
        if (index >= 0) {
            this._filename.splice(index, 1);
        }
    }

    addFilename(filename) {
        this._filename = this._filename.concat(filename);
    }

    getContactInfo() {
        if (this._email === "" && this._phone === "") {
            throw new Error('Немає контактів з організацією');
        } else if (this._phone === "") {
            return `Email: ${this._email}`;
        } else if (this._email === "") {
            return `Phone number: ${this._phone}`;
        } else {
            return `Email:  ${this._email}\nPhone number: ${this._phone}`
        }
    }

    checkFileExists(index) {
        if (fs.existsSync(this._filename[index])) {
            return "File exists.";
        } else {
            return "Incorrect path. File doesn't exist.";
        }
    }
}
module.exports = Proposal;