const Refunds = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center p-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">REFUND POLICY</h1>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            We offer a 7 days &quot;NO QUESTIONS ASKED&quot; refund policy.
          </li>
          <li>
            Within the 7 days of your course purchase, you can ask for the
            refund anytime.
          </li>
          <li>
            For refunds, please mail us at
            <a
              href="mailto:support@namastedev.com"
              className="text-blue-400 underline"
            >
              vemulajagadeesh27@gmail.com
            </a>
            .
          </li>
          <li>
            In case of a course bundle, a refund will be initiated for the whole
            course bundle, and not for individual courses.
          </li>
          <li>
            After the refund is initiated, it takes around 5–7 business days for
            the amount to be reflected in your bank.
          </li>
          <li>
            Please note that once a refund is processed, no further refunds will
            be provided for the same purchase/course.
          </li>
          <li>
            Purchases made using the &quot;Gift-a-course&quot; feature are not
            eligible for a refund.
          </li>
          <li>Refunds are only provided if you have access to the course.</li>
          <li>
            If your email ID is found to be suspicious or involved in malicious
            activity, a refund will not be initiated.
          </li>
          <li>
            If any queries, feel free to contact us at
            <a
              href="mailto:support@namastedev.com"
              className="text-blue-400 underline"
            >
              vemulajagadeesh27@gmail.com
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Refunds;
