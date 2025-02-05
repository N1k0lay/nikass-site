import {sectionStyle} from "@/components/primitives";
import React from "react";

export default function ProductsLayout({children}: { children: React.ReactNode; }) {
    return (
        <section className={`${sectionStyle} w-full`}>
            {children}
        </section>
    );
}
