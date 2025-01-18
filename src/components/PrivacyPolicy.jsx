const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">PRIVACY POLICY</h1>
        <p className="mb-6">
          This Privacy Policy (the <span className="font-bold">“Policy”</span>)
          governs the manner in which the Platform collects, uses, maintains,
          and discloses information of its users...
        </p>
        <section>
          <h2 className="text-xl font-semibold mb-4">
            1. PERSONAL INFORMATION
          </h2>
          <p className="mb-4">
            <span className="font-bold">&quot;Personal Information&quot;</span>{" "}
            shall mean the information which identifies a Learner i.e., first
            and last name, identification number, age, gender, location...
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">
            2. INFORMATION WE COLLECT:
          </h2>
          <p className="mb-4">
            We may collect both personal and non-personal identifiable
            information from You in a variety of ways...
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li className="mb-2">
              <span className="font-bold">
                a. Personal Identifiable Information:
              </span>{" "}
              We may collect personal-identifiable information...
            </li>
            <li className="mb-2">
              <span className="font-bold">
                b. Non-Personal Identifiable Information:
              </span>
              When You interact with our Platform...
            </li>
            <li>
              <span className="font-bold">c. Cookies:</span> To enhance User
              experience, our Platform may use &#39;cookies&#39;...
            </li>
          </ul>
        </section>
        <footer className="mt-8">
          <p>
            If you have any questions, please contact us at the contact
            information provided below.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
