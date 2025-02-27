let modifier = ' -\"ai\" -\"stable diffusion\" -\"midjourney\" -\"open art\" -\"prompt hunt\" -\"freepik\" -\"lexica\"'

if ('URLSearchParams' in window) {
    const url = new URL(window.location) 
    let params = new URLSearchParams(document.location.search);
    const query = params.get("q");
    console.log('QUERY: ' + query)
    
    if (!query) {
        console.log("No query entered yet.")
        if(window.localStorage) {
            if(localStorage.getItem('firstLoad') ){
                localStorage.removeItem('firstLoad');
            }
        }
    } else if (query.includes(modifier)) {
        console.log("Query has already been altered")
        if(window.localStorage) {
            if(localStorage.getItem('firstLoad') ){
                localStorage.removeItem('firstLoad');
            }  
        }
    } else {
        let newQuery = query + modifier;
        url.searchParams.set("q", newQuery)
        history.pushState(null, '', url);

        console.log(window.localStorage);
        if(window.localStorage) {
            if(!localStorage.getItem('firstLoad') ){
                localStorage['firstLoad'] = true;
                window.location.reload();
            } else
            localStorage.removeItem('firstLoad');
        }
    }
}

