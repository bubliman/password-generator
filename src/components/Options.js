import React from 'react'

export default class Options extends React.Component {
    lengthChange = (e) => {
        e.preventDefault() 
        const length = e.target.value
        this.props.lengthChange(length)
    }
    charPoolChange = (e) => {
        const pool = e.target.name
        console.log(pool)
        this.props.charPoolChange(pool)
    }


    render () {
        return (
            <form>
                <label>length <input onChange={this.lengthChange} type="range" name="length" min="1" max="128" defaultValue={this.passwordLength} /><input type="text" name="length" value={this.props.passwordLength} onChange={this.lengthChange} onFocus={(e) => e.target.select()} /> </label>
                <br/>
                <label>character pool
                    <label> ABC <input onChange={this.charPoolChange} type="checkbox" id="uppercase" name="uppercase" defaultChecked={true} /> </label>
                    <label> abc <input onChange={this.charPoolChange} type="checkbox" id="lowercase" name="lowercase" defaultChecked={true} /> </label>
                    <label> 123 <input onChange={this.charPoolChange} type="checkbox" id="num" name="num" defaultChecked={true} /> </label>
                    <label> #$& <input onChange={this.charPoolChange} type="checkbox" id="special" name="special" defaultChecked={true} /> </label>
                </label>
            </form>
        )
    }
}
