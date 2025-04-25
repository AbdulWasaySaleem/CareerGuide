import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Terms of Service</h1>
      
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Welcome to CareerMentor</h2>
          <p>
            These Terms of Service govern your use of the CareerMentor platform, a practice project designed to provide career guidance and recommendations to students. By accessing or using our service, you agree to be bound by these Terms. Please read them carefully.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Service Description</h2>
          <p className="mb-3">
            CareerMentor is a practice project that offers career guidance and recommendations based on the information you provide. Our algorithm analyzes your educational background, skills, interests, and preferences to suggest potential career paths.
          </p>
          <p>
            While we strive to provide accurate and helpful recommendations, the final career choice remains your responsibility. Our suggestions should be considered as one of many resources in your career decision-making process.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">User Accounts</h2>
          <p className="mb-3">
            To access certain features of our service, you may need to create an account. You are responsible for:
          </p>
          <ul className="list-disc pl-8 mb-3">
            <li>Providing accurate and complete information</li>
            <li>Maintaining the security of your account credentials</li>
            <li>All activities that occur under your account</li>
          </ul>
          <p>
            We reserve the right to disable any user account if we believe you have violated these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">User Conduct</h2>
          <p className="mb-3">
            When using our service, you agree not to:
          </p>
          <ul className="list-disc pl-8 mb-3">
            <li>Violate any applicable laws or regulations</li>
            <li>Impersonate any person or entity</li>
            <li>Submit false or misleading information</li>
            <li>Interfere with the proper functioning of the service</li>
            <li>Attempt to access areas of the system not intended for public use</li>
            <li>Use automated means to access or collect data from the service</li>
            <li>Engage in any activity that could harm the service or other users</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Intellectual Property</h2>
          <p className="mb-3">
            The CareerMentor platform, including but not limited to its software, graphics, logo, design, and content, is owned by the project creators and protected by intellectual property laws.
          </p>
          <p>
            You may not copy, modify, distribute, sell, or lease any part of our service without express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Disclaimer of Warranties</h2>
          <p>
            CareerMentor is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that our service will be uninterrupted, secure, or error-free. Career recommendations are provided for informational purposes only and do not constitute professional career counseling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, CareerMentor and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Modifications to the Service</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the service (or any part thereof) at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Changes to Terms</h2>
          <p>
            We may revise these Terms at any time by updating this page. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: terms@careermentor.com
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

export default TermsOfService;