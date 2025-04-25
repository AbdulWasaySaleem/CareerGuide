import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Introduction</h2>
          <p>
            Welcome to CareerMentor. We care about your privacy and want to be clear about how we use your information. This Privacy Policy explains what information we collect and how we use it when you use our service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Information We Collect</h2>
          <p className="mb-3">
            To help suggest careers for you, we may collect:
          </p>
          <ul className="list-disc pl-8 mb-3">
            <li>Basic information (name, email address)</li>
            <li>Skills and interests</li>
            <li>Career preferences</li>
          </ul>
          <p>
            We only collect what we need to give you helpful career guidance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">How We Use Your Information</h2>
          <p className="mb-3">
            We use your information to:
          </p>
          <ul className="list-disc pl-8 mb-3">
            <li>Suggest careers that might interest you</li>
            <li>Make our service better</li>
            <li>Reply to your questions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Keeping Your Information Safe</h2>
          <p>
            We take steps to protect your information and keep it secure. However, no online service can guarantee complete security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">How Long We Keep Your Information</h2>
          <p>
            We only keep your information for as long as we need it to provide our service to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Your Rights</h2>
          <p className="mb-3">
            You have the right to:
          </p>
          <ul className="list-disc pl-8 mb-3">
            <li>See what information we have about you</li>
            <li>Fix any incorrect information</li>
            <li>Ask us to delete your information</li>
            <li>Ask us to stop using your information</li>
          </ul>
        </section>

       

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We'll let you know about any important changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at: contact@careermentor.com
          </p>
        </section>

        <div className="border-t border-gray-200 pt-4 mt-8">
          <p className="text-sm text-gray-500">
            Last Updated: April 26, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;