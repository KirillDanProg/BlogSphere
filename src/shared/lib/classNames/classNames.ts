type Mode = Record<string, string | boolean>

export const classNames = (className: string, mode: Mode = {}, additional: string[] = []) => {
  const modeArr = [
    ...Object.entries(mode)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key)
  ];
  const classNamesArr = [
    className,
    ...modeArr,
    ...additional.filter(Boolean)
  ];
  return classNamesArr.join(' ');
};
