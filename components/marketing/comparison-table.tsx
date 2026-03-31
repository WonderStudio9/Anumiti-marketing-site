import { Check, X, Minus } from "lucide-react";

type CellValue = boolean | string;

interface ComparisonTableProps {
  headers: string[];
  rows: {
    feature: string;
    values: CellValue[];
  }[];
  highlightColumn?: number;
}

function CellContent({ value }: { value: CellValue }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-teal" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-gray-300" />;
  if (value === "-") return <Minus className="mx-auto h-5 w-5 text-gray-300" />;
  return <span>{value}</span>;
}

export function ComparisonTable({ headers, rows, highlightColumn = 0 }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 text-left font-medium text-gray-500">Feature</th>
            {headers.map((header, i) => (
              <th
                key={header}
                className={`px-4 py-3 text-center font-semibold ${
                  i === highlightColumn ? "bg-teal-50 text-teal-700" : "text-navy"
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-3 text-gray-700">{row.feature}</td>
              {row.values.map((value, i) => (
                <td
                  key={`${row.feature}-${i}`}
                  className={`px-4 py-3 text-center ${
                    i === highlightColumn ? "bg-teal-50/50" : ""
                  }`}
                >
                  <CellContent value={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
