export function objectToFormData(obj) {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
}

export const parseDiffDays = (timestamp) => {
  let expiresMilisecond = timestamp * 1000;
  const expiresDate = new Date(expiresMilisecond);
  return expiresDate.toUTCString();
};

export const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

export function isVietnamesePhoneNumber(number) {
  return /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(number);
}

export const isValidName = (string) => {
  return /^[A-Za-z]{3,30}$/.test(string);
};
