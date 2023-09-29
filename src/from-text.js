import React from 'react'

export default function Fromtext(){
    const textPswd = React.useRef()
    const textPswd2 = React.useRef()

    const onblurPassword = () =>{
        let pswd = textPswd.current.value
        if(pswd !== '' &&!pswd.match(/^[0-9a-zA-Z]+$/)){
            textPswd.current.value = ''
            alert('รหัสผ่านทั้งสองช่องไม่ตรงกัน') 
        }
    }
    const onblurPassword2 = () =>{
        if(textPswd.current.value !== textPswd2.correct.value){
            textPswd2.current.value = ''
            alert('รหัสผ่านทั้งสองช่องไม่ตรงกัน') 
        }
    }
    return (
        <div className="mt-4 mx-auto p-3 rounded"
            style={{ width:'400px', background:'#cee'}}>
        <form>
            <div className="form-group mb-2">
                <label htmlFor="login">ชื่อผู้ใช้ (Login)</label>
                <input type="text" id="login" name="login" maxLength="20"
                    className="form-control form-control-sm"/>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="pswd">รหัสผ่าน</label>
            <input type="pswd" id="pswd" name="pswd" maxLength="10"
                className="form-control form-control-sm"
                ref={textPswd} onBlur={onblurPassword}/>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="pswd2">ตรวจสอบรหัสผ่าน</label>
            <input type="pswd" id="pswd2"
                className="form-control form-control-sm"
                ref={textPswd2} onBlur={onblurPassword2}/>
        </div>
        <div className="form-group mb-4">
            <label htmlFor="memo">[บันทึกช่วยจำ]</label>
            <textarea id="memo" name="memo" rows="2"
                maxLength="200"
                className="form-control form-control-sm">
            </textarea>
        </div>
        <div className="text-center">
            <button className="btn btn-primary btn-sm px-4 mb-4">
                OK
            </button>
        </div>
        </form>
    </div>
)
}