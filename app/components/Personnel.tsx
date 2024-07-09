"use client";

import { useState } from "react";
import { Stagiaire } from "../type/Stagiaire";
import { api } from "../api";
import { toast } from "@/components/ui/use-toast";
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
import { useRouter } from "next/navigation";

const Personnel = ({ stagiaire }: { stagiaire: Stagiaire }) => {
  const [selectedValue, setselectedValue] = useState<Stagiaire>(stagiaire);
  const [open, setopen] = useState(false);

  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();
      console.log(selectedValue);
      const response = api
        .put(`/stagiaire/updatePersonnel/${selectedValue?.id}`, selectedValue)
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
  const router = useRouter();

  const confirmRequest = () => {
    try {
      const response = api
        .post(`/stagiaireConf/addStagiaire/${selectedValue?.id}`)
        .then((res) => {
          console.log(response);
          router.push(`/stagiaires/${res?.data?.id}`);
        });
      toast({
        description: "تم تأكيد الطلب بنجاح",
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
                  الإسم العائلي باللغة العربية
                </label>
                <input
                  type="text"
                  name="nomAr"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.nomAr || ""}
                  placeholder="الإسم العائلي باللغة العربية"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      nomAr: e.target.value || "",
                    })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  الإسم الشخصي باللغة العربية
                </label>
                <input
                  type="text"
                  name="prenomAr"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.prenomAr || ""}
                  placeholder="الإسم الشخصي باللغة العربية"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      prenomAr: e.target.value || "",
                    })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  الإسم العائلي باللغة الفرنسية
                </label>
                <input
                  type="text"
                  name="nomFr"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.nomFr || ""}
                  placeholder="الإسم العائلي باللغة الفرنسية"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      nomFr: e.target.value || "",
                    })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  الإسم الشخصي باللغة الفرنسية
                </label>
                <input
                  type="text"
                  name="prenomFr"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.prenomFr || ""}
                  placeholder="الإسم الشخصي باللغة الفرنسية"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      prenomFr: e.target.value || "",
                    })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  العنوان الشخصي
                </label>
                <input
                  type="text"
                  name="adresse"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.adresse || ""}
                  placeholder="العنوان الشخصي"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      adresse: e.target.value || "",
                    })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  تاريخ الازدياد
                </label>
                <input
                  type="date"
                  name="dateNaissance"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.dateNaissance || ""}
                  placeholder="تاريخ الازدياد"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      dateNaissance: e.target.value || "",
                    })
                  }
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  الحالة العائلية
                </label>
                <input
                  type="text"
                  name="situationFamilial"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.situationFamilial || ""}
                  placeholder="الحالة العائلية"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      situationFamilial: e.target.value || "",
                    })
                  }
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  رقم بطاقة الهوية الوطنية
                </label>
                <input
                  type="text"
                  name="cin"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.cin || ""}
                  placeholder="رقم بطاقة الهوية الوطنية"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      cin: e.target.value || "",
                    })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.email || ""}
                  placeholder="البريد الإلكتروني"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      email: e.target.value || "",
                    })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  الجنس
                </label>
                <div className="flex items-center me-4">
                  <input
                    id="red-radio"
                    type="radio"
                    value="homme"
                    checked={selectedValue?.sexe === "homme" ? true : false}
                    name="sexe"
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        sexe: e.target.value || "",
                      })
                    }
                    className="w-4 h-4  bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    ذكر
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="green-radio"
                    type="radio"
                    value="femme"
                    checked={selectedValue?.sexe === "femme" ? true : false}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        sexe: e.target.value || "",
                      })
                    }
                    name="sexe"
                    className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    أنثى
                  </label>
                </div>
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="telephone"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.telephone || ""}
                  placeholder="رقم الهاتف"
                  onChange={(e) =>
                    setselectedValue({
                      ...selectedValue,
                      telephone: e.target.value || "",
                    })
                  }
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
              <button
                type="button"
                onClick={() => setopen(true)}
                className="text-green-600 inline-flex gap-2 items-center hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                تأكيد الطلب
              </button>
              <div>
                <AlertDialog open={open} onOpenChange={setopen}>
                  <AlertDialogTrigger asChild></AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>هل أنت متأكد تمامًا؟</AlertDialogTitle>
                      <AlertDialogDescription>
                        ههذا الإجراء سيقوم بالموافقة على الطلب
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-8">
                      <AlertDialogCancel>إلغاء</AlertDialogCancel>
                      <AlertDialogAction onClick={confirmRequest}>
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
export default Personnel;
