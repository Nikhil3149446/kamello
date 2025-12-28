export const createKamelloTicket=(request)=>{
       return fetch('http://localhost:8080/create/tickets',{
        method:'POST',
        headers:{'Content-Type':'application/json',
        
        },
        body:JSON.stringify(request)
       })
}