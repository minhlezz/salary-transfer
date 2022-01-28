export const convertToUSD = (vnd, rate) => {
  let coef;
  if (rate === 0) {
    return;
  } else {
    coef = rate;
  }
  let usdCurrency = vnd / coef;
  return usdCurrency;
};

export const convertToVND = (usd, rate) => {
  let usdCurrency = Math.round(usd * rate);
  return usdCurrency;
};

export const formatVND = (number) => {
  let format = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);

  return format;
};

export const formatUSD = (number) => {
  let format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
  return format;
};
