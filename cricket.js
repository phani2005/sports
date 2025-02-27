const url = 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-livescores';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7acbed0963msh0298b6219e8e321p183658jsn5f9170df9772',
		'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com'
	}
};
async function getlivescore(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getlivescore()