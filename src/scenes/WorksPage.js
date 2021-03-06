import React from 'react'
import axios from 'axios'

import WorksHeader from './components/WorksHeader/WorksHeader'
import WorksImgContainer from './components/WorksImgContainer/WorksImgContainer'
import WorksDescription from './components/WorksDescription/WorksDescription'
import WorksTechs from './components/WorksTechs/WorksTechs'

class WorksPage extends React.Component {
    dataUrl = `${window.location.origin}/assets/data/works.json`

    state = {
        workId: this.props.match.params.id,
        project: {
            name: '',
            company: '',
        }
    }

    componentDidMount() {
        axios.get(this.dataUrl)
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
        return (
            <div>
                <WorksHeader name={this.state.project.name} company={this.state.project.company} companyUrl={this.state.project.companyUrl} />
                <WorksImgContainer imgPath={this.state.project.img} />
                <WorksDescription description={this.state.project.description} name={this.state.project.name} url={this.state.project.link} />
                <WorksTechs techs={this.state.project.techs} />
            </div>
        )
    }
}

export default WorksPage