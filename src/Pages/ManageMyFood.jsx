import { Link, useLoaderData, useParams } from "react-router-dom";
import { useTable } from "react-table";
import * as React from "react";
import Swal from "sweetalert2";

const ManageMyFood = () => {
  const foods = useLoaderData();
  const [food, setFoods] = React.useState();
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
            <button className="btn">
              <Link to={`/manage/${row.original._id}`}>Manage</Link>
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
    console.log("Edit Food:", food);
  };

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foods/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your food has been deleted.", "success");
              const remaining = food.filter((pod) => pod._id !== _id);
              setFoods(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4 overflow-x-auto">
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
