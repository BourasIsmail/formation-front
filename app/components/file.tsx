import { useState } from "react";
import { Stagiaire } from "../type/Stagiaire";
import { toast } from "@/components/ui/use-toast";
import { api } from "../api";

const FileComponent = ({ stagiaire }: { stagiaire: Stagiaire }) => {
  const [selectedValue, setselectedValue] = useState<Stagiaire>(stagiaire);

  const registerFile = (e: any) => {
    try {
      e.preventDefault();
      console.log(selectedValue);
      const fd1 = new FormData();

      if (selectedValue?.attestationsAssurance) {
        fd1.append("file1", selectedValue.attestationsAssurance);
      }
      if (selectedValue?.demande) {
        fd1.append("file2", selectedValue.demande);
      }
      const response = api
        .put(`/stagiaire/upload/${selectedValue?.id}`, fd1, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(response);
        });
      toast({
        description: "تم تحديث البيانات بنجاح",
        className: "bg-green-500 text-white",
        duration: 3000,
        title: "نجاح",
      });
    } catch (error) {
      toast({
        description: "اسم مستخدم أو كلمة مرور غير صحيحة",
        variant: "destructive",
        duration: 3000,
        title: "خطأ",
      });
    }
  };

  return (
    <>
      <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700">
        <section className="bg-white dark:bg-gray-900">
          <div className=" px-4 py-2 mx-auto lg:py-2">
            <form onSubmit={registerFile} encType="multipart/form-data">
              <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    تحميل وصل التأمين
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">
                            {selectedValue.fileNameAssurance}
                            تحميل وصل التأمين
                          </span>{" "}
                          drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PDF
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        onChange={(e) =>
                          setselectedValue({
                            ...selectedValue,
                            attestationsAssurance: e.target.files?.[0] || null,
                            fileNameAssurance: e.target.files?.[0].name || "",
                          })
                        }
                        className="hidden"
                        name="attestationsAssurance"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    طلب موقع موجه إلى السيد مدير التعاون الوطني{" "}
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">
                            {selectedValue.fileNameDemande}
                            تحميل الطلب
                          </span>{" "}
                          drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PDF
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        onChange={(e) =>
                          setselectedValue({
                            ...selectedValue,
                            demande: e.target.files?.[0] || null,
                            fileNameDemande: e.target.files?.[0].name || "",
                          })
                        }
                        className="hidden"
                        name="demande"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-end gap-3">
                <button
                  type="submit"
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  تحديث المعلومات
                </button>
                <button
                  type="button"
                  className="text-red-600 inline-flex gap-2 items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <svg
                    className="w-5 h-5 mr-1 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  حذف المتدرب
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default FileComponent;
