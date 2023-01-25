import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteAll = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.delete('http://192.168.1.26:4000/api', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <button onClick={fetchData}>Delete All Data</button>
        </div>
    );
};

export default DeleteAll;