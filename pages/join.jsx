import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import useInput from '../hooks/useInput'
import {useState} from 'react'

/*
    아이디
    이름
    패스워드
    패스워드확인
    전화번호
*/
const Join = () => {

    const userid = useInput('')
    const username = useInput('')
    const userphone = useInput('')
    const userpassword = useInput('')

    const [passwordCheck,setPasswordCheck] = useState('')
    const [passwordError,setPasswordError] = useState(false)

    const handlePassword = e => {
        const {value} = {...e.target}
        setPasswordError(userpassword.value !== value) // 1234 === 1234 ture
        setPasswordCheck(value)
    }

    const [term,setTerm] = useState(false)
    const [termError,setTermError] = useState(false)

    const handleTerm = e => {
        setTermError(e.target.checked !== true) 
        setTerm(e.target.checked)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(userpassword.value !== passwordCheck) {
            setPasswordError(true)
            return
        } else {
            setPasswordError(false)
        }

        if(!term) {
            setTermError(true)
            return; 
        }

        console.log({
            userid:userid.value,
            username:username.value,
            userpw:userpassword.value,
            userphone:userphone.value
        })
    }

    return (
        <>
            <Head>
                <title>Blog | 회원가입</title>
            </Head>
            <FormLayout>
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} placeholder="아이디를 입력해주세요."/> <br/>
                    <input type="text" {...username} placeholder="이름를 입력해주세요." /> <br/>
                    <input type="password" {...userpassword} placeholder="패스워드를 입력해주세요."/> <br/>
                    <input type="password" value={passwordCheck} onChange={handlePassword} placeholder="패스워드를 다시 입력해주세요."/> <br/>
                    { passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div> }
                    <input type="text" {...userphone} placeholder="전화번호를 입력해주세요."/> <br />
                    <input type="checkbox" checked={term} id="term" onChange={handleTerm} /> 
                    <label htmlFor="term">약관에 동의해주셈</label>
                    {termError && <div style={{color:'red'}}>약관에 동의해주라고...</div>}
                    <br />
                    <button type="submit">회원가입</button>
                </form>
            </FormLayout>
        </>
    )
}

export default Join