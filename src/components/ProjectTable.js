import BootstrapTable from "react-bootstrap-table-next";
import React, { Component } from "react";
import select from "formsy-react-components/release/components/select";
import { Button } from "react-bootstrap";
import PopUpForm from "./PopUpForm";

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
    },
    {
      dataField: "btn",
      text: ""
    }
  ];

  expandRow = {
    renderer: row => (
      <div className="rowInfo">
        <div className="colInfo leftInfo">
          <h2 className="colInfo projectTitle">{`${row.projectname}`}</h2>
          <p>{`${row.projectdetails}`}</p>
        </div>
        <div className="rightInfo">
          <p>
            <strong>Project ID: </strong>
            {`${row.id}`}
          </p>
          <p>
            <strong>Author: </strong>
            {`${row.userid}`}
          </p>
          <p>
            <strong>Deadline: </strong>
            {`${row.applicationdeadline}`}
          </p>

          <PopUpForm />
        </div>
      </div>
    )
  };

  rowStyle = {
    cursor: "pointer"
  };

  render() {
    console.log(this);
    return (
      <div>
        <BootstrapTable
          keyField="id"
          data={this.state.projects}
          rowStyle={this.rowStyle}
          expandRow={this.expandRow}
          noDataIndication="Table is Empty"
          columns={this.columns}
        />
      </div>
    );
  }
}

export default ProjectTable;
