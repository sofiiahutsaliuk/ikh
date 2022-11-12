const VolOrg = require('../classes/VolOrg');
const VolOrgConfig = require('../classes/VolOrgConfig');

test('Check VolOrgConfig Class: Find an organisation', () => {
    let orgConfig = new VolOrgConfig();
    let org1 = new VolOrg("Організація №1", "vol-org@i.ua", "+380673563175", "вул. Янки Купали, 40, м. Львів");
    let org2 = new VolOrg("Організація №2", "vol-org@gmail.com", "+380913840051", "вул. Героїв УПА, 72, м. Львів");
    orgConfig.addOrg(org1);
    orgConfig.addOrg(org2);
    expect(orgConfig.getOrgByName("Організація №2")).toBe(org2);
});

test('Check VolOrgConfig Class: Validate data for organisations', () => {
    let orgConfig = new VolOrgConfig();
    let org1 = new VolOrg("Організація №1", "vol-org@i.ua", "+380673563175", "вул. Янки Купали, 40, м. Львів");
    // Відсутній номер телефону
    let org2 = new VolOrg("Організація №2", "vol-org@gmail.com", "", "вул. Героїв УПА, 72, м. Львів");
    orgConfig.addOrg(org1);
    orgConfig.addOrg(org2);
    expect(() => orgConfig.validateOrgs()).toThrow(Error);
});