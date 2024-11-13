import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              NIM
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">1</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Nama
            </th>
            <td className="px-6 py-4">2105551148</td>
            <td className="px-6 py-4 text-right">
              <Link
                to={`/detail/2105551148`}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Detail
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
