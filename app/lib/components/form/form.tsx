"use client";

import { useState } from "react";
import { database, storage } from "../../appwrite/appwrite";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import { ID } from "appwrite";

export default function Form() {
  const [file, setFile] = useState<File>();
  const route = useRouter()

  function handelSubmit() {

    const id = nanoid()

    if (file) {
      const promiss = storage.createFile(
        `${process.env.NEXT_PUBLIC_BUCKET_ID}`,
        `${id}`,
        file
      );

      const databse = database.createDocument(
        `${process.env.NEXT_PUBLIC_DATABASE}`,
        `${process.env.NEXT_PUBLIC_COLLECTION}`,
        ID.unique(),
        {
          fileid:id,
          filename:file.name,
          size:file.size
        }
      )
      route.push('/dashboard')
    }else{
        swal("Error","You haven't selected file","error")
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handelSubmit();
        }}
        className="flex flex-col gap-1"
      >
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          className="block w-full text-lg p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
          name="file"
          onChange={(e) => {
            //@ts-ignore
            setFile(e.target.files[0]);
          }}
        />
        <p
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
        <button
          type="submit"
          className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create File
        </button>
      </form>
    </>
  );
}
