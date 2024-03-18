"use client"
import TableData from "./datatable";

export default function Table() {

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-900 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                File name
              </th>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th scope="col" className="px-6 py-3 flex justify-center">
                Download or Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <TableData/>
          </tbody>
        </table>
      </div>
    </>
  );
}
