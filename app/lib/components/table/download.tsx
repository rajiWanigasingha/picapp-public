import { FaArrowDown } from "react-icons/fa";
import { storage } from "../../appwrite/appwrite";
import swal from "sweetalert";

export default function Download({ id }: any) {
  function donwnload() {
    const result = storage.getFileDownload(
      `${process.env.NEXT_PUBLIC_BUCKET_ID}`,
      `${id}`
    );

    console.log(result.href);

    if (
      window.confirm(
        'click "ok" to download file'
      )
    ) {
      window.location.href = result.href;
    }
  }

  return (
    <>
      <FaArrowDown
        color="green"
        className="cursor-pointer"
        size="20px"
        onClick={() => donwnload()}
      />
    </>
  );
}
