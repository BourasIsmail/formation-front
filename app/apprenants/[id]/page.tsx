import Academic from "@/app/components/Academic";
import { BreadCrumb } from "@/app/components/BreadCrumb";
import Formation from "@/app/components/Formation";
import Personnel from "@/app/components/Personnel";
import { SideBar } from "@/app/components/SideBar";
import { Apprenant } from "@/app/data/apprenants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const apprenant: Apprenant = {
  id: 2,
  nom: "Mohammed",
  prenom: "Youssef",
  dateNaissance: "1995-05-15",
  adresse: "Casablanca",
  situationFamilial: "Marié",
  cin: "CD654321",
  email: "youssef.mohammed@example.com",
  nomUniversite: "ENSIAS",
  adresseUniversite: "Rabat",
  specialite: "Génie Logiciel",
  assure: false,
  attestationsAssurance: null,
  dateDebutFormation1: "2022-01-15",
  dateFinFormation1: "2022-06-15",
  province1: {
    id: 2,
    name: "Rabat",
    region: {
      id: 2,
      name: "Rabat-Salé-Kénitra",
    },
  },
  demande: null,
};

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <BreadCrumb />
        <h1 className="text-2xl font-bold mb-4 py-2">تفاصيل المتدرب</h1>
        <Tabs dir="rtl" defaultValue="personel" className="px-2">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personel">المعطيات الشخصية للمتدرب</TabsTrigger>
            <TabsTrigger value="academic">المعطيات الأكاديمية</TabsTrigger>
            <TabsTrigger value="formation">
              المعطيات الخاصة بالتدريب
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personel">
            <Personnel apprenant={apprenant} />
          </TabsContent>
          <TabsContent value="academic">
            <Academic apprenant={apprenant} />
          </TabsContent>
          <TabsContent value="formation">
            <Formation apprenant={apprenant} />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
