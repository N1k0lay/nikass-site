import {title} from "@/components/primitives";
import {Card, CardBody, CardFooter, CardHeader, Image, Button} from "@nextui-org/react";
import productType from "@/types/productType";
import productsData from '../../api/products.json'

export default function ProductsPage() {


    return (
        <>
            <div>
                <h1 className={title()}>Каталог</h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

                {productsData.data.map((product: productType) => {
                    return <Card key={product.name} shadow="sm">
                        <CardHeader>
                            {product.name}
                        </CardHeader>
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
                        <CardFooter className={'text-small justify-between'}>
                            <p className="text-default-500">13 990р</p>
                            <Button color={'default'}>Перейти</Button>
                        </CardFooter>
                    </Card>
                })}
            </div>
        </>

    );
}
