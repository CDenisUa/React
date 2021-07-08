import { Htag, Button, Text, Teg, Rating} from "../components";
import { useState } from "react";
import { withLayout } from "../Layout/Layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>Htag component</Htag>
            <Button appearance='primary' arrow='right' >Click</Button>
            <Button appearance='ghost' arrow='right' >Button</Button>
            <Text size='S'>Small text</Text>
            <Text size='M'>Medium text</Text>
            <Text size='L'>Large text</Text>
            <Teg color='red' href='https://google.com'>Google</Teg>
            <Teg color='primary' href='https://youtube.com'>Youtube</Teg>
            <Teg color='green'>Green button</Teg>
            <Rating rating={rating} isEditable setRating={setRating} />
            <ul>
                { menu.map(item => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
            </ul>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',{
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
}

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}