import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import IconButton from './IconButton'
export default function Navbar({ className }) {
    return (
        <div className={`flex md:flex-col justify-between items-center px-[16px] md:px-[30px] py-[4px] md:py-[35px] md:w-[108px] bg-white md:h-screen ${className ? className : ''}`}>
            <div className="inline-block md:mt-[23px]">
                <IconButton>
                    {<FontAwesomeIcon icon={faImages} size="lg" />}
                </IconButton>
            </div>
            <div className="flex md:flex-col items-center relative">
                <div className="hidden md:block absolute top-[-107px] -rotate-90 whitespace-nowrap text-[14px] font-['Almarai'] text-[#D8D8D8] tracking-[3.22px]">FOLLOW ME</div>
                <div className="border-r-[1px] border-[#D8D8D8] h-[48px] md:h-[69px] w-0"></div>
                <Link className="inline-block md:mt-[23px]" to={`https://dribbble.com/shots/3715199-Layouts`} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        {<FontAwesomeIcon icon={faFacebookF} size="lg" />}
                    </IconButton>
                </Link>
                <Link className="inline-block md:mt-[23px]" to={`https://dribbble.com/shots/3715199-Layouts`} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        {<FontAwesomeIcon icon={faTwitter} size="lg" />}
                    </IconButton>
                </Link>
                <Link className="inline-block md:mt-[23px]" to={`https://dribbble.com/shots/3715199-Layouts`} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        {<FontAwesomeIcon icon={faInstagram} size="lg" />}
                    </IconButton>
                </Link>
            </div>
        </div>)
}