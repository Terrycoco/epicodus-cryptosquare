// describe('leapYear', function() {
//   it("is false for a year that is not divisible by 4", function() {
//     expect(leapYear(1999)).to.equal(false);
//   });
// });

describe('encrypt', function () {
  it("removes the empty spaces from string", function() {
    expect(encrypt("a ")).to.equal("a");
  });

  it("returns false if string is empty", function() {
    expect(encrypt("")).to.equal(false);
  });

  it("returns input if string is 2 chars or less", function() {
    expect(encrypt("a b")).to.equal("ab");
  });

  it("returns 2 groups if string is 3 or 4 chars", function() {
    expect(encrypt("abcd")).to.equal("ac bd");
  });

  it("returns 3 groups is string is 9 chars", function() {
    expect(encrypt("123456789")).to.equal("147 258 369");
  });

});
