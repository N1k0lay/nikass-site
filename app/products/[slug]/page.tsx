import productsData from '../../../api/products.json';
import {Card, Image, Button, CardFooter, CardHeader, CardBody} from "@heroui/react"
import {subtitle, title} from "@/components/primitives";
import Link from 'next/link';
import Description from "@/app/products/[slug]/Description";

export default async function ProductPage({params}: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const productData = productsData.data.find(
        (item) => item.name.toLowerCase() === slug.toLowerCase()
    );

    return (
        <>
            <div className={'w-full grid grid-cols-1 md:grid-cols-2 gap-4'}>
                <Image src={productData?.image} alt={productData?.name}/>
                <Card className={'p-5'}>
                    <CardHeader className={'flex flex-col'}>
                        <span className={`${subtitle()}`}>Портативная система хранения энергии </span>
                        <h1 className={`${title({size: 'h2'})} w-full text-left`}>{productData?.name}</h1>
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
    );
}

export async function generateStaticParams() {
    return productsData.data.map((product) => ({
        slug: product.name.toLowerCase(),
    }));
}