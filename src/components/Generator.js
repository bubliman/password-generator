import React from 'react'
import Options from './Options' 

export default class Generator extends React.Component {
    state = {
        selected: [true, true, true, true],
        length: 128
    }
    lengthChange = (length) => {
        this.setState(() => ({length: length}))
    }

    charPoolChange = (pool) => {
        switch (pool) {
            case 'uppercase':
                this.setState((prevState) => ({selected: [!prevState.selected[0], prevState.selected[1], prevState.selected[2], prevState.selected[3]]}))
                console.log('changing uppercase')
                break
            case 'lowercase':
                this.setState((prevState) => ({selected: [prevState.selected[0], !prevState.selected[1], prevState.selected[2], prevState.selected[3]]}))
                break
            case 'num':
                this.setState((prevState) => ({selected: [prevState.selected[0], prevState.selected[1], !prevState.selected[2], prevState.selected[3]]}))
                break
            case 'special':
                this.setState((prevState) => ({selected: [prevState.selected[0], prevState.selected[1], prevState.selected[2], !prevState.selected[3]]}))
                break
            }
        
    }

    render() {
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowercase = 'abcdefghijklmnopqrstuvwxyz'
        const num = "0123456789"
        const spec = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}'
        let selected = ""
        if (this.state.selected[0] == true) {
            selected += uppercase
        }
        if (this.state.selected[1] == true) {
            selected += lowercase
        }
        if (this.state.selected[2] == true) {
            selected += num
        }
        if (this.state.selected[3] == true) {
            selected += spec
        }
        // console.log(selected.length)
        const arr = selected.split("")
        let passwords = []
        for (let l = 0; l < 1; l++) {
            let password = []
            for (let i = 0; i < this.state.length; i++) {
                password.push(arr[getRandomInt(0, selected.length)])
            }
            passwords.push(password.join(''))
            
        }
        
        // console.log(passwords)
        return (
            <div className='container'>
                {
                    passwords.map((password) => (<p className='password'>{password}</p>))
                }
                <Options charPoolChange={this.charPoolChange} lengthChange={this.lengthChange} selected={this.state.selected}/>
            </div>
        )
        
    }
}

function getRandomInt(min, max) {       
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);
    var range = max - min + 1;
    var max_range = 256;
    if (byteArray[0] >= Math.floor(max_range / range) * range)
        return getRandomInt(min, max);
    return min + (byteArray[0] % range);
}