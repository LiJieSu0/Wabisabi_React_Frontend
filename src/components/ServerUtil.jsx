
const SERVER_URL= import.meta.env.VITE_APP_SERVER_URL;

export async function FetchItemsFromServer(){
    let response;
    try{
        response=await(await fetch(`${SERVER_URL}/menu`)).json();
        console.log("request success")
    }catch(e){
        console.log(e);
    }
    return response;
}

export async function SubmitOrderToServer(obj){
    let response;
    try{
        response=await fetch(`${SERVER_URL}/order/submit`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(obj)
            })
        response=response.json();
    }catch(e){
        console.log(e);
    }
    console.log("Submit success");
    return response;
}