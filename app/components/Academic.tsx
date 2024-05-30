import { useState } from "react";
import { Stagiaire } from "../type/Stagiaire";
import { api } from "../api";
import { toast } from "@/components/ui/use-toast";

const Academic = ({ stagiaire }: { stagiaire: Stagiaire }) => {
  const [selectedValue, setselectedValue] = useState<Stagiaire>(stagiaire);
  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();
      console.log(selectedValue);
      const response = api
        .put(`/stagiaire/updateAcademic/${selectedValue?.id}`, selectedValue)
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
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    اسم الجامعة
                  </label>
                  <input
                    type="text"
                    name="nomUniversite"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={selectedValue.nomUniversite || ""}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        nomUniversite: e.target.value || "",
                      })
                    }
                    placeholder="اسم الجامعة"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    مكان الجامعة
                  </label>
                  <input
                    type="text"
                    name="adresseUniversite"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={selectedValue.adresseUniversite || ""}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        adresseUniversite: e.target.value || "",
                      })
                    }
                    placeholder="مكان الجامعة"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    اسم الشعبة
                  </label>
                  <input
                    type="text"
                    name="specialite"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={selectedValue.specialite || ""}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        specialite: e.target.value || "",
                      })
                    }
                    placeholder="اسم الشعبة"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    هل أنت مؤمن
                  </label>
                  <div className="flex items-center me-4">
                    <input
                      id="red-radio"
                      type="radio"
                      value="true"
                      checked={selectedValue.assure ? true : false}
                      name="assure"
                      onChange={(e) =>
                        setselectedValue({
                          ...selectedValue,
                          assure: e.target.value == "true" ? true : false,
                        })
                      }
                      className="w-4 h-4  bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      نعم
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      id="green-radio"
                      type="radio"
                      value="false"
                      checked={selectedValue.assure ? true : false}
                      onChange={(e) =>
                        setselectedValue({
                          ...selectedValue,
                          assure: e.target.value == "true" ? true : false,
                        })
                      }
                      name="assure"
                      className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      لا
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
                  type="submit"
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
export default Academic;
