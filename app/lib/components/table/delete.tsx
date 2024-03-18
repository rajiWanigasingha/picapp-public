import { MdDeleteOutline } from "react-icons/md";
import { storage } from "../../appwrite/appwrite";

export default function Delete({id}:any) {
  function deletefile() {
    // const promise = storage.deleteFile(
    //   `${process.env.NEXT_PUBLIC_BUCKET_ID}`,
    //   `${id}`
    // );
    
  }

  return (
    <>
      <MdDeleteOutline
        color="red"
        className="cursor-pointer"
        size="20px"
        onClick={() => deletefile()}
      />
    </>
  );
}
