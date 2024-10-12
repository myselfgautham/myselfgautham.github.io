import { FC } from "react";

const FooterElement: FC = () => {
    return (
        <footer className="absolute flex bottom-0 w-screen md:w-auto md:border-r-2 md:border-r-zinc-400 items-center border-t-2 border-t-zinc-400 pt-1">
            <p className="font-mono text-sm">
                © 2024 Gautham Krishna Vinayachnadran. All Rights Reserved.
            </p>
        </footer>
    )
}

export default FooterElement;