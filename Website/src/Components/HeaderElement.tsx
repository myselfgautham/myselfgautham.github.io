import { FC } from "react";

const HeaderElement: FC = () => {
    return (
        <header className="flex items-center justify-between border-b-2 border-b-zinc-400 py-2">
            <img
                src="/Favicon.png"
                alt="Man Technologist Icon"
                width={32}
                height={32}
                className="ml-2"
            />
            <div className="flex items-center mr-2 gap-2">
                <a href="https://github.com/myselfgautham/myselfgautham.github.io" className="flex">
                    <i className='bx bxl-github text-3xl hover:text-orange-400'></i>
                </a>
                <a href="https://www.linkedin.com/in/myselfgautham/" className="flex">
                    <i className='bx bxl-linkedin-square text-3xl hover:text-orange-400' ></i>
                </a>
            </div>
        </header>
    )
}

export default HeaderElement;