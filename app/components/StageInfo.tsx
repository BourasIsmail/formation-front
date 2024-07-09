import { useState } from "react";
import { StagiaireConf } from "../type/StagiaireConf";
import { getAllProvinces } from "../api/province";
import { useQuery } from "react-query";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { api } from "../api";
import { toast } from "@/components/ui/use-toast";
import { redirect, useRouter } from "next/navigation";

const StageInfo = ({ stagiaire }: { stagiaire: StagiaireConf }) => {
  const router = useRouter();

  const [selectedValue, setselectedValue] = useState(stagiaire);
  const [open, setopen] = useState(false);
  const deleteStagiaire = async () => {
    const res = api.delete(`/stagiaireConf/${stagiaire.id}`);
    console.log(res);
    router.push(`/stagiaires`);
  };

  const { data: provinces } = useQuery({
    queryKey: ["provinces"],
    queryFn: () => getAllProvinces(),
  });
  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();
      console.log(selectedValue);
      const response = api
        .put(`/stagiaireConf/updateInfo/${selectedValue?.id}`, selectedValue)
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
    <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700">
      <section className="bg-white dark:bg-gray-900">
        <div className=" px-4 py-2 mx-auto lg:py-2">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  إقليم التدريب
                </label>
                <select
                  value={selectedValue?.province?.name || ""}
                  name="province"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      province:
                        provinces?.find(
                          (item) => item.id === Number(e.target.value)
                        ) || undefined,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={selectedValue?.province?.id || ""}>
                    {selectedValue?.province?.name}
                  </option>
                  {provinces?.map((pr) => (
                    <option value={pr.id}>{pr.name}</option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  مدة التدريب بالأيام
                </label>
                <input
                  type="number"
                  name="duree"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.duree || ""}
                  placeholder=" "
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      duree: Number(e.target.value || 0),
                    })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  تاريخ بداية التدريب
                </label>
                <input
                  type="date"
                  name="dateDebut"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue.dateDebut || ""}
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      dateDebut: e.target.value || "",
                    })
                  }
                  placeholder="تاريخ بداية التدريب"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  تاريخ نهاية التدريب
                </label>
                <input
                  type="date"
                  name="dateFin"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue.dateFin || ""}
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      dateFin: e.target.value || "",
                    })
                  }
                  placeholder="تاريخ نهاية التدريب"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  المركز
                </label>
                <input
                  type="text"
                  name="centre"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.centre || ""}
                  placeholder="المركز "
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      centre: e.target.value || "",
                    })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  التحق الطالب/ الطالبة
                </label>

                <select
                  name="presence"
                  id=""
                  value={selectedValue?.presence ?? ""}
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      presence: e.target.value || "",
                    })
                  }
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>إختر </option>
                  <option value="oui">نعم</option>
                  <option value="non">لا</option>
                </select>
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
                onClick={() => setopen(true)}
                className="text-green-600 inline-flex gap-2 items-center hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                حذف المتدرب
              </button>
              <div>
                <AlertDialog open={open} onOpenChange={setopen}>
                  <AlertDialogTrigger asChild></AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>هل أنت متأكد تمامًا؟</AlertDialogTitle>
                      <AlertDialogDescription>
                        ههذا الإجراء سيقوم حذف المتدرب
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-8">
                      <AlertDialogCancel>إلغاء</AlertDialogCancel>
                      <AlertDialogAction onClick={deleteStagiaire}>
                        متابعة
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default StageInfo;
