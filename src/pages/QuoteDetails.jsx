import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
// import {  } from "react-router-dom/cjs/react-router-dom.min";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

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

const QuoteDetails = () => {

    const match = useRouteMatch();
    const params = useParams();

    const { quoteId } = params;
    
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect( () => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    // const quote = DUMMY_QUOTES.find( quote => quote.id === params.quoteId);

    if(status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if(error) {
        return (
            <p className="centered">No Quote Found!</p>
        )
    }

    if(!loadedQuote.text) {
        return <p>No Quote Found!! </p>
    }

    return (
        <div>
            <HighlightedQuote 
                text={loadedQuote.text}
                author={loadedQuote.author} />

            <Route path={match.path} exact>
                <div className="centered">
                    <Link className='btn--flat' to={ `${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>

            
            {/* path={`/quotes/${params.quote}/comments`}  */}
            {/* <Route path={ `/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route> */}
            <Route path={ `${match.path}/comments`}>
                <Comments />
            </Route>
            
        </div>
    );
};

export default QuoteDetails;