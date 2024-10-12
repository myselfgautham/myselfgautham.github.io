import { FC } from "react";
import HeaderElement from "../Components/HeaderElement";
import FooterElement from "../Components/FooterElement";

const UnderConstructionPage: FC = () => {
    return (
        <>
            <HeaderElement />
            <main className="flex justify-center items-center h-[80vh] text-center flex-col">
                <img
                    src="/under-construction-symbol-icon.webp"
                    alt="Under Construction Sign"
                    height={82}
                    width={82}
                    className="mb-2"
                />
                <h1 className="text-2xl font-bold tracking-wide">
                    Website Under Construction
                </h1>
            </main>
            <FooterElement />
        </>
    );
}

export default UnderConstructionPage;