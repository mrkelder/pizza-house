export class StringFormatter {
  public static getIdSlugFromString(string: string) {
    return string
      .trim()
      .replace(/[ \.:\/\?=\&]+/g, "-")
      .toLocaleLowerCase()
  }
}
