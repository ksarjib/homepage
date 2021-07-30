describe("Prototype", () => {
  describe("Filter String", () => {
    it("should return 'This is a sentence'", () => {
      assert.equal(
        "This is a nice sentence",
        "This is not a nice sentence".filter(['not']),
        
      );
    });
  });
  describe('Bubble Sort', () => {
    it('should return [-2, 0, 1, 3, 4, 6]', () => {
      assert.deepEqual([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort());
    });
  });
});