"use client";
import { getStagiaire } from "@/app/api/stagiaireConf";
import Academic from "@/app/components/Academic";
import { BreadCrumb } from "@/app/components/BreadCrumb";
import DemandeInfo from "@/app/components/DemandeInfo";
import FileComponent from "@/app/components/file";
import Files from "@/app/components/files";
import Formation from "@/app/components/Formation";
import Personnel from "@/app/components/Personnel";
import { SideBar } from "@/app/components/SideBar";
import StageInfo from "@/app/components/StageInfo";
import { Apprenant } from "@/app/data/apprenants";
import { StagiaireConf } from "@/app/type/StagiaireConf";
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
  const { data: stagiaireConf, isLoading } = useQuery({
    queryKey: ["stagiaireConf", params.id],
    queryFn: () => getStagiaire(params.id || 0),
    enabled: !!params.id,
    onSuccess: (data) => {
      data || ({} as StagiaireConf);
    },
  });

  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <BreadCrumb />
        <h1 className="text-2xl font-bold mb-4 py-2">تفاصيل المتدرب</h1>
        <Tabs dir="rtl" defaultValue="personel" className="px-2">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personel">معطيات الطلب</TabsTrigger>
            <TabsTrigger value="academic">معطيات الخاصة بالتدريب</TabsTrigger>
            <TabsTrigger value="file">المرفقات</TabsTrigger>
          </TabsList>
          <TabsContent value="personel">
            {stagiaireConf && <DemandeInfo stagiaire={stagiaireConf} />}
          </TabsContent>
          <TabsContent value="academic">
            {stagiaireConf && <StageInfo stagiaire={stagiaireConf} />}
          </TabsContent>
          <TabsContent value="formation">
            {stagiaireConf && <Formation stagiaire={stagiaireConf} />}
          </TabsContent>
          <TabsContent value="file">
            {stagiaireConf && <Files stagiaire={stagiaireConf} />}
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
