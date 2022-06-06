import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export default function Datatable({ rows = [] }) {
  const columns = Object.keys(rows[0]);
  const [sortedBy, setSortedBy] = useState({
    column: columns[0],
    asc: true,
  });

  const [query, setQuery] = useState("");
  const [count, setCount] = useState(15);

  function sort(rows) {
    const { column, asc } = sortedBy;
    return rows.sort((a, b) => {
      if (a[column].toString() > b[column].toString()) return asc ? -1 : 1;
      if (b[column].toString() > a[column].toString()) return asc ? 1 : -1;

      return 0;
    });
  }

  function filter(rows) {
    return rows.filter((row) =>
      columns.some(
        (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  const sortFilter = () => sort(filter(rows));

  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        className="border border-gray-400 text-gray-800 placeholder:text-gray-800 w-full p-2 outline-none"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <table className="w-full border border-gray-400">
        <tr>
          {columns.map((column) => (
            <th className="bg-gray-300 p-2 border-b border-gray-400 text-left">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  setSortedBy((prev) => ({
                    column,
                    asc: !prev.asc,
                  }))
                }>
                <div>{column}</div>
                <div>
                  {sortedBy.column === column &&
                    (sortedBy.asc ? (
                      <ChevronUpIcon className="w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" />
                    ))}
                </div>
              </div>
            </th>
          ))}
        </tr>

        {sortFilter()
          .slice(0, count)
          .map((row) => (
            <tr>
              {columns.map((column) => (
                <td className="border-b border-gray-200 bg-gray-100 even:bg-gray-50 p-1 font-thin">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
      </table>

      {sortFilter().length > count && (
        <div className="w-full text-center">
          <button onClick={() => setCount((prev) => prev + 15)}>more</button>
        </div>
      )}
    </div>
  );
}
