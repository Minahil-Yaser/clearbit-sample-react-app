import { useState, useEffect } from "react"

const useFetch = (fetchObj) => {

    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [res_status, setStatus] = useState(0);
    
    useEffect(() => {
        let success = true;


        const fetchData = async () => {
            const fetchObj1 = JSON.parse(fetchObj);
            const url = fetchObj1.url;
            const options = fetchObj1.options;
            console.log("URL",url);
            try {
                // const query_params = JSON.parse(queryParamsStr);
                // url.search = query_params;
                const optionsStr = JSON.stringify(options);
                
                const proxyOptions = {
                    method: options.method,
                    };
                    const proxyParams = new URLSearchParams({
                    apiURL: url,
                    apiOptions: optionsStr,
                    });
                const proxyUrl = `http://localhost:3001/?${proxyParams}`;
                const response = await fetch(proxyUrl, proxyOptions);

                setStatus(response.status);
                if (!response.ok) {
                    throw new Error(
                      `${response.status} ${response.statusText}`
                    );
                }
                const content = await response.json();

                if(success){
                    setData(content);
                    setError(null);
                }   
            }
            catch(err) {
                setError(err.message);
                console.log("Error",err);
            }
          };
          if(fetchObj){
            fetchData();
          }
        
       
        return () => {
            success = false;
            console.log('unmount');
        };
    
        
      }, [fetchObj, error]);

      
    return {data,res_status};
    
};

export default useFetch;