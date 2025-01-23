'use client'

import {Tab, Tabs} from "@heroui/react";
import Markdown from "react-markdown";
import {title} from "@/components/primitives";
import {useState} from "react";
import ProductType from "@/types/productType";

export default function Description ({productData}: {productData: ProductType}) {

    const [selected, setSelected] = useState<string | number>('Описание');

    return <Tabs  aria-label="Tabs variants" variant={'bordered'}  selectedKey={selected} onSelectionChange={setSelected}>
        <Tab key={'Описание'} title="Описание">
            <section>
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

            </section>
        </Tab>
        <Tab key={'Характеристики'} title={'Характеристики'}>
        {/*    //TODO: Вывод характеристик*/}
        </Tab>
    </Tabs>
}