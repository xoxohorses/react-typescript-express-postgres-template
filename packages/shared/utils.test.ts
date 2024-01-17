import { sharedFunction } from "./utils";

describe("utils", () => {
  describe("sharedFunction", () => {
    it("returns 0 for client", () => {
      const result = sharedFunction("client");
      expect(result).toBe(0);
    });

    it("returns 1 for server", () => {
      const result = sharedFunction("server");
      expect(result).toBe(1);
    });
  });
});
