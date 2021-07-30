describe("Prototype", () => {
  describe("Filter String", () => {
    it("should return 'This house is nice!'", () => {
      assert.equal(
        "This house is nice!",
        "This house is not nice!".filter(["not"]),
        
      );
    });
  });
  describe("Bubble Sort", () => {
    it("should return [-2, 0, 1, 3, 4, 6]", () => {
      assert.deepEqual([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort());
    });
  });
});