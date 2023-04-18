import React from 'react'

const Stats = (props) => {
    const calculateEntropy = () => {
        return Math.log2(Math.pow(props.pool, props.passwordLength))
    }

    return (
        <div>

        </div>
    )
}

export default Stats