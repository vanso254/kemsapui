import React from "react";
import { Presentation, School, NotebookPen, MailOpen } from 'lucide-react';
import ProgramLineChart from "../components/LineGraph";
import Card from "../components/ProductCard";

export default function Dashboard() {
  return (
    <main className="p-4 flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Programs" content="This is some content for card 1." icon={<Presentation size={25} color="white"/>}/>
        <Card title="Schools" content="This is some content for card 2." icon={<School size={25} color="white"/>} />
        <Card title="Exams" content="This is some content for card 3." icon={<NotebookPen size={25} color="white" />}/>
        <Card title="Messages" content="This is some content for card 4." icon={<MailOpen size={25} color="white" />}/>
      </div>
      {/* charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="col-span-1 md:col-span-2">
          <ProgramLineChart />
        </div>
      </div>
    </main>
  );
};
