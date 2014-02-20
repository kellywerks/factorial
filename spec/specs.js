describe('fibonacci',function() {
  it('should return 0 for 1', function() {
   fibonacci(1).should.equal(0);
  });

  it('should return error message for non-numbers', function() {
    fibonacci("hi").should.equal("Cannot compute factorial for negative numbers, non-integers, or non-numbers!")
  });

  it('should return error message for negative numbers', function() {
    fibonacci(-1).should.equal("Cannot compute factorial for negative numbers, non-integers, or non-numbers!")
  });

  it('should return error message for non-integers', function() {
    fibonacci(3.5).should.equal("Cannot compute factorial for negative numbers, non-integers, or non-numbers!")
  });

  it('should return 1 for 2', function() {
   fibonacci(2).should.equal(1);
  });

});
