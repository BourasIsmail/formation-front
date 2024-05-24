import { BreadCrumb } from "@/app/components/BreadCrumb";
import Personnel from "@/app/components/Personnel";
import { SideBar } from "@/app/components/SideBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <BreadCrumb />
        <h1 className="text-2xl font-bold mb-4 py-2">تفاصيل المتدرب</h1>
        <Tabs dir="rtl" defaultValue="account" className="px-2">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personel">المعطيات الشخصية للمتدرب</TabsTrigger>
            <TabsTrigger value="academic">المعطيات الأكاديمية</TabsTrigger>
            <TabsTrigger value="formation">
              المعطيات الخاصة بالتدريب
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personel">
            <Personnel />
          </TabsContent>
          <TabsContent value="academic">Change your password here.</TabsContent>
          <TabsContent value="formation">fomation</TabsContent>
        </Tabs>
      </main>
    </>
  );
}
