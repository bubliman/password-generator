import React from 'react'
import Options from './Options' 
import Stats from './Stats'
import Password from './Password'


export default class Generator extends React.Component {
    state = {
        selected: [true, true, true, true],
        charPool: 93,
        passwordLength: 12,
        password: undefined,
    }

    componentDidMount() {
        let visited = localStorage["alreadyVisited"];
        if(visited) {

        } else {
             localStorage["alreadyVisited"] = true;
             alert("THIS SYSTEM/SOFTWARE HAS NOT BEEN REVIEWED BY ANY CRYPTOGRAPHIC EXPERT AND IT IS TO BE USED AT YOUR OWN RISK \n \n This warning will persist until I’m sure that this is a secure system.")
            }
        this.regenerate()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selected != this.state.selected ||  prevState.passwordLength != this.state.passwordLength) {
            this.regenerate()
        }
    }

    lengthChange = (passwordLength) => {
        if (passwordLength == "") {
            this.setState(() => ({passwordLength: 12}))
        }
        else {
            this.setState(() => ({passwordLength: passwordLength}))
        }
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
        const special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}'
        let selected = ""
        // create the character pool that was selected by the user
        selected = this.state.selected[0] == true ? selected + uppercase : selected
        selected = this.state.selected[1] == true ? selected + lowercase : selected
        selected = this.state.selected[2] == true ? selected + num : selected
        selected = this.state.selected[3] == true ? selected + special : selected

        
        console.log(selected.length)
        const arr = selected.split("")
        let password = []
        for (let i = 0; i < this.state.passwordLength; i++) {
            password.push(arr[getRandomInt(0, selected.length - 1)])
        }

        this.setState(() => ({charPool: selected.length}))

        return password.join('')
    }

    regenerate = () => {
        this.setState(() => ({password: this.generate()}))
    }

    render() {

        
        return (
            <div className='container grid'>
                <Password password={this.state.password} regenerate={this.regenerate} passwordLength={this.state.passwordLength} />
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