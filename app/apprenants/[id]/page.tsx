"use client";
import { getStagiaire } from "@/app/api/stagiaire";
import Academic from "@/app/components/Academic";
import { BreadCrumb } from "@/app/components/BreadCrumb";
import FileComponent from "@/app/components/file";
import Formation from "@/app/components/Formation";
import Personnel from "@/app/components/Personnel";
import { SideBar } from "@/app/components/SideBar";
import { Apprenant } from "@/app/data/apprenants";
import { Stagiaire } from "@/app/type/Stagiaire";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";

export default function Home({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const { data: stagiaire, isLoading } = useQuery({
    queryKey: ["stagiaire", params.id],
    queryFn: () => getStagiaire(params.id || 0),
    enabled: !!params.id,
    onSuccess: (data) => {
      data || ({} as Stagiaire);
    },
  });

  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <BreadCrumb />
        <h1 className="text-2xl font-bold mb-4 py-2">تفاصيل المتدرب</h1>
        <Tabs dir="rtl" defaultValue="personel" className="px-2">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personel">المعطيات الشخصية للمتدرب</TabsTrigger>
            <TabsTrigger value="academic">المعطيات الأكاديمية</TabsTrigger>
            <TabsTrigger value="formation">
              المعطيات الخاصة بالتدريب
            </TabsTrigger>
            <TabsTrigger value="file">المرفقات</TabsTrigger>
          </TabsList>
          <TabsContent value="personel">
            {stagiaire && <Personnel stagiaire={stagiaire} />}
          </TabsContent>
          <TabsContent value="academic">
            {stagiaire && <Academic stagiaire={stagiaire} />}
          </TabsContent>
          <TabsContent value="formation">
            {stagiaire && <Formation stagiaire={stagiaire} />}
          </TabsContent>
          <TabsContent value="file">
            {stagiaire && <FileComponent stagiaire={stagiaire} />}
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
