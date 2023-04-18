import React from 'react'
import Options from './Options' 
import Stats from './Stats'
import Password from './Password'


export default class Generator extends React.Component {
    state = {
        selected: [true, true, true, true],
        charPool: 93,
        passwordLength: 128,
        password: undefined,
    }

    componentDidMount() {
        this.regenerate()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selected != this.state.selected ||  prevState.passwordLength != this.state.passwordLength) {
            this.regenerate()
        }
    }

    lengthChange = (passwordLength) => {
        this.setState(() => ({passwordLength: passwordLength}))
        this.regenerate()
    }

    charPoolChange = (pool) => {
        switch (pool) {
            case 'uppercase':
                this.setState((prevState) => ({selected: [!prevState.selected[0], prevState.selected[1], prevState.selected[2], prevState.selected[3]]}))
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
        this.regenerate()
    }
    
    generate() {
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
        let password = []
        for (let i = 0; i < this.state.passwordLength; i++) {
            password.push(arr[getRandomInt(0, selected.length)])
        }

        this.setState(() => ({charPool: selected.length}))

        return password.join('')
    }

    regenerate = () => {
        this.setState(() => ({password: this.generate()}))
    }

    render() {

        // console.log(passwords)
        return (
            <div className='container grid'>
                <Password password={this.state.password} regenerate={this.regenerate} />
                <Options passwordLength={this.state.passwordLength} charPoolChange={this.charPoolChange} lengthChange={this.lengthChange} selected={this.state.selected}/>
                <Stats passwordLength={this.state.passwordLength} pool={this.state.charPool} />
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