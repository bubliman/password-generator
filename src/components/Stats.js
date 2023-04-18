import React from 'react'

const Stats = (props) => {
    const calculateEntropy = () => {
        return Math.log2(Math.pow(props.pool, props.passwordLength))
    }

    const calculateBruteforceTime = () => {
        const time = Math.pow(props.pool, props.passwordLength)/100000000000
        const timeInMinutes = time / 60
        const timeInHours = timeInMinutes / 60
        const timeInDays = timeInHours / 24
        const timeInYears =  timeInDays / 365.2425
        const timeInEarthLifetimes = timeInYears / 11830000000
        if (time < 1) {
            if (Math.floor(time * 1000) == 0) {
                return '<1 ms'
            }
            return Math.floor(time * 1000) + ' ms'
        }
        if (timeInMinutes < 1) {
            if (Math.floor(time) == 1) {
                return Math.floor(time) + ' second'
            }
            return Math.floor(time) + ' seconds'
        }
        if (timeInHours < 1) {
            if (Math.floor(timeInMinutes) == 1) {
                return Math.floor(timeInMinutes) + ' minute'
            }
            return Math.floor(timeInMinutes.toLocaleString('fullwide', {useGrouping:false})) + ' minutes'
        }
        if (timeInDays < 1) {
            if (Math.floor(timeInHours) == 1) {
                return Math.floor(timeInHours) + ' hour'
            }
            return Math.floor(timeInHours.toLocaleString('fullwide', {useGrouping:false})) + ' hours'
        }
        if (timeInYears < 1) {
            if (Math.floor(timeInDays) == 1) {
                return Math.floor(timeInDays) + ' day'
            }
            return Math.floor(timeInDays.toLocaleString('fullwide', {useGrouping:false})) + ' days'
        }
        if (timeInEarthLifetimes < 1) {
            if (Math.floor(timeInYears) == 1) {
                return Math.floor(timeInYears) + ' year'
            }
            return Math.floor(timeInYears.toLocaleString('fullwide', {useGrouping:false})) + ' years'
        }
        if (timeInEarthLifetimes < 10000) {
            return Math.floor(timeInEarthLifetimes) + ' earth lifetimes'
        }
        return 'over 10000 earth lifetimes'
        
    }

    return (
        <div className='_stats'>
            <span className='label'>entropy </span><span className='value'>{calculateEntropy().toFixed(2)} bits</span>
            <span className='label'>bruteforce time </span><span className='value'>{calculateBruteforceTime()}</span>
        </div>
    )
}

export default Stats