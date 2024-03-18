
import Form from "@/app/lib/components/form/form";

export default function Upload() {
  return (
    <>
      <div className="full flex justify-center pt-11">
        <div className="lg:w-3/5 md:w-3/5 w-full bg-gray-600 rounded-lg shadow-md p-5">
          <h1 className="w-full text-xl font-mono font-semibold text-center pb-2">
            Upload your Images
          </h1>
          <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-900" />
          <Form></Form>
        </div>
      </div>
    </>
  );
}
