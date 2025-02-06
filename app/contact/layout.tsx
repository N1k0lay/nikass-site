import {sectionStyle} from "@/components/primitives";
import React from "react";
import {Metadata} from "next";

export default function ProductsLayout({children}: { children: React.ReactNode; }) {
    return (
        <section className={`${sectionStyle} w-full`}>
            {children}
        </section>
    );
}

export const metadata: Metadata = {
    title: 'Котакты',
    description: 'Контакты компании NIKASS',
}