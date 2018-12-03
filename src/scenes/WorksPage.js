import React from 'react'
import axios from 'axios'

import WorksHeader from './components/WorksHeader/WorksHeader'
import WorksImgContainer from './components/WorksImgContainer/WorksImgContainer'
import WorksDescription from './components/WorksDescription/WorksDescription'
import WorksTechs from './components/WorksTechs/WorksTechs'

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
            // still need to find a way to handle this
            console.log(error);
        });
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <WorksHeader />
                <WorksImgContainer />
                <WorksDescription />
                <WorksTechs />
            </div>
        )
    }
}

export default WorksPage