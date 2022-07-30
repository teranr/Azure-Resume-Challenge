window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://getresumevisits.azurewebsites.net/api/GetResumeVisits?code=SKOB0Vhki7fgpTr5ThV87cRjYLh_buHY_KA23lmpOS-iAzFuuNf2yA==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeVisits';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
