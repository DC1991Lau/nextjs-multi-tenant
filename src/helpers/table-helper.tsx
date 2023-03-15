import { GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";

// const columnsDraft: GridColDef[] = [
//   {
//     field: "col1",
//     headerName: "API key used",
//     width: 400,
//     renderHeader(params) {
//       return (
//         <strong className="font-semibold">{params.colDef.headerName} 🔑</strong>
//       );
//     },
//   },
//   { field: "col2", headerName: "Path", width: 250 },
//   { field: "col3", headerName: "Recency", width: 250 },
//   { field: "col4", headerName: "Duration", width: 150 },
//   { field: "col5", headerName: "Status", width: 150 },
// ];

const tableColumnsCreator = ({ columns }: { columns: GridColDef[] }) => {
  return columns.map((col) => {
    if (col.field === "col1") {
      return col;
    }

    return {
      ...col,
      renderHeader(params: GridColumnHeaderParams<any, any, any>) {
        return (
          <strong className="font-semibold">{params.colDef.headerName}</strong>
        );
      },
    };
  });
};

export { tableColumnsCreator };
