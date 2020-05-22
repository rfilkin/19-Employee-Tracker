import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class Filter_Male extends Component {

    state = {
        employees: []
    };
    
    // When the component mounts, load the employees
    componentDidMount() {
        this.loadEmployees();
    }

    loadEmployees = () => {
        API.filterUserGenders("male")
        .then(res =>
            this.setState({
                employees: [res["results"]]
            })
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
                <div>
                    <h1>Employees List</h1>
                        {this.state.employees.map(employee => (
                        <Card
                            title={employee["name"]["title"]}
                            first={employee["name"]["first"]}
                            last={employee["name"]["last"]}
                            gender={employee["gender"]}
                        />
                        ))}
                </div>
            );
            
      }

}

export default Filter_Male;