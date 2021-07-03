import {Htag, Button, Text, Teg} from "../components";

export default function Home(): JSX.Element {
  return (
      <div>
         <Htag tag='h1'>Htag component</Htag>
         <Button appearance='primary' arrow='right'>Button</Button>
         <Button appearance='ghost' arrow='right'>Button</Button>
         <Text size='S'>Small text</Text>
         <Text size='M'>Medium text</Text>
         <Text size='L'>Large text</Text>
         <Teg color='red' href='https://google.com'>Google</Teg>
         <Teg color='primary' href='https://youtube.com'>Youtube</Teg>
         <Teg color='green'>Green teg</Teg>
         <Teg color='ghost'>Ghost teg</Teg>
      </div>
  );
}
