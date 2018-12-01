import React from 'react'

class WorksPage extends React.Component {
    render() {
        const workId = this.props.match.params.id

        return (
            <div>
                Works page {workId}
            </div>
        )
    }
}

export default WorksPage