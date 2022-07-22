function generateJoke(){
    return fetch('https://icanhazdadjoke.com',{
        headers:{
            Accept:'application/json'
        },
        method:'GET',
    }).then(res=>res.json())
    .then(data=>document.getElementById('joke').innerHTML = data?.joke)
    .catch(err=> console.log(err))
}

export default generateJoke;