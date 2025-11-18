/**
 * FORMS PATTERN DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for form patterns
 * Shows real-world form examples using all components from the design system
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Contact Form (small) - compact contact form
 * 3. Sign Up Form (medium) - registration with validation
 * 4. Settings Form (medium) - preferences with toggles and selects
 * 5. Checkout Form (large) - complex multi-section form
 * 6. Form patterns and best practices
 */

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Radio } from "@/components/ui/Radio";
import { Switch } from "@/components/ui/Switch";
import { Mail, Eye, EyeOff, MapPin, CreditCard, Lock, AlertCircle } from "lucide-react";

export default function Forms() {
  // Contact Form State (Small)
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactErrors, setContactErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Sign Up Form State (Medium)
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [signUpErrors, setSignUpErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});

  // Settings Form State (Medium)
  const [displayName, setDisplayName] = useState("Alex Johnson");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [timezone, setTimezone] = useState("est");
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("system");

  // Checkout Form State (Large)
  const [shippingName, setShippingName] = useState("");
  const [shippingEmail, setShippingEmail] = useState("");
  const [shippingPhone, setShippingPhone] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingState, setShippingState] = useState("");
  const [shippingZip, setShippingZip] = useState("");
  const [shippingCountry, setShippingCountry] = useState("us");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [checkoutErrors, setCheckoutErrors] = useState<Record<string, string | undefined>>({});

  // Validation helpers
  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    return "";
  };

  // Contact Form Handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; email?: string; message?: string } = {};
    
    if (!contactName.trim()) errors.name = "Name is required";
    const emailError = validateEmail(contactEmail);
    if (emailError) errors.email = emailError;
    if (!contactMessage.trim()) errors.message = "Message is required";

    setContactErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      console.log("Contact form submitted:", { contactName, contactEmail, contactMessage });
      // Reset form
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      setContactErrors({});
    }
  };

  // Sign Up Form Handler
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      terms?: string;
    } = {};
    
    if (!signUpName.trim()) errors.name = "Name is required";
    const emailError = validateEmail(signUpEmail);
    if (emailError) errors.email = emailError;
    const passwordError = validatePassword(signUpPassword);
    if (passwordError) errors.password = passwordError;
    if (signUpPassword !== signUpConfirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!acceptTerms) {
      errors.terms = "You must accept the terms and conditions";
    }

    setSignUpErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      console.log("Sign up form submitted:", { signUpName, signUpEmail });
      // Reset form
      setSignUpName("");
      setSignUpEmail("");
      setSignUpPassword("");
      setSignUpConfirmPassword("");
      setAcceptTerms(false);
      setSignUpErrors({});
    }
  };

  // Checkout Form Handler
  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    
    if (!shippingName.trim()) errors.shippingName = "Name is required";
    const emailError = validateEmail(shippingEmail);
    if (emailError) errors.shippingEmail = emailError;
    if (!shippingPhone.trim()) errors.shippingPhone = "Phone is required";
    if (!shippingAddress.trim()) errors.shippingAddress = "Address is required";
    if (!shippingCity.trim()) errors.shippingCity = "City is required";
    if (!shippingState.trim()) errors.shippingState = "State is required";
    if (!shippingZip.trim()) errors.shippingZip = "Zip code is required";
    if (!paymentMethod) errors.paymentMethod = "Please select a payment method";
    if (paymentMethod === "card") {
      if (!cardName.trim()) errors.cardName = "Cardholder name is required";
      if (!cardNumber.trim()) errors.cardNumber = "Card number is required";
      if (!cardExpiry.trim()) errors.cardExpiry = "Expiry date is required";
      if (!cardCVC.trim()) errors.cardCVC = "CVC is required";
    }

    setCheckoutErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      console.log("Checkout form submitted");
      // In a real app, you would process the order here
    }
  };

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from Cards.tsx
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Forms</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Real-world form patterns using all components from the design system. Includes validation, error handling, and best practices for form design.
        </p>
      </div>

      {/* 
        CONTACT FORM SECTION (SMALL)
        Compact contact form with name, email, and message
      */}
      <section className="mb-10">
        <div className="mb-6">
          <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Contact Form (Small)</h3>
          <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
            Compact contact form pattern ideal for sidebars, modals, or compact spaces. Uses small-sized inputs and textarea.
          </p>
        </div>

        <div className="max-w-md">
          <Card
            title="Get in Touch"
            subtitle="Send us a message and we'll get back to you"
            footerContent={
              <Button
                variant="primary"
                size="small"
                onClick={handleContactSubmit}
                className="w-full"
              >
                Send Message
              </Button>
            }
          >
            <form onSubmit={handleContactSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Name
                </label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  value={contactName}
                  onChange={(e) => {
                    setContactName(e.target.value);
                    if (contactErrors.name) {
                      setContactErrors({ ...contactErrors, name: undefined });
                    }
                  }}
                  error={!!contactErrors.name}
                  size="small"
                />
                {contactErrors.name && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {contactErrors.name}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={contactEmail}
                  onChange={(e) => {
                    setContactEmail(e.target.value);
                    if (contactErrors.email) {
                      setContactErrors({ ...contactErrors, email: undefined });
                    }
                  }}
                  error={!!contactErrors.email}
                  size="small"
                />
                {contactErrors.email && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {contactErrors.email}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us what's on your mind..."
                  value={contactMessage}
                  onChange={(e) => {
                    setContactMessage(e.target.value);
                    if (contactErrors.message) {
                      setContactErrors({ ...contactErrors, message: undefined });
                    }
                  }}
                  error={!!contactErrors.message}
                  size="small"
                  rows={4}
                />
                {contactErrors.message && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {contactErrors.message}
                  </p>
                )}
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* 
        SIGN UP FORM SECTION (MEDIUM)
        Registration form with password confirmation and terms acceptance
      */}
      <section className="mb-10">
        <div className="mb-6">
          <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sign Up Form (Medium)</h3>
          <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
            Registration form with password fields, validation, and terms acceptance checkbox. Uses medium-sized inputs.
          </p>
        </div>

        <div className="max-w-lg">
          <Card
            title="Create Account"
            subtitle="Join our community today"
            footerContent={
              <div className="flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="medium"
                  onClick={handleSignUpSubmit}
                  className="w-full"
                >
                  Create Account
                </Button>
                <div className="text-center">
                  <Button
                    variant="link"
                    size="small"
                    onClick={() => console.log("Sign in clicked")}
                  >
                    Already have an account? Sign In
                  </Button>
                </div>
              </div>
            }
          >
            <form onSubmit={handleSignUpSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="signup-name" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Full Name
                </label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="John Doe"
                  value={signUpName}
                  onChange={(e) => {
                    setSignUpName(e.target.value);
                    if (signUpErrors.name) {
                      setSignUpErrors({ ...signUpErrors, name: undefined });
                    }
                  }}
                  error={!!signUpErrors.name}
                  size="medium"
                />
                {signUpErrors.name && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {signUpErrors.name}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="signup-email" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={signUpEmail}
                  onChange={(e) => {
                    setSignUpEmail(e.target.value);
                    if (signUpErrors.email) {
                      setSignUpErrors({ ...signUpErrors, email: undefined });
                    }
                  }}
                  error={!!signUpErrors.email}
                  size="medium"
                />
                {signUpErrors.email && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {signUpErrors.email}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="signup-password" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    value={signUpPassword}
                    onChange={(e) => {
                      setSignUpPassword(e.target.value);
                      if (signUpErrors.password) {
                        setSignUpErrors({ ...signUpErrors, password: undefined });
                      }
                      if (signUpErrors.confirmPassword && e.target.value === signUpConfirmPassword) {
                        setSignUpErrors({ ...signUpErrors, confirmPassword: undefined });
                      }
                    }}
                    error={!!signUpErrors.password}
                    size="medium"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sepia-600 dark:text-sepia-400 hover:text-sepia-900 dark:hover:text-sepia-50"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {signUpErrors.password && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {signUpErrors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="signup-confirm-password" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    id="signup-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={signUpConfirmPassword}
                    onChange={(e) => {
                      setSignUpConfirmPassword(e.target.value);
                      if (signUpErrors.confirmPassword) {
                        setSignUpErrors({ ...signUpErrors, confirmPassword: undefined });
                      }
                    }}
                    error={!!signUpErrors.confirmPassword}
                    size="medium"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sepia-600 dark:text-sepia-400 hover:text-sepia-900 dark:hover:text-sepia-50"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {signUpErrors.confirmPassword && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {signUpErrors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div>
                <Checkbox
                  checked={acceptTerms}
                  onCheckedChange={(checked) => {
                    setAcceptTerms(checked);
                    if (signUpErrors.terms) {
                      setSignUpErrors({ ...signUpErrors, terms: undefined });
                    }
                  }}
                  error={!!signUpErrors.terms}
                  label={
                    <span>
                      I agree to the{" "}
                      <Button variant="link" size="small" className="p-0 h-auto inline" onClick={(e) => { e.preventDefault(); console.log("Terms clicked"); }}>
                        Terms and Conditions
                      </Button>
                    </span>
                  }
                />
                {signUpErrors.terms && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1 ml-7">
                    <AlertCircle className="w-3 h-3" />
                    {signUpErrors.terms}
                  </p>
                )}
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* 
        SETTINGS FORM SECTION (MEDIUM)
        Preferences form with toggles, selects, and checkboxes
      */}
      <section className="mb-10">
        <div className="mb-6">
          <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Settings Form (Medium)</h3>
          <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
            User preferences form with toggles, select dropdowns, and checkboxes. Demonstrates various form controls working together.
          </p>
        </div>

        <div className="max-w-lg">
          <Card
            title="Preferences"
            subtitle="Customize your experience"
            footerContent={
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="medium"
                  onClick={() => {
                    setDisplayName("Alex Johnson");
                    setEmailNotifications(true);
                    setPushNotifications(false);
                    setMarketingEmails(true);
                    setTimezone("est");
                    setLanguage("en");
                    setTheme("system");
                  }}
                >
                  Reset
                </Button>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => console.log("Settings saved:", {
                    displayName,
                    emailNotifications,
                    pushNotifications,
                    marketingEmails,
                    timezone,
                    language,
                    theme,
                  })}
                  className="flex-1"
                >
                  Save Changes
                </Button>
              </div>
            }
          >
            <form className="space-y-6">
              {/* Display Name */}
              <div>
                <label htmlFor="display-name" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Display Name
                </label>
                <Input
                  id="display-name"
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  size="medium"
                />
              </div>

              {/* Notifications Section */}
              <div>
                <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">
                  Notifications
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                      <div>
                        <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                          Email Notifications
                        </p>
                        <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                          Receive updates via email
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                      size="medium"
                      className="[&>button]:h-7 [&>button]:w-14"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                      <div>
                        <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                          Push Notifications
                        </p>
                        <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                          Receive browser notifications
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={pushNotifications}
                      onCheckedChange={setPushNotifications}
                      size="medium"
                      className="[&>button]:h-7 [&>button]:w-14"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                      <div>
                        <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                          Marketing Emails
                        </p>
                        <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                          Receive promotional content
                        </p>
                      </div>
                    </div>
                    <Checkbox
                      checked={marketingEmails}
                      onCheckedChange={setMarketingEmails}
                      size="medium"
                    />
                  </div>
                </div>
              </div>

              {/* Preferences Section */}
              <div>
                <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">
                  Preferences
                </h4>
                <div className="space-y-4">
                  {/* Timezone Select */}
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                      Timezone
                    </label>
                    <Select
                      id="timezone"
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      size="medium"
                    >
                      <option value="est">Eastern Time (EST)</option>
                      <option value="cst">Central Time (CST)</option>
                      <option value="mst">Mountain Time (MST)</option>
                      <option value="pst">Pacific Time (PST)</option>
                    </Select>
                  </div>

                  {/* Language Select */}
                  <div>
                    <label htmlFor="language" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                      Language
                    </label>
                    <Select
                      id="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      size="medium"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </Select>
                  </div>

                  {/* Theme Radio Group */}
                  <div>
                    <label className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                      Theme
                    </label>
                    <div className="space-y-2">
                      <Radio
                        name="theme"
                        value="light"
                        checked={theme === "light"}
                        onCheckedChange={() => setTheme("light")}
                        label="Light"
                      />
                      <Radio
                        name="theme"
                        value="dark"
                        checked={theme === "dark"}
                        onCheckedChange={() => setTheme("dark")}
                        label="Dark"
                      />
                      <Radio
                        name="theme"
                        value="system"
                        checked={theme === "system"}
                        onCheckedChange={() => setTheme("system")}
                        label="System"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* 
        CHECKOUT FORM SECTION (LARGE)
        Complex multi-section form with shipping and payment
      */}
      <section className="mb-10">
        <div className="mb-6">
          <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Checkout Form (Large)</h3>
          <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
            Comprehensive checkout form with shipping information, payment method selection, and card details. Uses large-sized inputs for better visibility.
          </p>
        </div>

        <div className="max-w-2xl">
          <Card
            title="Checkout"
            subtitle="Complete your purchase"
            footerContent={
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between p-4 bg-sepia-100 dark:bg-sepia-900 rounded-lg">
                  <span className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">Total</span>
                  <span className="text-lg font-mono font-bold text-sepia-900 dark:text-sepia-50">$129.99</span>
                </div>
                <Button
                  variant="primary"
                  size="large"
                  onClick={handleCheckoutSubmit}
                  className="w-full"
                >
                  Complete Order
                </Button>
              </div>
            }
          >
            <form onSubmit={handleCheckoutSubmit} className="space-y-8">
              {/* Shipping Information Section */}
              <div>
                <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Shipping Information
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="shipping-name" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="shipping-name"
                        type="text"
                        placeholder="John Doe"
                        value={shippingName}
                        onChange={(e) => {
                          setShippingName(e.target.value);
                          if (checkoutErrors.shippingName) {
                            setCheckoutErrors({ ...checkoutErrors, shippingName: undefined });
                          }
                        }}
                        error={!!checkoutErrors.shippingName}
                        size="large"
                      />
                      {checkoutErrors.shippingName && (
                        <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {checkoutErrors.shippingName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="shipping-email" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                        Email
                      </label>
                      <Input
                        id="shipping-email"
                        type="email"
                        placeholder="you@example.com"
                        value={shippingEmail}
                        onChange={(e) => {
                          setShippingEmail(e.target.value);
                          if (checkoutErrors.shippingEmail) {
                            setCheckoutErrors({ ...checkoutErrors, shippingEmail: undefined });
                          }
                        }}
                        error={!!checkoutErrors.shippingEmail}
                        size="large"
                      />
                      {checkoutErrors.shippingEmail && (
                        <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {checkoutErrors.shippingEmail}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="shipping-phone" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="shipping-phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={shippingPhone}
                      onChange={(e) => {
                        setShippingPhone(e.target.value);
                        if (checkoutErrors.shippingPhone) {
                          setCheckoutErrors({ ...checkoutErrors, shippingPhone: undefined });
                        }
                      }}
                      error={!!checkoutErrors.shippingPhone}
                      size="large"
                    />
                    {checkoutErrors.shippingPhone && (
                      <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {checkoutErrors.shippingPhone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="shipping-address" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                      Street Address
                    </label>
                    <Input
                      id="shipping-address"
                      type="text"
                      placeholder="123 Main St"
                      value={shippingAddress}
                      onChange={(e) => {
                        setShippingAddress(e.target.value);
                        if (checkoutErrors.shippingAddress) {
                          setCheckoutErrors({ ...checkoutErrors, shippingAddress: undefined });
                        }
                      }}
                      error={!!checkoutErrors.shippingAddress}
                      size="large"
                    />
                    {checkoutErrors.shippingAddress && (
                      <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {checkoutErrors.shippingAddress}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="shipping-city" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                        City
                      </label>
                      <Input
                        id="shipping-city"
                        type="text"
                        placeholder="New York"
                        value={shippingCity}
                        onChange={(e) => {
                          setShippingCity(e.target.value);
                          if (checkoutErrors.shippingCity) {
                            setCheckoutErrors({ ...checkoutErrors, shippingCity: undefined });
                          }
                        }}
                        error={!!checkoutErrors.shippingCity}
                        size="large"
                      />
                      {checkoutErrors.shippingCity && (
                        <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {checkoutErrors.shippingCity}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="shipping-state" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                        State
                      </label>
                      <Input
                        id="shipping-state"
                        type="text"
                        placeholder="NY"
                        value={shippingState}
                        onChange={(e) => {
                          setShippingState(e.target.value);
                          if (checkoutErrors.shippingState) {
                            setCheckoutErrors({ ...checkoutErrors, shippingState: undefined });
                          }
                        }}
                        error={!!checkoutErrors.shippingState}
                        size="large"
                      />
                      {checkoutErrors.shippingState && (
                        <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {checkoutErrors.shippingState}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="shipping-zip" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                        ZIP Code
                      </label>
                      <Input
                        id="shipping-zip"
                        type="text"
                        placeholder="10001"
                        value={shippingZip}
                        onChange={(e) => {
                          setShippingZip(e.target.value);
                          if (checkoutErrors.shippingZip) {
                            setCheckoutErrors({ ...checkoutErrors, shippingZip: undefined });
                          }
                        }}
                        error={!!checkoutErrors.shippingZip}
                        size="large"
                      />
                      {checkoutErrors.shippingZip && (
                        <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {checkoutErrors.shippingZip}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="shipping-country" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                      Country
                    </label>
                    <Select
                      id="shipping-country"
                      value={shippingCountry}
                      onChange={(e) => setShippingCountry(e.target.value)}
                      size="large"
                    >
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="uk">United Kingdom</option>
                      <option value="au">Australia</option>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Payment Method Section */}
              <div>
                <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Payment Method
                </h4>
                <div className="space-y-3 mb-4">
                  <Radio
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onCheckedChange={() => setPaymentMethod("card")}
                    error={!!checkoutErrors.paymentMethod && !paymentMethod}
                    label="Credit or Debit Card"
                  />
                  <Radio
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onCheckedChange={() => setPaymentMethod("paypal")}
                    error={!!checkoutErrors.paymentMethod && !paymentMethod}
                    label="PayPal"
                  />
                  <Radio
                    name="payment"
                    value="apple"
                    checked={paymentMethod === "apple"}
                    onCheckedChange={() => setPaymentMethod("apple")}
                    error={!!checkoutErrors.paymentMethod && !paymentMethod}
                    label="Apple Pay"
                  />
                </div>
                {checkoutErrors.paymentMethod && (
                  <p className="text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1 mb-4">
                    <AlertCircle className="w-3 h-3" />
                    {checkoutErrors.paymentMethod}
                  </p>
                )}

                {/* Card Details (shown when card is selected) */}
                {paymentMethod === "card" && (
                  <div className="mt-4 p-4 border border-sepia-300 dark:border-sepia-700 rounded-lg space-y-4">
                    <div>
                      <label htmlFor="card-name" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                        Cardholder Name
                      </label>
                      <Input
                        id="card-name"
                        type="text"
                        placeholder="John Doe"
                        value={cardName}
                        onChange={(e) => {
                          setCardName(e.target.value);
                          if (checkoutErrors.cardName) {
                            setCheckoutErrors({ ...checkoutErrors, cardName: undefined });
                          }
                        }}
                        error={!!checkoutErrors.cardName}
                        size="large"
                      />
                      {checkoutErrors.cardName && (
                        <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {checkoutErrors.cardName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="card-number" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                        Card Number
                      </label>
                      <Input
                        id="card-number"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => {
                          setCardNumber(e.target.value);
                          if (checkoutErrors.cardNumber) {
                            setCheckoutErrors({ ...checkoutErrors, cardNumber: undefined });
                          }
                        }}
                        error={!!checkoutErrors.cardNumber}
                        size="large"
                      />
                      {checkoutErrors.cardNumber && (
                        <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {checkoutErrors.cardNumber}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="card-expiry" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                          Expiry Date
                        </label>
                        <Input
                          id="card-expiry"
                          type="text"
                          placeholder="MM/YY"
                          value={cardExpiry}
                          onChange={(e) => {
                            setCardExpiry(e.target.value);
                            if (checkoutErrors.cardExpiry) {
                              setCheckoutErrors({ ...checkoutErrors, cardExpiry: undefined });
                            }
                          }}
                          error={!!checkoutErrors.cardExpiry}
                          size="large"
                        />
                        {checkoutErrors.cardExpiry && (
                          <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {checkoutErrors.cardExpiry}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="card-cvc" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                          CVC
                        </label>
                        <Input
                          id="card-cvc"
                          type="text"
                          placeholder="123"
                          value={cardCVC}
                          onChange={(e) => {
                            setCardCVC(e.target.value);
                            if (checkoutErrors.cardCVC) {
                              setCheckoutErrors({ ...checkoutErrors, cardCVC: undefined });
                            }
                          }}
                          error={!!checkoutErrors.cardCVC}
                          size="large"
                        />
                        {checkoutErrors.cardCVC && (
                          <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {checkoutErrors.cardCVC}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* 
        FORM PATTERNS AND BEST PRACTICES SECTION
        Documentation of form design patterns
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Form Patterns & Best Practices</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Guidelines for creating effective forms using the design system components
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
              <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold mb-2">✓ Use appropriate sizes</p>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Small forms for compact spaces, medium for standard forms, large for important or complex forms.
              </p>
            </div>

            <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
              <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold mb-2">✓ Provide clear labels</p>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Always include descriptive labels for all form fields. Use helper text for additional context when needed.
              </p>
            </div>

            <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
              <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold mb-2">✓ Show validation errors</p>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Display error messages inline with fields. Use the error prop on inputs and show error text below fields.
              </p>
            </div>

            <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
              <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold mb-2">✓ Group related fields</p>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Use sections and visual grouping to organize complex forms. Consider using Cards to separate form sections.
              </p>
            </div>

            <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
              <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold mb-2">✓ Use appropriate controls</p>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Selects for dropdowns, Radio for single choice, Checkbox for multiple selections, Switch for on/off toggles.
              </p>
            </div>

            <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
              <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold mb-2">✓ Clear call-to-action</p>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Use primary buttons for main actions. Place secondary actions (like Cancel) as outline or link buttons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

