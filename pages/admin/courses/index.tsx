import React from "react";
import AdminLayout from "@/components/adminLayout";

function index() {
  return (
    <AdminLayout>
      <div>
        <button className="rounded bg-sky-900 text-white p-2">
          New Course
        </button>
      </div>

      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Course pic
              </th>
              <th scope="col" className="px-6 py-3">
                 Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default index;
