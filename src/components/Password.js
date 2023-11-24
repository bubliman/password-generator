import React from 'react'

const iconSize = 40

const iconRefresh = (
    // <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24"><path fill="white" d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 512 512"><path fill="none" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"/><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m256 58l80 80l-80 80"/></svg>
)
const iconCopy = (
    // <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24"><path fill="white" d="M5 22q-.825 0-1.413-.588T3 20V6h2v14h11v2H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize-5} height={iconSize-5} viewBox="0 0 24 24"><path fill="white" d="M7 18V2h13v16H7Zm2-2h9V4H9v12Zm-6 6V6h2v14h11v2H3Zm6-6V4v12Z"/></svg>)



const Stats = (props) => {
    const regenerate = (e) => {
        e.preventDefault()
        props.regenerate()

    }
    const uppercase = /[A-Z]/
    const lowercase = /[a-z]/
    const num = /\d/
    const special = /[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}]/
    // console.log(props.password != undefined && props.password.length)
    return (
        <div className='_password'>
            <div className='_password_container'>
                <div className={props.passwordLength > 74 ? '_password_password top' : '_password_password center'} style={{ fontSize: getFontSize(props.passwordLength) }}>
                    {props.password?.split('').map((char, index) => {
                        if (uppercase.test(char)) {
                        return <span className='_password_span uppercase' key={index}>{char}</span>
                        } else if (lowercase.test(char)) {
                        return <span className='_password_span lowercase' key={index}>{char}</span>
                        } else if (num.test(char)) {
                        return <span className='_password_span num' key={index}>{char}</span>
                        } else if (special.test(char)) {
                        return <span className='_password_span special' key={index}>{char}</span>
                        } else {
                        return char
                        }
                    })}
                </div>
                <div className='_password_button-container'>
                    <button className='_password_regen-button _password_button' type="button" onClick={regenerate} >{iconRefresh}</button>
                    <button className='_password_copy-button _password_button' type='button' onClick={() => {navigator.clipboard.writeText(props.password)}}>{iconCopy}</button>
                </div>
            </div>
        </div>
    )
}

const getFontSize = (textLength) => {
    console.log(textLength)
    if (textLength < 16) {
        return '3rem'
    }
    if (textLength < 38) {
        return '2.5rem'
    }
    if (textLength < 50) {
        return '2.2rem'
    }
    return '1.6rem'
}

    

export default Stats