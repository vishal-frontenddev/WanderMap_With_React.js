import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-2">
        We respect your privacy and are committed to protecting your personal information.
        This Privacy Policy outlines how we collect, use, and safeguard your data...
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside">
        <li>Personal details (name, email, etc.) during signup/login</li>
        <li>Location info if you use map features</li>
        <li>Cookies for user session and analytics</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc list-inside">
        <li>To personalize your experience</li>
        <li>To improve our services</li>
        <li>To provide customer support</li>
      </ul>

      <p className="mt-6">
        By using WanderMap, you agree to this privacy policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
