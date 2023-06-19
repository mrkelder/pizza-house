import { StringFormatter } from "./StringFormatter"

describe("StringFormatter class", () => {
  it("should return online-digital-shop when enter 'Online digital shop'", () => {
    expect(StringFormatter.getIdSlugFromString("Online digital shop")).toBe(
      "online-digital-shop"
    )
  })

  it("should return page-shape-1 when enter '  PizZA   ShaPE   1  '", () => {
    expect(StringFormatter.getIdSlugFromString("  PizZA   ShaPE   1  ")).toBe(
      "pizza-shape-1"
    )
  })

  it("should return 1-2--345-shap-e when enter '1-2 -  - 3 4    5 SHAP E'", () => {
    expect(
      StringFormatter.getIdSlugFromString("1-2 -  - 3 4    5 SHAP E")
    ).toBe("1-2-----3-4-5-shap-e")
  })

  it("should return https://www.google.com when enter 'https-www-google-com'", () => {
    expect(StringFormatter.getIdSlugFromString("https://www.google.com")).toBe(
      "https-www-google-com"
    )
  })

  it("should return https://y.hoo/test?how=to&foo=bar when enter 'https-y-hoo-test-how-to-foo-bar'", () => {
    expect(
      StringFormatter.getIdSlugFromString("https://y.hoo/test?how=to&foo=bar")
    ).toBe("https-y-hoo-test-how-to-foo-bar")
  })
})
