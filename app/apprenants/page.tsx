"use client";

import { SideBar } from "../components/SideBar";
import { BreadCrumb } from "../components/BreadCrumb";
import { DataTable } from "@/components/ui/data-table";
import { Apprenant, apprenants } from "../data/apprenants";
import { columns } from "./columns";
import { getAllStagiaires, getStagiaires } from "../api/stagiaire";
import { useQuery } from "react-query";
import { Stagiaire } from "../type/Stagiaire";

export default function Home() {
  const { data } = useQuery<Stagiaire[]>("stagiaires", getAllStagiaires);

  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <BreadCrumb />
        <h1 className="text-2xl font-bold mb-4 py-2">لائحة الطلبات</h1>
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <DataTable columns={columns} data={data || []} />
        </div>
      </main>
    </>
  );
}
