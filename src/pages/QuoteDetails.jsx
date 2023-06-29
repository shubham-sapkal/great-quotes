import { Route, useParams } from "react-router-dom";

import Comments from '../components/comments/Comments';

const QuoteDetails = () => {
    
    const params = useParams();
    
    return (
        <div>
            <h1>Quote Details Page</h1>
            <h2>Quote Id: { params.quoteId } </h2>
        
            {/* path={`/quotes/${params.quote}/comments`}  */}
            <Route path='/quotes/:quoteId/comments'>
                <Comments />
            </Route>
        </div>
    );
};

export default QuoteDetails;