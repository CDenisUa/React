import {Htag, Button, Text, Teg, Rating} from "../components";
import {useState} from "react";
import {withLayout} from "../Layout/Layout/Layout";

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <div>
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
        </div>
    );
}

export default withLayout(Home);