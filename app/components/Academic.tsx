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
                    المستوى الجامعي
                  </label>

                  <select
                    name="niveauEtude"
                    id=""
                    value={selectedValue?.niveauEtude ?? ""}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        niveauEtude: e.target.value || "",
                      })
                    }
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>إختر المستوى</option>
                    <option value="إجازة">إجازة</option>
                    <option value="ماستر">ماستر</option>
                  </select>
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
export default Academic;
