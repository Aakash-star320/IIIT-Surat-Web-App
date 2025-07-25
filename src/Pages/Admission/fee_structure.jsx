import React from "react";
import fee_pdf from "../../assets/Admission/Fee_Structure_2025_26.pdf";

const Fee = () => {
  return (
    <div className="flex flex-col items-center px-5 w-full mt-0">
      {/* Page Header */}
      <div className="flex items-center w-full mb-5">
        <div className="w-[4px] h-[40px] bg-[#660000] mr-2"></div>
        <h1
  className="flex flex-col text-xl text-[#660000] font-bold m-0 text-center"
  style={{ fontFamily: "Poppins, sans-serif" }}
>Fee Structure 2025-26</h1>

      </div>

      {/* PDF Viewer Section */}
      <main className="w-full max-w-screen-xl">
        <div className="flex flex-col gap-5 w-full">
          <section className="flex flex-col w-full px-0 md:px-5">
            <div className="flex flex-col items-center w-full gap-5">
              {/* Responsive PDF Viewer */}
              <div className="w-full">
                <iframe
                  src={fee_pdf}
                  title="Fee Structure 2025-26"
                  className="w-full h-[90vh] min-h-[600px] border border-gray-300 rounded-md"
                ></iframe>
              </div>

              {/* Download Button */}
              <a
                href={fee_pdf}
                download="Fee-Structure-2025-26.pdf"
                className="py-2 px-5 bg-[#660000] text-white rounded-md text-center hover:bg-[#990000] transition duration-300"
                style={{ textDecoration: "none", fontFamily: "Poppins, sans-serif" }}
              >
                Download PDF
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Fee;
