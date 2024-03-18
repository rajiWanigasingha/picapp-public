"use client"

import { database } from "../../appwrite/appwrite";
import { Query } from "appwrite";
import { useEffect, useState } from "react";
import Download from "./download";
import Delete from "./delete";

export default function TableData() {
  const [data, setData] = useState<any[]>([]);
  const [show, setShow] = useState(false);

  async function datacall() {
    const promiss = database.listDocuments(
      `${process.env.NEXT_PUBLIC_DATABASE}`,
      `${process.env.NEXT_PUBLIC_COLLECTION}`,
      [Query.select(["fileid", "filename", "size"])]
    );

    promiss.then(
      (res) => {
        setData((state) => [...state, ...res.documents]);
        setShow(true);
      },
      (err) => console.log(err)
    );
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  function remove(index:number){
    data.splice(index,1)
  }

  return (
    <>
      {!show ? (
        <tr className="flex items-center">
          <td className="p-3 w-full ml-32">
            <button
              onClick={() => datacall()}
              className="p-3 bg-green-600 w-full"
            >
              click for get all your files
            </button>
          </td>
        </tr>
      ) : (
        data.map((val, index) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            key={index}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {val.filename}
            </th>
            <td className="px-6 py-4">
              {Number(val.size / (1024 * 1024)).toFixed(2)} Mb
            </td>
            <td className="px-6 py-4 flex flex-row gap-4 justify-center">
              <Download id={val.fileid} />
              <Delete id={val.fileid} onclick={() => remove(index)}/>
            </td>
          </tr>
        ))
      )}
    </>
  );
}
