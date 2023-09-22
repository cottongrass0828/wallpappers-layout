import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = 'https://api.unsplash.com/search/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function WallpapperLayout() {
    const [list, setList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        try {
            (async () => {
                const response = await axios.get(`${api}/?client_id=${accessId}&query=landscape-1024&per_page=4`)
                const { results } = response.data
                setList(results);
                navigate(`/${results[0].id}`);
            })();
        } catch (error) {
            alert('已超過使用次數，請稍後再嘗試')
            console.log(error);
        }
    }, [navigate])
    return (
        <Outlet context={list} />
    )
}