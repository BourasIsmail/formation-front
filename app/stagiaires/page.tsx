"use client";

import { SideBar } from "../components/SideBar";
import { BreadCrumb } from "../components/BreadCrumb";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useQuery } from "react-query";
import { StagiaireConf } from "../type/StagiaireConf";
import {
  getAllStagiaires,
  getStagiairesByProvince,
} from "../api/stagiaireConf";
import { useState } from "react";
import { UserInfo } from "../type/UserInfo";
import { getCurrentUser } from "../api";

export default function Home() {
  const [user, setUser] = useState<UserInfo>();

  useQuery("currentUser", getCurrentUser(), {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const { data: stagiaireByProvince } = useQuery(
    ["stagiaireByProvince", user?.province?.name || ""],
    () => getStagiairesByProvince(user?.province?.name || ""),
    {
      enabled: !!user?.province?.name,
    }
  );

  const { data } = useQuery<StagiaireConf[]>("stagiaires", getAllStagiaires);

  const dataTable = user?.roles == "USER_ROLES" ? stagiaireByProvince : data;

  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <BreadCrumb />
        <h1 className="text-2xl font-bold mb-4 py-2">لائحة المتدربين</h1>
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <DataTable columns={columns} data={dataTable || []} />
        </div>
      </main>
    </>
  );
}
