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
                <label>length <input onChange={this.lengthChange} type="range" name="length" min="1" max="128" defaultValue={128} /></label>
                <br/>
                <label>character pool
                    <label> ABC <input onChange={this.charPoolChange} type="checkbox" id="uppercase" name="uppercase" value={this.props.selected[0] == true ? 'on' : 'off'} /> </label>
                    <label> abc <input onChange={this.charPoolChange} type="checkbox" id="lowercase" name="lowercase" value={this.props.selected[0] == true ? 'on' : 'off'} /> </label>
                    <label> 123 <input onChange={this.charPoolChange} type="checkbox" id="num" name="num" value={this.props.selected[2]} /> </label>
                    <label> #$& <input onChange={this.charPoolChange} type="checkbox" id="special" name="special" value={this.props.selected[3]} /> </label>

                </label>
            </form>
        )
    }
}
