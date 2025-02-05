'use client'
import {title} from "@/components/primitives";
import productsData from "@/api/products.json";
import {Card, CardBody, CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import {useRouter} from 'next/navigation'
import NextImage from "next/image";


export default function ProductsPage() {

    const router = useRouter()
    return (
        <>
            <div>
                <h1 className={title()}>Каталог</h1>
            </div>
            <h2 className={`${title({size: 'h3'})} text-center`}>Портативные аккумуляторные электростанции</h2>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full">
                {productsData.models.map((item, index) => (
                    <Card key={index} isPressable shadow="sm"
                          onPress={() => router.push(`/products/${item.model.toLowerCase()}`)}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                as={NextImage}
                                alt={item.name}
                                className="min-w-full object-cover h-[240px] sm:h-[160px] lg:h-[200px]"
                                radius="lg"
                                shadow="sm"
                                src={item.image}
                                width="300"
                                height="200"
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.model}</b>
                            <p className="text-default-500">{item.price}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>

    );
}
