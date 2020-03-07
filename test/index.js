const chai = require('chai');
const unmask = require('./../index');

const assert = chai.assert;

describe("unmask", function () {

    it("clear number masks", function () {
        assert.equal("01608508510", unmask("016.085.085-10"));
    });

});