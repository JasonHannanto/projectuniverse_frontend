import BootstrapTable from "react-bootstrap-table-next";
import React, { Component } from "react";

class ProjectTable extends Component {
  constructor(props) {
    super(props);
    console.log({ props: props });
    // the initial application state
    if (props) {
      this.state = {
        projects: props.projects
      };
    } else {
      this.state = {
        projects: []
      };
    }
  }

  columns = [
    {
      dataField: "id",
      text: "ID"
    },
    {
      dataField: "projectname",
      text: "Project"
    },
    {
      dataField: "userid",
      text: "Author"
    },
    {
      dataField: "applicationdeadline",
      text: "Applications"
    },
    {
      dataField: "projectdetails",
      text: "Description"
    },
    {
      dataField: "applicationdeadline",
      text: "Deadline"
    }
  ];

  expandRow = {
    renderer: row => (
      <div>
        <p>{`Project ID: ${row.id}`}</p>
        <p>{`Project: ${row.projectname}`}</p>
        <p>{`Author: ${row.userid}`}</p>
        <p>{`Deadline: ${row.applicationdeadline}`}</p>
        <p>{`Description: ${row.projectdetails}`}</p>
        <p>{`Deadline: ${row.applicationdeadline}`}</p>
      </div>
    )
  };

  render() {
    console.log(this);
    return (
      <div>
        <BootstrapTable
          keyField="id"
          data={this.state.projects}
          striped
          hover
          expandRow={this.expandRow}
          noDataIndication="Table is Empty"
          columns={this.columns}
        />
      </div>
    );
  }
}

export default ProjectTable;
