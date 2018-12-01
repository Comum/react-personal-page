import React from 'react'

const Works = (props) => {
    const workId = props.match.params.id

    return (
        <div>
            Works page {workId}
        </div>
    )
}

export default Works