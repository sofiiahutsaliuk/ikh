const SortOption = {
    Name: Symbol("Name"),
    Email: Symbol("Email"),
    Phone: Symbol("Phone"),
    Address: Symbol("Address"),
    DateCreated: Symbol("DateCreated")
};

class ProposalConfig {
    _proposalList = [];

    constructor(proposalList = []){
        this._proposalList = [...proposalList];
    }

    set proposalList(arr){
        this._proposalList = [...arr];
    }
    get proposalList(){
        return this._proposalList;
    }

    getProposalByName(name) {
        return this._proposalList.find(prop => prop.proposalName == name);
    }

    deleteProposalByName(name) {
        const prop = this.getProposalByName(name);
        const index = this._proposalList.indexOf(prop);
        this._proposalList.splice(index, 1);
    }

    addProposal(prop) {
        this._proposalList = this._proposalList.concat(prop);
    }

    sortBy(sortOption) {
        option = "";
        switch(sortOption) {
            case SortOption.Name:
                option = "proposalName";
                break;
            case SortOption.Email:
                option = "email";
                break;
            case SortOption.Phone:
                option = "phone";
                break;
            case SortOption.Address:
                option = "address";
                break;
            case SortOption.DateCreated:
                option = "dateCreated";
                break;
            default:
                throw new Error('Помилка сортування');
        }
        this._proposalList.sort((a, b) => (a[option] > b[option]) ? 1 : -1)
    }
}
module.exports = { ProposalConfig, SortOption };