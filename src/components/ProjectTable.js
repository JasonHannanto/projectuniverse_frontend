import BootstrapTable from "react-bootstrap-table-next";
import React, { Component } from "react";
import select from "formsy-react-components/release/components/select";
import { Button } from "react-bootstrap";
import PopUpForm from "./PopUpForm";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, {
  textFilter,
  numberFilter,
  Comparator
} from "react-bootstrap-table2-filter";

class ProjectTable extends Component {
  constructor(props) {
    super(props);
    console.log({ props: props });
    // the initial application state
    if (props) {
      this.state = {
        projects: props.projects,
        user: props.user
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
      text: "ID",
      filter: numberFilter({
        comparatorStyle: { display: "none" }, // custom the style on comparator select
        defaultValue: { comparator: Comparator.EQ } // default value
      })
    },
    {
      dataField: "projectname",
      text: "Project",
      filter: textFilter({
        comparatorStyle: { display: "none" }, // custom the style on comparator select
        defaultValue: "" // default value
      })
    },
    {
      dataField: "userid",
      text: "Author",
      filter: numberFilter({
        comparatorStyle: { display: "none" }, // custom the style on comparator select
        defaultValue: { comparator: Comparator.EQ } // default value
      })
    },
    {
      dataField: "numapplications",
      text: "Applications",
      filter: numberFilter({
        comparatorStyle: { display: "none" }, // custom the style on comparator select
        defaultValue: { comparator: Comparator.EQ } // default value
      })
    },
    {
      dataField: "projectdetails",
      text: "Description",
      filter: textFilter({
        comparatorStyle: { display: "none" }, // custom the style on comparator select
        defaultValue: "" // default value
      })
    },
    {
      dataField: "applicationdeadline",
      text: "Deadline"
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

          <PopUpForm user={this.state.user} />
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
          filter={filterFactory()}
          keyField="id"
          data={this.state.projects}
          rowStyle={this.rowStyle}
          expandRow={this.expandRow}
          borderless
          noDataIndication="Table is Empty"
          columns={this.columns}
        />
      </div>
    );
  }
}

export default ProjectTable;
