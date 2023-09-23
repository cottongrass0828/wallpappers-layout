import { useEffect, useState, createContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const api = 'https://api.unsplash.com/search/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function WallpapperLayout() {
    const [currentPage, setCurrentPage] = useState(() => localStorage.getItem('page') || '1')
    const [totalPages, setTotalPages] = useState(0)
    const [list, setList] = useState([])
    const navigate = useNavigate();

    const handlePhotoChange = async (currentPage) => {
        console.log(currentPage, totalPages);
        const page = (currentPage + 1 > totalPages ? 1 : currentPage + 1)
        const response = await axios.get(`${api}/?client_id=${accessId}&query=landscape-1024&per_page=4&page=${page}`)
        const { results, total_pages } = response.data
        setList(results);
        setTotalPages(total_pages)
        setCurrentPage(page)
        navigate(`/${results[0].id}`);
    }

    useEffect(() => {
        handlePhotoChange(1)
    }, [])

    return (
        <Outlet context={[list, currentPage, handlePhotoChange]} />
    )
}