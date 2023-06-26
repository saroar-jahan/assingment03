// sending ajax post request we need to import the axios import js file to send request

async function ajaxSend(){
    let url = 'https://api.example.com/submit';
    let res = await axios.post(url,
        {
            "name": "John Doe",
            "email": "johndoe@example.com"
        });

    if(res.status === 200){
        console.log('data inserted');
    }else{
        console.log('something went wrong');
    }
}

