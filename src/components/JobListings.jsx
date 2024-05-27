import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchjobs = async () => {
      const apiUrl = isHome
        ? "http://localhost:8000/jobs?_limit=3"
        : "http://localhost:8000/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.log("ERROR occured due to this reason:...", err);
      } finally {
        setLoading(false);
      }
    };
    fetchjobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-md lg:container m-auto">
        <h2 className="text-violet-600 font-sans text-3xl text-center font-bold">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing job={job} key={job.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
