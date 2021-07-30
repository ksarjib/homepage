describe("Prototype", () => {
  describe("Filter String", () => {
    it("should return 'It is a nice day!'", () => {
      assert.equal(
        "It is a nice day!",
        "It is a very nice day!".filter(['very'])
        
      );
    });
  });
  describe('Bubble Sort', () => {
    it('should return [-2, 0, 1, 3, 4, 6]', () => {
      assert.deepEqual([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort());
    });
  });
});