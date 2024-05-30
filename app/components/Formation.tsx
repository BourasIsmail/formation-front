"use client";
import { useState } from "react";
import { Stagiaire } from "../type/Stagiaire";
import { toast } from "@/components/ui/use-toast";
import { api } from "../api";
import { Region } from "../type/Region";
import { getProvinceByRegion } from "../api/province";
import { useQuery } from "react-query";
import { getALLRegions } from "../api/region";

const Formation = ({ stagiaire }: { stagiaire: Stagiaire }) => {
  const [selectedValue, setselectedValue] = useState<Stagiaire>(stagiaire);
  const [selectedRegion, setselectedRegion] = useState<Region>();

  const { data: regions } = useQuery({
    queryKey: ["regions"],
    queryFn: () => getALLRegions(),
  });

  const { data: provinces } = useQuery({
    queryKey: ["provinces"],
    queryFn: () => getProvinceByRegion(selectedRegion?.id as number),
    enabled: !!selectedRegion?.id,
  });

  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();
      console.log(selectedValue);
      const response = api
        .put(`/stagiaire/updateFormation/${selectedValue?.id}`, selectedValue)
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
                <div className="w-full col-span-2">
                  <h1 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                    الخيار 1:
                  </h1>
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    تاريخ بداية التدريب
                  </label>
                  <input
                    type="date"
                    name="dateDebut1"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={selectedValue.dateDebut1 || ""}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        dateDebut1: e.target.value || "",
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
                    name="dateFin1"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={selectedValue.dateFin1 || ""}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        dateFin1: e.target.value || "",
                      })
                    }
                    placeholder="تاريخ نهاية التدريب"
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="relative z-0 w-full mb-5 group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      الجهة
                    </label>
                    <select
                      name="region"
                      onChange={(value) => {
                        setselectedRegion({
                          ...selectedRegion,
                          id: Number(value.target.value),
                          name: value.target.value.toString(),
                        });
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>
                        {selectedValue.province1?.region.name}
                      </option>

                      {regions?.map((region) => (
                        <option value={region.id}>{region.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative z-0 w-full mb-5 group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      الإقليم
                    </label>
                    <select
                      name="province1"
                      onChange={(e) =>
                        setselectedValue({
                          ...selectedValue,
                          province1:
                            provinces?.find(
                              (item) => item.id === Number(e.target.value)
                            ) || undefined,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>{selectedValue.province1?.name}</option>

                      {provinces?.map((province) => (
                        <option value={province.id}>{province.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full col-span-2">
                  <h1 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                    الخيار 2:
                  </h1>
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    تاريخ بداية التدريب
                  </label>
                  <input
                    type="date"
                    name="dateDebut2"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={selectedValue.dateDebut2 || ""}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        dateDebut2: e.target.value || "",
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
                    name="dateFin2"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={selectedValue.dateFin2 || ""}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        dateFin2: e.target.value || "",
                      })
                    }
                    placeholder="تاريخ نهاية التدريب"
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="relative z-0 w-full mb-5 group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      الجهة
                    </label>
                    <select
                      name="region"
                      onChange={(value) => {
                        setselectedRegion({
                          ...selectedRegion,
                          id: Number(value.target.value),
                          name: value.target.value.toString(),
                        });
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>
                        {selectedValue.province2?.region.name}
                      </option>

                      {regions?.map((region) => (
                        <option value={region.id}>{region.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative z-0 w-full mb-5 group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      الإقليم
                    </label>
                    <select
                      name="province2"
                      onChange={(e) =>
                        setselectedValue({
                          ...selectedValue,
                          province2:
                            provinces?.find(
                              (item) => item.id === Number(e.target.value)
                            ) || undefined,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>{selectedValue.province2?.name}</option>

                      {provinces?.map((province) => (
                        <option value={province.id}>{province.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full col-span-2">
                  <h1 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                    الخيار 3:
                  </h1>
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    تاريخ بداية التدريب
                  </label>
                  <input
                    type="date"
                    name="dateDebut3"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={selectedValue.dateDebut3 || ""}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        dateDebut3: e.target.value || "",
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
                    name="dateFin3"
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={selectedValue.dateFin3 || ""}
                    onChange={(e) =>
                      setselectedValue({
                        ...selectedValue,
                        dateFin3: e.target.value || "",
                      })
                    }
                    placeholder="تاريخ نهاية التدريب"
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="relative z-0 w-full mb-5 group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      الجهة
                    </label>
                    <select
                      name="region"
                      onChange={(value) => {
                        setselectedRegion({
                          ...selectedRegion,
                          id: Number(value.target.value),
                          name: value.target.value.toString(),
                        });
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>
                        {selectedValue.province3?.region.name}
                      </option>

                      {regions?.map((region) => (
                        <option value={region.id}>{region.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative z-0 w-full mb-5 group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      الإقليم
                    </label>
                    <select
                      name="province3"
                      onChange={(e) =>
                        setselectedValue({
                          ...selectedValue,
                          province3:
                            provinces?.find(
                              (item) => item.id === Number(e.target.value)
                            ) || undefined,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>{selectedValue.province3?.name}</option>

                      {provinces?.map((province) => (
                        <option value={province.id}>{province.name}</option>
                      ))}
                    </select>
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
export default Formation;
