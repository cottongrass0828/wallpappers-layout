import { memo } from 'react'
import { useNavigate } from 'react-router-dom';
export default memo(({ list, currentId, className }) => {
    const navigate = useNavigate();
    return (
        <div className={`${className} md:min-h-[163px] md:max-h-[276px] flex-1`}>
            {list.filter((photo) => photo.id !== currentId).map(photo => {
                return (
                    <button key={photo.id} onClick={() => navigate(`/${photo.id}`)} type="button" className="inline-block md:w-[163px] h-full md:mr-[11px]">
                        <img className="inline-block h-full object-cover" src={photo?.urls?.regular} alt={photo?.alt_description} />
                    </button>
                )
            })}
        </div>
    )
})