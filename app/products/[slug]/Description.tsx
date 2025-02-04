import {Card} from "@heroui/card";
import Markdown from "react-markdown";
import {title} from "@/components/primitives";
import {ProductType} from "@/types/productType";
import Characteristics from "@/components/Characteristics/Characteristics";

export default function Description({productData}: { productData: ProductType }) {
    return <section className={'flex flex-col gap-5'}>
        <h2 className={title({size: 'h2'})}>Описание</h2>
        <Card className={'p-4 px-7'}>
            <Markdown components={{
                h1(props) {
                    const {node, ...rest} = props;
                    return <h2 className={'text-2xl lg:text-2xl py-5 font-semibold'}  {...rest} />
                },
                h2(props) {
                    const {node, ...rest} = props;
                    return <h2 className={title({size: 'h3'})} {...rest} />
                },
                h3(props) {
                    const {node, ...rest} = props;
                    return <h3 className={`text-2xl lg:text-2xl py-5`} {...rest} />
                }
            }}>
                {productData?.description}
            </Markdown>
        </Card>
        <h2 className={title({size: 'h2'})}>Характеристики</h2>
        <Characteristics productData={productData}/>
    </section>
}