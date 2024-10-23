"use server";

import { z } from "zod";

import { sendMail } from "./sendGrid";

const schema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  name: z.string().min(3, {
    message: "Please enter at least 3 characters",
  }),
  message: z.string().min(10, {
    message: "Please enter at least 10 characters",
  }),
});

export async function submitForm(_: unknown, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  let res;

  if (name && email && message) {
    res = await sendMail({
      name,
      email,
      message,
    });
  }

  if (res?.status === "error") {
    return {
      error: "An error occurred while sending the email. Please try again.",
      success: false,
    };
  }

  return {
    success: true,
  };
}
