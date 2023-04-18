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
            <div className='_options'>
                <form className='_options_form'>
                    <label className='_options_length' for='length'>length</label>
                    <div className='_options_length value'>
                        <input className='length-range' onChange={this.lengthChange} type="range" name="length" min="1" max="128" value={this.props.passwordLength} />
                        <input className='length-text' type="text" name="length" value={this.props.passwordLength} onChange={this.lengthChange} onFocus={(e) => e.target.select()} /> 
                    </div>
                    <label  className='_options_pool'>character pool</label>
                    <div className='value'>
                        <label className={this.props.selected[0] == true ? '_options_label-checkbox selected' : '_options_label-checkbox unselected'}> ABC <input className='_options_input-checkbox' onChange={this.charPoolChange} type="checkbox" id="uppercase" name="uppercase" defaultChecked={true} /> </label>
                        <label className={this.props.selected[1] == true ? '_options_label-checkbox selected' : '_options_label-checkbox unselected'}> abc <input className='_options_input-checkbox' onChange={this.charPoolChange} type="checkbox" id="lowercase" name="lowercase" defaultChecked={true} /> </label>
                        <label className={this.props.selected[2] == true ? '_options_label-checkbox selected' : '_options_label-checkbox unselected'}> 123 <input className='_options_input-checkbox' onChange={this.charPoolChange} type="checkbox" id="num" name="num" defaultChecked={true} /> </label>
                        <label className={this.props.selected[3] == true ? '_options_label-checkbox selected' : '_options_label-checkbox unselected'}> #$& <input className='_options_input-checkbox' onChange={this.charPoolChange} type="checkbox" id="special" name="special" defaultChecked={true} /> </label>
                    </div>
                </form>
            </div>
        )
    }
}
