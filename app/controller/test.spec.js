import Test from "./test";

describe('a test', () => {
    it('is a test', () => {
        let t = new Test();
        expect(t.dummy()).to.equal(4);
    });

    it('a promise test', () => {
        return expect(Promise.resolve({ foo: "bar" })).to.eventually.have.property("foo");
    });
});

