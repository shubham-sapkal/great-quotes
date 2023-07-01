
import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';

import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import NoQuotesFound from '../components/quotes/NoQuotesFound';

// const DUMMY_QUOTES = [
//     {
//         id: 'q1',
//         author: 'shubham',
//         text: 'Jaise Jache Knowledge Taise Package deto re HR!'
//     },
//     {
//         id: 'q2',
//         author: 'sandeep',
//         text: '5 Min me aaya ....'
//     }

// ];


const AllQuotes = () => {

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect( () => {
        sendRequest();
    }, [sendRequest]);

    if(status === 'pending')
    {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }

    if(error) {
        return (
            <p className='centered focused'>{error}</p>
        );
    }

    if( status === 'completed' && ( !loadedQuotes || loadedQuotes.length === 0 ) ) {
        return <NoQuotesFound />;
    }

    return (
        <QuoteList quotes={loadedQuotes} />
    );
};

export default AllQuotes;