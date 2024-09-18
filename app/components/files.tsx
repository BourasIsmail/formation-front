import { useState } from "react";
import { Stagiaire } from "../type/Stagiaire";
import { toast } from "@/components/ui/use-toast";
import { api } from "../api";
import { FaFileDownload } from "react-icons/fa";
import { StagiaireConf } from "../type/StagiaireConf";

const Files = ({ stagiaire }: { stagiaire: StagiaireConf }) => {
  const [selectedValue, setselectedValue] = useState<StagiaireConf>(stagiaire);

  const registerFile = (e: any) => {
    try {
      e.preventDefault();
      console.log(selectedValue);
      const fd = new FormData();
      if (selectedValue?.stagiaire?.demande) {
        fd.append("file1", selectedValue.stagiaire.demande);
        fd.append("file2", selectedValue.rapport || "");
      }
      const response = api
        .put(`/stagiaireConf/uploadFiles/${selectedValue?.id}`, fd, {
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
                    <div className="flex flex-row">
                      طلب موقع موجه إلى السيد مدير التعاون الوطني{" "}
                      {selectedValue.stagiaire?.fileNameDemande ? (
                        <a
                          href={`http://localhost:8080/stagiaire/downloadDemande/${selectedValue.stagiaire.id}`}
                          className="text-blue-500"
                        >
                          <FaFileDownload />
                        </a>
                      ) : null}
                    </div>
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
                            {selectedValue.stagiaire?.fileNameDemande}
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
                            stagiaire: {
                              ...selectedValue.stagiaire,
                              demande: e.target.files?.[0] || null,
                              fileNameDemande: e.target.files?.[0].name || "",
                            },
                          })
                        }
                        className="hidden"
                        name="demande"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <div className="flex flex-row">
                      التقرير الخاص بفترة التدريب{" "}
                      {selectedValue.rapport ? (
                        <a
                          href={`http://154.144.246.177:8041/stagiaireConf/downloadRapport/${selectedValue.id}`}
                          className="text-blue-500"
                        >
                          <FaFileDownload />
                        </a>
                      ) : null}
                    </div>
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
                            {selectedValue.fileNameRapport}
                            تحميل التقرير الخاص بفترة التدريب
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
                            rapport: e.target.files?.[0] || null || undefined,
                            fileNameRapport: e.target.files?.[0].name || "",
                          })
                        }
                        className="hidden"
                        name="rapport"
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
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Files;
