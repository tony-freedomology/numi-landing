"use client";

import DesktopStickySms from "./DesktopStickySms";
import MobileStickySms from "./MobileStickySms";

export default function StickySmsSection() {
    return (
        <div className="w-full relative">
            <div className="hidden md:block overflow-x-clip w-full">
                <DesktopStickySms />
            </div>
            <div className="block md:hidden overflow-x-clip w-full">
                <MobileStickySms />
            </div>
        </div>
    );
}
