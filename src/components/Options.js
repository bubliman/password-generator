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
    formPrevent = (e) => {
        e.preventDefault()
        return false
    }
    checkboxState = (checkbox) => {
        let className = '_options_label-checkbox prevent-select'
        let allFalse = true
        for (let i = 0; i < this.props.selected.length; i++) {
            if (this.props.selected[i] == true) {
                allFalse = false
                break
            }
        }
        if (allFalse == true) {
            className += ' all-unselected'
            return className
        }
        if (this.props.selected[checkbox] == true) {
            className += ' selected'
        } else {
            className += ' unselected'
        }
        return className

    }

    render () {
        return (
            <div className='_options'>
                <form className='_options_form' onSubmit={this.formPrevent}>
                    <div>
                    <label className='_options_length' htmlFor='length'>length</label>
                    <div className='_options_length value'>
                        <input className='length-range' onChange={this.lengthChange} type="range" name="length" min="1" max="128" value={this.props.passwordLength} />
                        <input className='length-text' type="text" name="length" value={this.props.passwordLength} onChange={this.lengthChange} onFocus={(e) => e.target.select()} /> 
                    </div>
                    </div>
                    <div>
                    <label  className='_options_pool'>character pool</label>
                    <div className='checkboxes'>
                        <label className={this.checkboxState(0)} htmlFor="uppercase"><span>ABC</span></label> <input className='_options_input-checkbox' onChange={this.charPoolChange} type="checkbox" id="uppercase" name="uppercase" defaultChecked={true} />
                        <label className={this.checkboxState(1)} htmlFor="lowercase"><span>abc</span></label> <input className='_options_input-checkbox' onChange={this.charPoolChange} type="checkbox" id="lowercase" name="lowercase" defaultChecked={true} />
                        <label className={this.checkboxState(2)} htmlFor="num"><span>123</span></label> <input className='_options_input-checkbox' onChange={this.charPoolChange} type="checkbox" id="num" name="num" defaultChecked={true} />
                        <label className={this.checkboxState(3)} htmlFor="special"><span>#$&</span></label><input className='_options_input-checkbox' onChange={this.charPoolChange} type="checkbox" id="special" name="special" defaultChecked={true} />
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
