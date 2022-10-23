export const GET_REGISTER = "GET_REGISTER"

export const response = (res)=>(
    {
        type:GET_REGISTER,
        payload:res
    }
)

export const getRegister = (userData)=> async (dispatch)=>{
    let registerRes = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
        method: 'POST',
        body: JSON.stringify(userData),
        headers : {
            'content-type': 'application/json'
        }
    });
    let userRes = await registerRes.json();
    
    if(userRes.error){
        alert(userRes.message);
    }
    else{
        alert(userRes.message);
    }
    dispatch(response(userRes))
}

