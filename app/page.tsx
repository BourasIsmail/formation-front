import Image from "next/image";
import { SideBar } from "./components/SideBar";

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="p-4 sm:mr-60">
        <h1 className="text-3xl font-bold ">الصفحة الرئيسية</h1>
        <div className="p-4 border-2 my-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            التعريف
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            من خلال هذه المنصة الالكترونية، تضع مؤسسة التعاون الوطني رهن إشارة
            طلبة تخصصات العمل الاجتماعي بوابة لتسجيل طلباتهم للتدريب الميداني
            داخل المراكز الاجتماعية التابعة للمؤسسة، قصد تيسير ولوجهم لها في
            أحسن الظروف، كما ستمكن هذه المنصة من تتبع مسار هذه التداريب.
          </p>
        </div>
        <div className="p-4 border-2 my-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            الإطار
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            اتفاقية الشراكة الإطار بين وزارة التعليم العالي والبحث العلمي
            والابتكار ووزارة التضامن والادماج الاجتماعي والأسرة حول تنفيذ
            البرنامج التدريبي الخاص ب 10000 مساعد ومساعدة اجتماعية للنساء
            والفتيات والفئات الهشة في أفق سنة 2030.
          </p>
        </div>
      </main>
    </>
  );
}
