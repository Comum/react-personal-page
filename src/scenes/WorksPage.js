import React from 'react'
import axios from 'axios'

class WorksPage extends React.Component {
    state = {
        workId: this.props.match.params.id,
        project: {}
    }

    componentDidMount() {
        axios.get(`${window.location.origin}/assets/data/works.json`)
        .then(response => {
            if (response.data.length) {
                response.data.forEach(project => {
                    if (project.id === parseInt(this.state.workId, 10)) {
                        this.setState({
                            project: project
                        })
                    }
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        console.log(this.state);

        return (
            <div>
                Works page {this.state.workId}
            </div>
        )
    }
}

export default WorksPage