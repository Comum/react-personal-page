import React from 'react'

import Snow from '../../AuxScripts/snow'

class Snowflakes extends React.Component {
    componentDidMount() {
        new Snow()
    }

    render() {
        return (
            <canvas />
        )
    }
}

export default Snowflakes