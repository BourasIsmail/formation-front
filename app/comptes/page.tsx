"use client";

import { DataTable } from "@/components/ui/data-table";
import { BreadCrumb } from "../components/BreadCrumb";
import { SideBar } from "../components/SideBar";
import { columns } from "./columns";
import { useQuery } from "react-query";
import { getUsers } from "../api";
import Link from "next/link";

export default function Home() {
  const { data: users } = useQuery({
    queryKey: ["AllUsers"],
    queryFn: getUsers(),
  });
  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <BreadCrumb />
        <Link href={"addCompte"}>
          <button
            type="button"
            className="focus:outline-none  text-white float-left bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            إضافة الحسابات +
          </button>
        </Link>

        <h1 className="text-2xl font-bold mb-4 py-2">لائحة الحسابات</h1>

        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <DataTable columns={columns} data={users || []} />
        </div>
      </main>
    </>
  );
}
