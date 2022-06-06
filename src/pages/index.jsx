import people from "@/data/people.json";

import Datatable from "@/ui/datatable";

export default function Homepage() {
  return (
    <div className="container mx-auto mt-16">
      <Datatable rows={people} />
    </div>
  );
}
