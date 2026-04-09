import type { DisclosureRow } from "@/content/localizedPages";

interface CommerceTableProps {
  rows: DisclosureRow[];
  rtl: boolean;
}

export function CommerceTable({ rows, rtl }: CommerceTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr key={row.label}>
              <th
                className={`py-4 px-4 text-gray-800 font-bold bg-purple-50 w-1/3 align-top ${
                  rtl ? "text-right" : "text-left"
                } ${
                  index === 0
                    ? rtl
                      ? "rounded-r-lg"
                      : "rounded-l-lg"
                    : ""
                } ${
                  index === rows.length - 1
                    ? rtl
                      ? "rounded-br-lg"
                      : "rounded-bl-lg"
                    : ""
                }`}
              >
                {row.label}
              </th>
              <td
                className={`py-4 px-4 text-gray-600 ${
                  rtl ? "text-right" : "text-left"
                }`}
              >
                {row.lines?.map((line, lineIndex) => (
                  <p
                    key={`${row.label}-line-${lineIndex}`}
                    className={
                      lineIndex < (row.lines?.length || 0) - 1 ? "mb-2" : ""
                    }
                  >
                    {line}
                  </p>
                ))}

                {row.listItems ? (
                  <ul
                    className={`list-disc list-inside space-y-1 ${
                      rtl ? "mr-2" : "ml-2"
                    }`}
                  >
                    {row.listItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
