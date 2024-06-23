'use client'
import React, { useState, useEffect } from 'react';
import { TbReportSearch } from "react-icons/tb";

interface Report {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      setLoading(true);
      // Simulate fetching reports with a timeout
      const mockReports: Report[] = [
        {
          id: 1,
          title: 'Quarterly Sales Report',
          description: 'An overview of the sales performance for the last quarter.',
          date: '2024-06-01'
        },
        {
          id: 2,
          title: 'Customer Feedback Analysis',
          description: 'A detailed analysis of customer feedback collected over the past year.',
          date: '2024-05-15'
        },
        {
          id: 3,
          title: 'Market Research Report',
          description: 'Insights from our latest market research study.',
          date: '2024-04-20'
        },
        {
          id: 4,
          title: 'Financial Summary',
          description: 'Summary of financial performance and key metrics.',
          date: '2024-03-10'
        }
      ];
      setTimeout(() => {
        setReports(mockReports);
        setLoading(false);
      }, 1000); // Simulate network delay
    } catch (error) {
      console.error('Error fetching reports:', error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">Report History</h2>
        </header>

        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Reports</h3>
          <div className="border-t border-gray-200 pt-4">
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <p>Loading reports...</p>
              </div>
            ) : reports.length > 0 ? (
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold">{report.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{report.description}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{new Date(report.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-center py-8 text-center sm:text-left">
                <TbReportSearch className="text-blue-500 mb-2 sm:mb-0 sm:mr-2" size={24} />
                <p className="text-base sm:text-lg">
                  <span className="font-bold">Oh!!</span> You Have No Submitted Reports
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;