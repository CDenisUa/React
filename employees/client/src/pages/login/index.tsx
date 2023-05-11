// Core
import { FC } from 'react';
import { Row, Card, Form } from 'antd';
// Components
import { 
    Layout, 
    Header 
} from '@/components';

const Login: FC = () => {
    return( 
        <Layout>
            <Row
                align="middle"
                justify="center"
            >
                <Card
                    title='Log in'
                    style={{ width: "30rem"}}
                >
                    <Form
                        onFinish={() => null}
                    >
                    </Form>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;