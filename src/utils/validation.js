// Form validation utilities
export const validatePassword = (password) => {
  const errors = [];
  if (!password) errors.push("Password is required");
  if (password && password.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }
  return errors;
};

export const validateEmail = (email) => {
  const errors = [];
  if (!email) errors.push("Email is required");
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.push("Invalid email address");
  }
  return errors;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  const errors = [];
  if (!confirmPassword) errors.push("Please confirm your password");
  if (password && confirmPassword && password !== confirmPassword) {
    errors.push("Passwords do not match");
  }
  return errors;
};