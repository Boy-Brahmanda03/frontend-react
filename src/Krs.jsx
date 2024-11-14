import React from "react";
import { useEffect, useState } from "react";

export default function Krs() {
  const [krs, setKrs] = useState([]);

  useEffect(() => {
    fetch(`https://backend-ppl-production.up.railway.app/api/mahasiswa/krs/`)
      .then((res) => res.json())
      .then((data) => {
        setKrs(data);
      });
  }, []);
  return (
    <div>
      <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  kodeMK
                </th>
                <th scope="col" className="px-6 py-3">
                  Mata Kuliah
                </th>
                <th scope="col" className="px-6 py-3">
                  Semester
                </th>
                <th scope="col" className="px-6 py-3">
                  SKS
                </th>
                <th scope="col" className="px-6 py-3">
                  Nilai
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {krs.map((krsMhs, idx) => {
                return (
                  <tr
                    key={krsMhs.kodeMk}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{idx + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {krsMhs.kodeMk}
                    </th>
                    <td className="px-6 py-4">{krsMhs.mataKuliah}</td>
                    <td className="px-6 py-4">{krsMhs.semesterKRS}</td>
                    <td className="px-6 py-4">{krsMhs.sks}</td>
                    <td className="px-6 py-4">{krsMhs.nilai}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}
