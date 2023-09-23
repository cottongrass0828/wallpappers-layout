import { useNavigate } from 'react-router-dom';
export default function PhotoList({ list }) {
    const navigate = useNavigate();
    return (
        <div className="mb-[50px] min-h-[163px] max-h-[276px] flex-1">
            {list.slice(1).map(photo => {
                return (
                    <button key={photo.id} onClick={() => navigate(`/${photo.id}`)} type="button" className="inline-block w-[163px] h-full mr-[11px]">
                        <img className="inline-block h-full object-cover" src={photo?.urls?.regular} alt={photo?.alt_description} />
                    </button>
                )
            })}
        </div>
    )
}