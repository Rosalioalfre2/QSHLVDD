import { Tabs } from "flowbite-react";
import { FaHome } from "react-icons/fa";
import inicio from "./json/01inicio.json";
import ella from "./json/02Ella.json"
import comoQuedo from "./json/03ComoQuedo.json"
import proyectoFamiliar from "./json/04ProyectoFamiliar.json"
import { GrRestroomWomen } from "react-icons/gr";
import { RiBillFill } from "react-icons/ri";
import { MdFamilyRestroom } from "react-icons/md";

export function InfoTabs() {
  return (
    <div className="overflow-auto">
    <Tabs aria-label="Full width tabs" style="fullWidth">
      <Tabs.Item active title="Inicio" icon={FaHome} className="bg-green-200">
        <PageComponent data={inicio} />
      </Tabs.Item>
      <Tabs.Item active title="Ella" icon={GrRestroomWomen} className="bg-green-200">
        <PageComponent data={ella} />
      </Tabs.Item>
      <Tabs.Item active title="Como quedaron las cosas" icon={RiBillFill} className="bg-green-200">
        <PageComponent data={comoQuedo} />
      </Tabs.Item>
      <Tabs.Item active title="Proyecto familiar" icon={MdFamilyRestroom} className="bg-green-200">
        <PageComponent data={proyectoFamiliar} />
      </Tabs.Item>
    </Tabs>
    </div>
  );
}

export default InfoTabs;

const PageComponent = ({ data }) => {
  if (!data) {
    return <div>No data available</div>;
  }

  if (!Array.isArray(data.contents)) {
    return <div>Invalid contents</div>;
  }

  return (
    <div className="mx-4 px-4 md:mx-32 md:px-16 xl:mx-64 xl:px-12 space-y-4 border border-slate-700 dark:border-slate-500 dark:bg-slate-800 bg-slate-300 py-8 md:py-12 text-justify rounded">
      {data.title && <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{data.title}</h2>}
      {data.description && <p className="text-xl font-semibold text-slate-700 dark:text-slate-300">{data.description}</p>}
      <div className="space-y-4">
        {data.contents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </div>
  );
};
