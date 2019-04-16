import BootstrapTable from "react-bootstrap-table-next";
import React from "react";

const ProjectTable = props => {
  const projects = [
    { id: 1, project: "Project 1", author: "Author 1" },
    { id: 2, project: "Project 2", author: "Author 2" },
    { id: 3, project: "Project 3", author: "Author 3" },
    { id: 4, project: "Project 4", author: "Author 4" }
  ];
  const columns = [
    {
      dataField: "id",
      text: "ID"
    },
    {
      dataField: "project",
      text: "Project"
    },
    {
      dataField: "author",
      text: "Author"
    }
  ];

  const expandRow = {
    renderer: row => (
      <div>
        <p>{`Project ID: ${row.id}`}</p>
        <p>{`Project Name: ${row.project}`}</p>
        <p>{`Project Author: ${row.author}`}</p>

        <p>
          You can render anything here, also you can add additional data on
          every row object
        </p>
      </div>
    )
  };

  return (
    <div>
      <BootstrapTable
        keyField="id"
        data={projects}
        striped
        hover
        expandRow={expandRow}
        noDataIndication="Table is Empty"
        columns={columns}
      />
    </div>
  );
};

export default ProjectTable;
