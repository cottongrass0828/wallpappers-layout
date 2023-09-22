export default function IconButton({ children }) {
    return (
        <div className="w-[48px] h-[48px] flex justify-center items-center">
            {children}
        </div>

    )
}

// <a className={`inline-block ${className ? className : ''}`} href={link}>
//     <div className="w-[48px] h-[48px] flex justify-center items-center">
//         {children}
//     </div>
// </a>