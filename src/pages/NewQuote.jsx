import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import QuoteFrom from '../components/quotes/QuoteForm';

import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {

    const { sendRequest, status } =  useHttp(addQuote);

    const history = useHistory();

    useEffect( () => {
        if( status === 'completed' )
        {
            history.push('/quotes');
        }
    }, [status, history] );

    const addQUoteHandler = quoteData => {
        console.log(quoteData);

        sendRequest(quoteData);

        // Programatic navigation 
        // history.push('/quotes');
    }

    return (
        <QuoteFrom isLoading={status === 'pending'} onAddQuote={addQUoteHandler} />
    );
};

export default NewQuote;