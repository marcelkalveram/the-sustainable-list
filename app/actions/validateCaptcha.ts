const minimumCaptchaScore = 0.7;
const secretKey = process.env.RECAPTCHA_SECRET_KEY || "";
const data = new FormData();
const captchaUrl = "https://www.google.com/recaptcha/api/siteverify";

export const validateCaptcha = async (
  captchaToken: string,
): Promise<boolean> => {
  data.append("secret", secretKey);
  data.append("response", captchaToken);
  const captchaResponse = await fetch(captchaUrl, {
    method: "POST",
    body: data,
  });

  const res = await captchaResponse.json();
  return res.score && res.score >= minimumCaptchaScore;
};
