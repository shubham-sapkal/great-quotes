import { Route, useParams } from "react-router-dom";

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'shubham',
        text: 'Jaise Jache Knowledge Taise Package deto re HR!'
    },
    {
        id: 'q2',
        author: 'sandeep',
        text: '5 Min me aaya ....'
    }

];

const QuoteDetails = () => {
    
    const params = useParams();
    

    const quote = DUMMY_QUOTES.find( quote => quote.id === params.quoteId);

    if(!quote) {
        return <p>No Quote Found!! </p>
    }

    return (
        <div>
            <HighlightedQuote 
                text={quote.text}
                author={quote.author} />

            {/* path={`/quotes/${params.quote}/comments`}  */}
            <Route path='/quotes/:quoteId/comments'>
                <Comments />
            </Route>
        </div>
    );
};

export default QuoteDetails;