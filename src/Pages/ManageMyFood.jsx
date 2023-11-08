import { Link, useLoaderData } from "react-router-dom";
import { useTable } from "react-table";
import * as React from "react";

const ManageMyFood = () => {
  const foods = useLoaderData();
  console.log(foods);
  // Your food data
  const data = React.useMemo(() => foods, [foods]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "food_name",
      },
      {
        Header: "Donator Name",
        accessor: "donator_name",
      },
      {
        Header: "Food Quantity",
        accessor: "food_quantity",
      },
      {
        Header: "Pickup Location",
        accessor: "location",
      },
      {
        Header: "Expire Date",
        accessor: "expired_date",
      },
      {
        Header: "Quality",
        accessor: "quality",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div>
            <button className="btn">
              <Link to={`/update/${row.original._id}`}>Edit</Link>
            </button>
            <button
              className="btn"
              onClick={() => handleDelete(row.original.id)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleEdit = (food) => {
    // Implement your edit logic here
    // You can navigate to the edit page or show a modal, etc.
    console.log("Edit Food:", food);
  };

  const handleDelete = (food) => {
    // Implement your delete logic here
    // You can show a confirmation modal and delete the food item, etc.
    console.log("Delete Food:", food);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="">
        <table {...getTableProps()} className="w-full border border-collapse">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                key={headerGroup}
                className="border-b"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-2 text-left font-semibold"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  key={prepareRow}
                  {...row.getRowProps()}
                  className="border-b"
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="p-2">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFood;
