const Proposal = require('../classes/Proposal');

test('Check Proposal Class: Throws an error if proposal text not there', () => {
    let proposal = new Proposal("Пропозиція №1", "", "vol-org@i.ua", "+380673563175", "вул. Янки Купали, 40, м. Львів");
    expect(() => proposal.proposalText).toThrow("Немає опису пропозиції");
});
