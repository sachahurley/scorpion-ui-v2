/**
 * CARDS PATTERN DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for card components
 * Shows interactive examples: Sign In, Sign Up, Profile, Settings
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Sign In Card (interactive with validation)
 * 3. Sign Up Card (interactive with validation)
 * 4. Profile Card (interactive)
 * 5. Settings Card (interactive)
 * 6. Token breakdown
 */

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Dropdown } from "@/components/ui/Dropdown";
import { Switch } from "@/components/ui/Switch";
import { User, Mail, Eye, EyeOff, Bell, Moon, Globe, Check, ChevronDown } from "lucide-react";

export default function Cards() {
  // Sign In Form State
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [signInErrors, setSignInErrors] = useState<{ email?: string; password?: string }>({});

  // Sign Up Form State
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showSignUpConfirmPassword, setShowSignUpConfirmPassword] = useState(false);
  const [signUpErrors, setSignUpErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  // Profile Card State
  const [profileName, setProfileName] = useState("Alex Johnson");
  const [profileEmail, setProfileEmail] = useState("alex.johnson@example.com");
  const [profileBio, setProfileBio] = useState("Product designer passionate about creating beautiful interfaces.");

  // Settings Card State
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

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

  // Sign In Handler
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; password?: string } = {};
    
    const emailError = validateEmail(signInEmail);
    if (emailError) errors.email = emailError;
    
    const passwordError = validatePassword(signInPassword);
    if (passwordError) errors.password = passwordError;

    setSignInErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      console.log("Sign In:", { email: signInEmail, password: signInPassword });
      // Reset form
      setSignInEmail("");
      setSignInPassword("");
      setSignInErrors({});
    }
  };

  // Sign Up Handler
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    
    if (!signUpName.trim()) errors.name = "Name is required";
    
    const emailError = validateEmail(signUpEmail);
    if (emailError) errors.email = emailError;
    
    const passwordError = validatePassword(signUpPassword);
    if (passwordError) errors.password = passwordError;
    
    if (signUpPassword !== signUpConfirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setSignUpErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      console.log("Sign Up:", {
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword,
      });
      // Reset form
      setSignUpName("");
      setSignUpEmail("");
      setSignUpPassword("");
      setSignUpConfirmPassword("");
      setSignUpErrors({});
    }
  };

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from other documentation pages
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Cards</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Reusable card components with header, content, and footer sections. Includes interactive examples for common use cases like authentication, profiles, and settings.
        </p>
      </div>

      {/* 
        SIGN IN CARD SECTION
        Interactive sign in form with validation
      */}
      <section className="mb-10">
        <div className="mb-6">
          <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sign In Card</h3>
          <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
            Authentication card with email and password fields, validation states, and password visibility toggle.
          </p>
        </div>

        <div className="max-w-md">
          <Card
            title="Sign In"
            subtitle="Enter your credentials to access your account"
            footerContent={
              <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
                <Button
                  variant="link"
                  size="small"
                  onClick={() => console.log("Forgot password clicked")}
                >
                  Forgot Password?
                </Button>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
              </div>
            }
          >
            <form onSubmit={handleSignIn} className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="signin-email" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Email
                </label>
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="you@example.com"
                  value={signInEmail}
                  onChange={(e) => {
                    setSignInEmail(e.target.value);
                    if (signInErrors.email) {
                      setSignInErrors({ ...signInErrors, email: undefined });
                    }
                  }}
                  error={!!signInErrors.email}
                  size="medium"
                />
                {signInErrors.email && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500">
                    {signInErrors.email}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="signin-password" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="signin-password"
                    type={showSignInPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={signInPassword}
                    onChange={(e) => {
                      setSignInPassword(e.target.value);
                      if (signInErrors.password) {
                        setSignInErrors({ ...signInErrors, password: undefined });
                      }
                    }}
                    error={!!signInErrors.password}
                    size="medium"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignInPassword(!showSignInPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sepia-600 dark:text-sepia-400 hover:text-sepia-900 dark:hover:text-sepia-50"
                    aria-label={showSignInPassword ? "Hide password" : "Show password"}
                  >
                    {showSignInPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {signInErrors.password && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500">
                    {signInErrors.password}
                  </p>
                )}
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* 
        SIGN UP CARD SECTION
        Interactive sign up form with validation
      */}
      <section className="mb-10">
        <div className="mb-6">
          <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sign Up Card</h3>
          <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
            Registration card with multiple fields, password confirmation, and comprehensive validation.
          </p>
        </div>

        <div className="max-w-md">
          <Card
            title="Create Account"
            subtitle="Join us today and start your journey"
            footerContent={
              <div className="flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="medium"
                  onClick={handleSignUp}
                  className="w-full"
                >
                  Sign Up
                </Button>
                <div className="text-center">
                  <Button
                    variant="link"
                    size="small"
                    onClick={() => console.log("Sign in link clicked")}
                  >
                    Already have an account? Sign In
                  </Button>
                </div>
              </div>
            }
          >
            <form onSubmit={handleSignUp} className="space-y-4">
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
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500">
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
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500">
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
                    type={showSignUpPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    value={signUpPassword}
                    onChange={(e) => {
                      setSignUpPassword(e.target.value);
                      if (signUpErrors.password) {
                        setSignUpErrors({ ...signUpErrors, password: undefined });
                      }
                      // Clear confirm password error if passwords match
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
                    onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sepia-600 dark:text-sepia-400 hover:text-sepia-900 dark:hover:text-sepia-50"
                    aria-label={showSignUpPassword ? "Hide password" : "Show password"}
                  >
                    {showSignUpPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {signUpErrors.password && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500">
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
                    type={showSignUpConfirmPassword ? "text" : "password"}
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
                    onClick={() => setShowSignUpConfirmPassword(!showSignUpConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sepia-600 dark:text-sepia-400 hover:text-sepia-900 dark:hover:text-sepia-50"
                    aria-label={showSignUpConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showSignUpConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {signUpErrors.confirmPassword && (
                  <p className="mt-1 text-xs font-mono text-error-600 dark:text-error-500">
                    {signUpErrors.confirmPassword}
                  </p>
                )}
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* 
        PROFILE CARD SECTION
        Interactive profile card with editable fields
      */}
      <section className="mb-10">
        <div className="mb-6">
          <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Profile Card</h3>
          <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
            User profile card with editable information and action buttons.
          </p>
        </div>

        <div className="max-w-md">
          <Card
            headerContent={
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-400 flex items-center justify-center">
                  <User className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-base font-mono font-bold text-sepia-900 dark:text-sepia-50">
                    {profileName}
                  </h3>
                  <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                    {profileEmail}
                  </p>
                </div>
              </div>
            }
            footerContent={
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="medium"
                  onClick={() => {
                    setProfileName("Alex Johnson");
                    setProfileEmail("alex.johnson@example.com");
                    setProfileBio("Product designer passionate about creating beautiful interfaces.");
                  }}
                >
                  Reset
                </Button>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => console.log("Save profile:", { profileName, profileEmail, profileBio })}
                  className="flex-1"
                >
                  Save Changes
                </Button>
              </div>
            }
          >
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="profile-name" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Name
                </label>
                <Input
                  id="profile-name"
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  size="medium"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="profile-email" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Email
                </label>
                <Input
                  id="profile-email"
                  type="email"
                  value={profileEmail}
                  onChange={(e) => setProfileEmail(e.target.value)}
                  size="medium"
                />
              </div>

              {/* Bio Textarea */}
              <div>
                <label htmlFor="profile-bio" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  Bio
                </label>
                <textarea
                  id="profile-bio"
                  value={profileBio}
                  onChange={(e) => setProfileBio(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-sepia-300 dark:border-sepia-700 bg-white dark:bg-sepia-975 text-sepia-900 dark:text-sepia-50 font-mono text-sm placeholder:text-sepia-400 dark:placeholder:text-sepia-600 focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-sepia-50 dark:focus:ring-offset-sepia-1000 transition-all duration-200"
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 
        SETTINGS CARD SECTION
        Interactive settings card with toggles and options
      */}
      <section className="mb-10">
        <div className="mb-6">
          <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Settings Card</h3>
          <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
            Settings card with toggle switches, dropdowns, and preference options.
          </p>
        </div>

        <div className="max-w-md">
          <Card
            title="Settings"
            subtitle="Manage your preferences and notifications"
            footerContent={
              <Button
                variant="primary"
                size="medium"
                onClick={() => console.log("Save settings:", {
                  emailNotifications,
                  pushNotifications,
                  darkMode,
                  language,
                })}
                className="w-full"
              >
                Save Settings
              </Button>
            }
          >
            <div className="space-y-6">
              {/* Notifications Section */}
              <div>
                <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">
                  Notifications
                </h4>
                <div className="space-y-4">
                  {/* Email Notifications Toggle */}
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
                      aria-label="Toggle email notifications"
                    />
                  </div>

                  {/* Push Notifications Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
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
                      aria-label="Toggle push notifications"
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
                  {/* Dark Mode Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Moon className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                      <div>
                        <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                          Dark Mode
                        </p>
                        <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                          Use dark theme
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                      size="medium"
                      className="[&>button]:h-7 [&>button]:w-14"
                      aria-label="Toggle dark mode"
                    />
                  </div>

                  {/* Language Selector */}
                  <div>
                    <label htmlFor="settings-language" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                      Language
                    </label>
                    <Dropdown
                      trigger={
                        <Button 
                          variant="outline" 
                          size="medium" 
                          iconLeft={<Globe />}
                          iconRight={<ChevronDown />}
                          className="w-full justify-start"
                        >
                          {language === "en" ? "English" : language === "es" ? "Spanish" : language === "fr" ? "French" : "German"}
                        </Button>
                      }
                      items={[
                        { 
                          label: "English", 
                          onClick: () => setLanguage("en"),
                          icon: <Globe className="w-5 h-5" />,
                          iconRight: language === "en" ? <Check className="w-5 h-5" /> : undefined
                        },
                        { 
                          label: "Spanish", 
                          onClick: () => setLanguage("es"),
                          icon: <Globe className="w-5 h-5" />,
                          iconRight: language === "es" ? <Check className="w-5 h-5" /> : undefined
                        },
                        { 
                          label: "French", 
                          onClick: () => setLanguage("fr"),
                          icon: <Globe className="w-5 h-5" />,
                          iconRight: language === "fr" ? <Check className="w-5 h-5" /> : undefined
                        },
                        { 
                          label: "German", 
                          onClick: () => setLanguage("de"),
                          icon: <Globe className="w-5 h-5" />,
                          iconRight: language === "de" ? <Check className="w-5 h-5" /> : undefined
                        },
                      ]}
                      size="medium"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 
        TESTIMONIAL CARD SECTION
        Testimonial card with avatar, quote, and attribution
      */}
      <section className="mb-10">
        <div className="mb-6">
          <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Testimonial Card</h3>
          <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
            Testimonial card featuring a circular avatar, quote, and attribution with name, job title, and company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 - Sarah Johnson */}
          <Card className="flex flex-col">
            <div className="flex flex-col flex-1 min-h-0">
              {/* Quote Text - Takes up available space */}
              <div className="flex-1 flex items-start">
                <blockquote className="text-base font-mono text-sepia-900 dark:text-sepia-50 leading-relaxed">
                  Scorpion UI has transformed how we build interfaces. The design system is intuitive, well-documented, and makes collaboration seamless across our team.
                </blockquote>
              </div>

              {/* Attribution - Locked to bottom */}
              <div className="flex items-center gap-4 pt-4 mt-6 border-t border-sepia-300 dark:border-sepia-700">
                {/* Circular Avatar */}
                <div className="w-16 h-16 rounded-full bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-mono font-bold text-black">SJ</span>
                </div>
                
                {/* Name, Title, Company */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                    Sarah Johnson
                  </p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                    Senior Product Designer
                  </p>
                  <p className="text-xs font-mono text-sepia-500 dark:text-sepia-500">
                    Design Co.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Testimonial 2 - Michael Chen */}
          <Card className="flex flex-col">
            <div className="flex flex-col flex-1 min-h-0">
              {/* Quote Text - Takes up available space */}
              <div className="flex-1 flex items-start">
                <blockquote className="text-base font-mono text-sepia-900 dark:text-sepia-50 leading-relaxed">
                  The token-based approach means we can iterate quickly while maintaining visual consistency. It's exactly what we needed.
                </blockquote>
              </div>
              
              {/* Attribution - Locked to bottom */}
              <div className="flex items-center gap-4 pt-4 mt-6 border-t border-sepia-300 dark:border-sepia-700">
                <div className="w-16 h-16 rounded-full bg-secondary-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-mono font-bold text-white">MC</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                    Michael Chen
                  </p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                    Frontend Lead
                  </p>
                  <p className="text-xs font-mono text-sepia-500 dark:text-sepia-500">
                    Tech Startup Inc.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 
        TOKEN BREAKDOWN SECTION
        Documentation of design tokens used in cards
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Card Token Breakdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Complete documentation of all design tokens used in card components
            </p>
          </div>

          <div className="space-y-6">
            {/* Card Container */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Card Container</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">var(--surface-card)</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border Radius</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">24px (rounded-[24px])</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">0.5px solid sepia-500/800</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Padding</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">16px mobile / 24px desktop</p>
                </div>
              </div>
            </div>

            {/* Header Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Header Section</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Title Font</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">font-mono, 16px, bold</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Subtitle Font</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">font-mono, 14px, regular</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border Bottom</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">0.5px solid sepia-500/800</p>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Footer Section</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">sepia-50 / sepia-975</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border Top</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">0.5px solid sepia-500/800</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

