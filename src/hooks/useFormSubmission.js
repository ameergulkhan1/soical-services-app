import { useState } from 'react';

export const useFormSubmission = (submitFn, successMessage, onSuccess) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values, formikHelpers) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await submitFn(values);
      
      if (response?.data?.success) {
        if (successMessage) {
          alert(successMessage);
        }
        if (onSuccess) {
          onSuccess(response.data);
        }
        if (formikHelpers?.resetForm) {
          formikHelpers.resetForm();
        }
      } else {
        setError(response?.data?.message || 'Operation failed. Please try again.');
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        'An unexpected error occurred. Please try again later.'
      );
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
    error,
    setError
  };
};