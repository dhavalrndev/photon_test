export const isNotNull=(data)=>{
    try{
        let Result=data.toString();
        if(Result!==null &&
            Result!==undefined &&
            Result?.length>0)
            {
                return true
            }else{
                return false
            }
    }catch(exc)
    {
        return false
    }
}