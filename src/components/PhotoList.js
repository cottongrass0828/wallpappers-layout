export default function PhotoList({ list }) {
    return (
        <div className="mb-[50px] min-h-[163px] max-h-[276px] flex-1">
            {list.slice(1).map(photo => {
                return (
                    <img key={photo.id} className="inline-block w-[163px] h-full mr-[11px] object-cover" src={photo?.urls?.regular} alt={photo?.alt_description} />
                )
            })}
        </div>
    )
}