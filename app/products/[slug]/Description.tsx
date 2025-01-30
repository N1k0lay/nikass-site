'use client'

import {Card, Tab, Tabs} from "@heroui/react";
import Markdown from "react-markdown";
import {title} from "@/components/primitives";
import {useState} from "react";
import ProductType from "@/types/productType";
import Characteristics from "@/components/Characteristics/Characteristics";

export default function Description ({productData}: {productData: ProductType}) {

    const [selected, setSelected] = useState<string | number>('Описание');

    return <Tabs className={'flex justify-center'} aria-label="Tabs variants" variant={'bordered'} selectedKey={selected} onSelectionChange={setSelected}>
        <Tab key={'Описание'} title="Описание">
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
                }}>{productData?.description}</Markdown>
            </Card>
        </Tab>
        <Tab key={'Характеристики'} title={'Характеристики'}>
        <Characteristics data={productData} />
        </Tab>
    </Tabs>
}