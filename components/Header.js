import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row items-center m-5 justify-between h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
            </div>
            <Image
            className="object-contain"
            src="https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png"
            width={120}
            height={100}
            />
        </header>
    )
}

export default Header
