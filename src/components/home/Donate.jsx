import { useState } from "react";
import {
  FaHandHoldingHeart,
  FaUniversity,
  FaCopy,
  FaCheckCircle,
} from "react-icons/fa";
import QRImage from "../../assets/qr - Copy.png"

const Donate = () => {
  const [copied, setCopied] = useState(false);

  const copyUPI = () => {
    navigator.clipboard.writeText("dreamstrust@ucobank");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="pt-20 bg-gray-50 min-h-screen">

      {/* Hero */}

      <div className="bg-gradient-to-r from-emerald-900 via-green-800 to-teal-700 py-6">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold text-white">
            Support Dreams Trust
          </h1>

          <p className="mt-6 text-lg text-green-100 max-w-3xl mx-auto">
            Your contribution helps us provide education, healthcare,
            livelihood support, women empowerment and community development
            for underprivileged families.
          </p>

        </div>

      </div>

      {/* Main */}

      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <div>

            <h2 className="text-4xl font-bold text-green-800">
              Why Donate?
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Every donation brings hope and creates opportunities for
              children, women and vulnerable communities.
            </p>

            <div className="space-y-5 mt-10">

              <div className="bg-white rounded-xl shadow-md p-6 flex gap-5">

                <FaHandHoldingHeart className="text-4xl text-green-700" />

                <div>

                  <h3 className="font-bold text-xl">
                    Education
                  </h3>

                  <p className="text-gray-600 mt-2">
                    School support, tuition, books and uniforms.
                  </p>

                </div>

              </div>

              <div className="bg-white rounded-xl shadow-md p-6 flex gap-5">

                <FaHandHoldingHeart className="text-4xl text-green-700" />

                <div>

                  <h3 className="font-bold text-xl">
                    Healthcare
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Medical camps and health awareness programs.
                  </p>

                </div>

              </div>

              <div className="bg-white rounded-xl shadow-md p-6 flex gap-5">

                <FaHandHoldingHeart className="text-4xl text-green-700" />

                <div>

                  <h3 className="font-bold text-xl">
                    Women Empowerment
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Skill training and livelihood support.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h2 className="text-3xl font-bold text-center text-green-800">
                Scan & Donate
              </h2>

              <p className="text-center text-gray-600 mt-3">
                Scan the QR code using any UPI app.
              </p>

              <img
                src={QRImage}
                alt="Dreams Trust QR"
                className="w-64 h-64 mx-auto mt-8 border rounded-xl p-3"
              />

              <div className="mt-8 text-center">

                <h3 className="text-lg font-semibold">
                  UPI ID
                </h3>

                <p className="text-green-700 font-bold text-xl mt-2">
                  dreamstrust@ucobank
                </p>

                <button
                  onClick={copyUPI}
                  className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg flex items-center gap-3 mx-auto transition"
                >
                  <FaCopy />

                  {copied ? "Copied!" : "Copy UPI ID"}
                </button>

              </div>

            </div>

            {/* Bank Details */}

            <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">

              <div className="flex items-center gap-3 mb-6">

                <FaUniversity className="text-3xl text-green-700" />

                <h2 className="text-2xl font-bold">
                  Bank Details
                </h2>

              </div>

              <div className="space-y-3 text-gray-700">

                <p>
                  <strong>Account Name :</strong> Dreams Trust
                </p>

                <p>
                  <strong>Bank :</strong> UCO Bank
                </p>

                <p>
                  <strong>UPI :</strong> dreamstrust@ucobank
                </p>

                <p>
                  <strong>Purpose :</strong> NGO Donation
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Thank You */}

      <div className="bg-gradient-to-r from-green-800 to-emerald-700 py-16">

        <div className="max-w-5xl mx-auto text-center px-6">

          <FaCheckCircle className="text-6xl text-white mx-auto mb-5" />

          <h2 className="text-4xl font-bold text-white">
            Thank You For Your Support
          </h2>

          <p className="mt-5 text-green-100 text-lg">
            Your generosity helps transform lives and build a brighter future
            for children, women and communities.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Donate;