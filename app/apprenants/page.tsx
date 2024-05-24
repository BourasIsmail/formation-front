import { SideBar } from "../components/SideBar";
import { BreadCrumb } from "../components/BreadCrumb";
import { DataTable } from "@/components/ui/data-table";
import { Apprenant, apprenants } from "../data/apprenants";
import { columns } from "./columns";

async function getData(): Promise<Apprenant[]> {
  // Fetch data from your API here.
  return apprenants;
}

export default async function () {
  const data = await getData();

  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <BreadCrumb />
        <h1 className="text-2xl font-bold mb-4 py-2">لائحة المتدربين</h1>
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <DataTable columns={columns} data={data} />
        </div>
      </main>
    </>
  );
}
