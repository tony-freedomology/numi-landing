"use client";

import DesktopStickySms from "./DesktopStickySms";
import MobileStickySms from "./MobileStickySms";

export default function StickySmsSection({ variant = "default" }: { variant?: "default" | "jesus-red" | "emerald-uni" | "emerald-uni" } = {}) {
    return (
        <div className="w-full relative">
            <div className="hidden md:block overflow-x-clip w-full">
                <DesktopStickySms variant={variant} />
            </div>
            <div className="block md:hidden overflow-x-clip w-full">
                <MobileStickySms variant={variant} />
            </div>
        </div>
    );
}
