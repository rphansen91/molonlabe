export const toYYYYMMDD = (date: Date) => {
  return Number(
    date
      .toISOString()
      .replace(/[^0-9]+/g, '')
      .substring(0, 8)
  );
};

export const toYYYYMMDDHH = (date: Date) => {
  return Number(
    date
      .toISOString()
      .replace(/[^0-9]+/g, '')
      .substring(0, 10)
  );
};
