let { VietQR } = require('../index');
let vietQR = new VietQR({
    clientID: 'de8a0804-a76d-41e5-8ad6-31503ce7d5f4',
    clientSecret: '17c29f09-4ea2-4417-b9c2-7f020d35de42',
})
vietQR.genQRCodeBase64({
    bank: '970415',
    accountName: 'QUY VAC XIN PHONG CHONG COVID',
    accountNumber: '113366668888',
    amount: '79000',
    memo: 'Ung Ho Quy Vac Xin',
    template : 'qr_only'
}).then((data)=>{console.log(data)})
.catch((err)=>{});