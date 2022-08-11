import { useState } from 'react';
import './app.css';
import Form from './Form';
import dataContext from './context';

const { Provider } = dataContext;



function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData({ ...data, mail: 'text@gmail.com' })
    }

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <button
                onClick={() => setData({
                    ...data,
                    mail: "second@example.com",
                    text: 'another text'
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
