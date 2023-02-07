type Mode = Record<string, string | boolean>

export const classNames = (className: string, mode: Mode = {}, additional: string[] = []) => {
  const classNamesArr = [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mode)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key)
  ]
  return classNamesArr.join(' ')
}
