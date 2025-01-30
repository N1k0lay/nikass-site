import {title} from "@/components/primitives";
import TablePortAcc from "@/app/products/[slug]/TablePortAcc";

export default function ProductsPage() {
    return (
        <>
            <div>
                <h1 className={title()}>Каталог</h1>
            </div>
            <h2 className={title({size: 'h3'})}>Портативные аккумуляторные электростанции</h2>
            <TablePortAcc/>
        </>

    );
}
