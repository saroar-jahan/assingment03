// sending ajax request we need to import the axios import js file to send request

async function ajaxSend(){
    let url = 'https://api.example.com/data';
    let res = await axios.get(url);

    if(res.status === 200){
        console.log('Connection successfull')
    }else{
        console.log('something went wrong');
    }
}