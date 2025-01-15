import {sectionStyle} from "@/components/primitives";

export default function ProductsLayout({children}: { children: React.ReactNode; }) {
    return (
        <section className={`${sectionStyle} w-full`}>
            {children}
        </section>
    );
}
