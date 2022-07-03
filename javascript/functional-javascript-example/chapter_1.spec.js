const {
  splat,
  unsplat
} = require("./chapter_1");

describe("함수를 인자로 받아서 다른 함수를 반환한다", () => {
  test("splat", () => {
    const addArrayElements = splat((x, y) => x + y)

    expect(addArrayElements([1, 2])).toBe(3);
  })

  test("unsplat", () => {
    const joinElements = unsplat((arr) => arr.join(" "))

    expect(joinElements(1, 2)).toBe("1 2");
    expect(joinElements('-', '$', '/', '!', ':')).toBe("- $ / ! :")
  })
})