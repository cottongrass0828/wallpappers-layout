import { memo } from 'react'
import { useNavigate } from 'react-router-dom';
export default memo(({ list, currentId }) => {
    console.log('PhotoList 更新')
    const navigate = useNavigate();
    return (
        <div className="mb-[50px] min-h-[163px] max-h-[276px] flex-1">
            {list.filter((photo) => photo.id !== currentId).map(photo => {
                return (
                    <button key={photo.id} onClick={() => navigate(`/${photo.id}`)} type="button" className="inline-block w-[163px] h-full mr-[11px]">
                        <img className="inline-block h-full object-cover" src={photo?.urls?.regular} alt={photo?.alt_description} />
                    </button>
                )
            })}
        </div>
    )
})