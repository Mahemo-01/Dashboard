import { mockDataTeam } from '../../data/mockData'
import { Header } from "../../components/Header";

export function Team() {

  const colums = [{ field: "id", headerName: "ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "accessLevel",
    headerName: "Access Level",
    flex: 1,
    renderCell: ({ row: { access } }) => {
      return (
        <div
        // width="60%"
        // m="0 auto"
        // p="5px"
        // display="flex"
        // justifyContent="center"
        // backgroundColor={
        //   access === "admin"
        //     ? colors.greenAccent[600]
        //     : access === "manager"
        //       ? colors.greenAccent[700]
        //       : colors.greenAccent[700]
        // }
        // borderRadius="4px"
        >
          {access === "admin" && <div>admin</div>}
          {access === "manager" && <div>manager</div>}
          {access === "user" && <div>user</div>}
          <span>
            {access}
          </span>
        </div>
      );
    },
  }]

  return (
    <>
      <Header title={'Team'} subtitle={'Team member list'}></Header>
      <div>
        {/* <DataGrid checkboxSelection rows={mockDataTeam} columns={colums}></DataGrid> */}
      </div>
    </>
  )
}