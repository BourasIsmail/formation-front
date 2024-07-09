import { useState } from "react";
import { StagiaireConf } from "../type/StagiaireConf";
import Link from "next/link";
import { apprenants } from "../data/apprenants";

const DemandeInfo = ({ stagiaire }: { stagiaire: StagiaireConf }) => {
  const [selectedValue, setselectedValue] = useState<StagiaireConf>(stagiaire);
  return (
    <>
      <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700">
        <section className="bg-white dark:bg-gray-900">
          <div className=" px-4 py-2 mx-auto lg:py-2">
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
                  value={selectedValue.stagiaire?.nomAr || ""}
                  placeholder=""
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
                  value={selectedValue.stagiaire?.prenomAr || ""}
                  placeholder=""
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
                  value={selectedValue.stagiaire?.nomFr || ""}
                  placeholder=""
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
                  value={selectedValue.stagiaire?.prenomFr || ""}
                  placeholder=""
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
                  value={selectedValue?.stagiaire?.cin || ""}
                  placeholder="رقم بطاقة الهوية الوطنية"
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
                  value={selectedValue?.stagiaire?.email || ""}
                  placeholder="البريد الإلكتروني"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  الجنس
                </label>
                <input
                  type="text"
                  name="sexe"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.stagiaire?.sexe || ""}
                  placeholder="الجنس"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  اسم الجامعة
                </label>
                <input
                  type="text"
                  name="nomUniversite"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.stagiaire?.nomUniversite || ""}
                  placeholder="اسم الجامعة"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  المستوى الجامعي
                </label>
                <input
                  type="text"
                  name="niveauEtude"
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedValue?.stagiaire?.niveauEtude || ""}
                  placeholder="المستوى الجامعي"
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
                  value={selectedValue?.stagiaire?.specialite || ""}
                  placeholder="اسم الشعبة"
                  required
                />
              </div>
            </div>
            <div className="flex justify-start items-end gap-3">
              <Link
                href={
                  selectedValue?.stagiaire?.id
                    ? `/apprenants/${selectedValue.stagiaire.id}`
                    : `#`
                }
              >
                <button
                  type="button"
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  تفاصيل الطلب
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default DemandeInfo;
