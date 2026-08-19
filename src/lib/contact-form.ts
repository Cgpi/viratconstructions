const CONTACT_API_URL = "https://www.cgpisoftware.com/vpconstruction/api/contact";
export const CONTACT_SITE_NAME = "virat-constructions";

export type ContactFormPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  interest?: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormPayload, string>>;

export function validateContactForm(values: ContactFormPayload): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const email = (values.email ?? "").trim();
  const phone = (values.phone ?? "").trim();
  const name = (values.name ?? "").trim();
  const message = (values.message ?? "").trim();

  if (!name) {
    errors.name = "Full name is required.";
  }

  if (!email) {
    errors.email = "Email address is required.";
  } else if (!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else {
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }
  }

  if (!message) {
    errors.message = "Message is required.";
  }

  return errors;
}

export async function submitContactForm(values: ContactFormPayload) {
  const payload = {
    site_name: CONTACT_SITE_NAME,
    name: (values.name ?? "").trim(),
    email: (values.email ?? "").trim(),
    phone: (values.phone ?? "").trim(),
    subject: (values.subject ?? values.interest ?? "").trim() || "General inquiry",
    message: (values.message ?? "").trim(),
  };

  const response = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let parsedBody: unknown = null;
  const responseText = await response.text();

  if (responseText) {
    try {
      parsedBody = JSON.parse(responseText);
    } catch {
      parsedBody = responseText;
    }
  }

  if (!response.ok) {
    const message =
      typeof parsedBody === "string"
        ? parsedBody
        : "We could not send your message right now. Please try again in a moment.";
    throw new Error(message);
  }

  return parsedBody;
}
