import productsData from '../../../api/products.json';
import {Card, CardFooter, CardHeader, CardBody} from '@heroui/card';
import {Button} from '@heroui/button';
import {subtitle, title} from "@/components/primitives";
import Link from 'next/link';
import Description from "@/app/products/[slug]/Description";
import {ProductType} from "@/types/productType";
import NextImage from "next/image";

export default async function ProductPage({params}: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const productData: ProductType | undefined = productsData.models.find(
        (item) => item.model.toLowerCase() === slug.toLowerCase()
    );

    return productData ?
        <>
            <div className={'w-full grid grid-cols-1 md:grid-cols-2 gap-4'}>
                <div className={'flex items-center justify-center'}>
                    <NextImage src={productData.image} alt={productData.name} width={500} height={500}
                               className={'rounded-2xl h-full w-full object-cover'}/>
                </div>
                <Card className={'p-5'}>
                    <CardHeader className={'flex flex-col'}>
                        <span className={`${subtitle()}`}>{productData.category}</span>
                        <h1 className={`${title({size: 'h2'})} w-full text-left`}>{productData.name}</h1>
                    </CardHeader>
                    <CardBody>
                        {productData?.shortDescription}
                    </CardBody>
                    <CardFooter>
                        <div className={'flex gap-4'}>
                            <Link href={'/'}><Button>OZON</Button></Link>
                            <Link href={'/'}><Button>WildBerries</Button></Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <section>
                {productData && <Description productData={productData}/>}
            </section>

        </>
        : <>Загрузка</>
}

export async function generateStaticParams() {
    return productsData.models.map((product) => ({
        slug: product.model.toLowerCase(),
    }));
}