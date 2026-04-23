import React, { useState } from 'react';

export interface OptInFormData {
  fullName: string;
  email: string;
  mobileNumber: string;
}

export interface OptInDialogProps {
  isOpen: boolean;
  programName: string;
  onClose: () => void;
  onSubmit: (data: OptInFormData) => Promise<void>;
  isLoading?: boolean;
}

const OptInDialog: React.FC<OptInDialogProps> = ({
  isOpen,
  programName,
  onClose,
  onSubmit,
  isLoading = false,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!fullName.trim()) {
      setError('Full name is required');
      return;
    }
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!mobileNumber.trim()) {
      setError('Mobile number is required');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      await onSubmit({
        fullName: fullName.trim(),
        email: email.trim(),
        mobileNumber: mobileNumber.trim(),
      });

      // Reset form on success
      setFullName('');
      setEmail('');
      setMobileNumber('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    }
  };

  const handleClose = () => {
    // Reset form when closing
    setFullName('');
    setEmail('');
    setMobileNumber('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="optin-dialog-title"
    >
      <div className="relative w-full max-w-md border border-tlbs-gold/40 bg-tlbs-black p-8 shadow-tlbs-glow rounded-tlbs">
        <button
          type="button"
          onClick={handleClose}
          disabled={isLoading}
          className="absolute right-4 top-4 text-tlbs-cream/50 hover:text-tlbs-cream disabled:opacity-50"
          aria-label="Close dialog"
        >
          <span className="text-xl">×</span>
        </button>

        <h3
          id="optin-dialog-title"
          className="pr-8 font-serif text-2xl font-normal text-tlbs-cream"
        >
          Join {programName}
        </h3>
        <p className="mt-2 text-sm text-tlbs-cream/55">
          Complete the form below to proceed to enrollment.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm text-tlbs-cream/70 mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isLoading}
              required
              placeholder="Enter your full name"
              className="w-full rounded-tlbs border border-tlbs-border bg-tlbs-card px-4 py-3 text-tlbs-cream placeholder:text-tlbs-cream/40 focus:border-tlbs-gold focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-tlbs-cream/70 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              placeholder="Enter your email"
              className="w-full rounded-tlbs border border-tlbs-border bg-tlbs-card px-4 py-3 text-tlbs-cream placeholder:text-tlbs-cream/40 focus:border-tlbs-gold focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobileNumber" className="block text-sm text-tlbs-cream/70 mb-2">
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              disabled={isLoading}
              required
              placeholder="Enter your mobile number"
              className="w-full rounded-tlbs border border-tlbs-border bg-tlbs-card px-4 py-3 text-tlbs-cream placeholder:text-tlbs-cream/40 focus:border-tlbs-gold focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-tlbs bg-red-900/20 border border-red-700/50 p-3">
              <p className="text-sm text-red-300">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-tlbs bg-tlbs-gold py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-tlbs-black hover:bg-tlbs-gold-lt disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Processing...' : 'Continue to Enrollment'}
          </button>

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            disabled={isLoading}
            className="w-full text-center text-xs text-tlbs-cream/45 hover:text-tlbs-cream/70 disabled:opacity-50 transition-colors"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default OptInDialog;
