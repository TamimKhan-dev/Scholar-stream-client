import React from "react";

const FAQ = () => {
  return (
    <div className="mb-20">
      <h2 className="text-2xl mb-3 font-bold">Frequently Asked Question</h2>

      <div className="space-y-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            What is ScholarStream?
          </div>
          <div className="collapse-content text-sm text-gray-400">
            ScholarStream is an online platform that connects students with
            verified scholarship opportunities posted by universities,
            organizations, and institutions. Students can explore, filter, and
            apply for scholarships—all in one place.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How does ScholarStream help students?
          </div>
          <div className="collapse-content text-sm text-gray-400">
            It removes the hassle of browsing multiple websites and social media
            posts. Students get a centralized list of scholarships, complete
            details, application requirements, deadlines, and direct apply
            options.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Who can post scholarships on ScholarStream?
          </div>
          <div className="collapse-content text-sm text-gray-400">
            Verified universities, NGOs, educational organizations, and
            authorized institutions can create an account and publish
            scholarship opportunities through the admin dashboard.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Does ScholarStream charge any fee for students?
          </div>
          <div className="collapse-content text-sm text-gray-400">
            No. Students can search for scholarships, view details, and apply
            for free. The platform’s goal is to make financial aid more
            accessible to everyone.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Is every scholarship verified?
          </div>
          <div className="collapse-content text-sm text-gray-400">
            Yes. Before a scholarship goes live, the ScholarStream team reviews
            the details to ensure authenticity and prevent misleading or
            fraudulent posts.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            Can I track my application status?
          </div>
          <div className="collapse-content text-sm text-gray-400">
            Absolutely. Once a student applies for a scholarship, they can
            monitor the progress—whether it’s submitted, under review, selected,
            or not selected—through their personal dashboard.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
