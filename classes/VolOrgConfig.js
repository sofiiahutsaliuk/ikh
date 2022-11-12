class VolOrgConfig {
    _orgList = [];

    constructor(orgList = []){
        this._orgList = [...orgList];
    }

    set orgList(arr){
        this._orgList = [...arr];
    }
    get orgList(){
        return this._orgList;
    }

    getOrgByName(name) {
        return this._orgList.find(org => org.name == name);
    }

    deleteOrgByName(name) {
        const org = this.getOrgByName(name);
        const index = this._orgList.indexOf(org);
        this._orgList.splice(index, 1);
    }

    addOrg(org) {
        this._orgList = this._orgList.concat(org);
    }

    validateOrgs() {
        this.orgList.forEach(org => org.validateData());
    }
}
module.exports = VolOrgConfig;