import { useEffect, useState, createContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const api = 'https://api.unsplash.com/search/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function WallpapperLayout() {
    const [currentPage, setCurrentPage] = useState(() => localStorage.getItem('page') || '1')
    const [totalPages, setTotalPages] = useState(0)
    const [list, setList] = useState([])
    const [ratelimitRemaining, setRateliimitRemaining] = useState(50)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const handlePhotoChange = async (currentPage) => {
        const page = (parseInt(currentPage) + 1 > totalPages ? 1 : parseInt(currentPage) + 1)
        setIsLoading(true)
        const response = await axios.get(`${api}/?client_id=${accessId}&query=landscape-1024&per_page=4&page=${page}`)
        const { results, total_pages } = response.data
        setRateliimitRemaining(response.headers['x-ratelimit-remaining'])
        setList(results);
        setTotalPages(total_pages)
        setCurrentPage(page)
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
        navigate(`/${results[0].id}`);
    }
    useEffect(() => {
        handlePhotoChange(1)
    }, [])

    return (
        <Outlet context={[list, currentPage, ratelimitRemaining, isLoading, handlePhotoChange, setRateliimitRemaining]} />
    )
}