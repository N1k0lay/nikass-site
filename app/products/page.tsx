import {title} from "@/components/primitives";
import {Card, CardBody, CardFooter, CardHeader, Image, Button} from "@heroui/react";
import productType from "@/types/productType";
import productsData from '../../api/products.json'
import Link from "next/link";

export default function ProductsPage() {
    return (
        <>
            <div>
                <h1 className={title()}>Каталог</h1>
            </div>
            <h2 className={title({size: 'h3'})}>Портативные аккумуляторные электростанции</h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

                {productsData.data
                    .filter(item => item.category === 'Портативные аккумуляторные электростанции')
                    .map((product: productType) => {
                        return <Card key={product.name} shadow="sm" isFooterBlurred>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    alt={product.name}
                                    className="w-full object-cover h-[240px]"
                                    radius={'none'}
                                    shadow="sm"
                                    src={product.image}
                                    width="100%"
                                />
                            </CardBody>
                            <CardFooter
                                className=" before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
                            >
                                <div className={'flex items-center justify-between w-full'}>
                                    <h3 className={title({size: "h4"})}>{product.name}</h3>
                                    <div className="text-stone-50 text-left">{product?.price} руб</div>
                                    <Link href={`/products/${product.name.toLowerCase()}`}>
                                        <Button color={'default'}>Перейти</Button>
                                    </Link>
                                </div>

                            </CardFooter>
                        </Card>
                    })}
            </div>
        </>

    );
}
