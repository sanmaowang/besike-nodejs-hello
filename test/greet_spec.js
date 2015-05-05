var greet = require("..");
describe('greet', function(){
  it("should greet a person by name",function(){
    expect(greet("sanmao")).to.equal("hello, sanmao");
  });
  it("should greet a person flirtatiously if drunk",function(){
    var drunk = true;  
    expect(greet("sanmao",drunk)).to.equal("hello sanmao, you look sexy today");
  })
});
