const giftCode = require('../util/giftCodeHandler');
const proxy = require('../util/proxyHandler');

test('generate code', () => {
    expect(typeof giftCode.generate()).toBe('string');
})

test('update proxy', () => {
    expect(proxy.update()).toBeTruthy()
})

test('checking code', () => {
    giftCode.check(giftCode.generate());
    expect(giftCode.check(giftCode.generate())).toBeTruthy();
})