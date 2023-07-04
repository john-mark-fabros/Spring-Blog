import React, { useEffect, useState } from 'react'
import axios from 'axios'

// hooks for fetching data
function useFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect ((url) => {
        setLoading(true);
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((err) => {
            setError(err);
            console.log(err);
        }).finally(() => {
            setLoading(false);
        })
    }, [url])

    return {data, loading, error};
}

export default getFetch









