import { useHistory } from 'react-router-dom';
import QuoteFrom from '../components/quotes/QuoteForm';

const NewQuote = () => {

    const history = useHistory();

    const addQUoteHandler = quoteData => {
        console.log(quoteData);

        // Programatic navigation 
        history.push('/quotes');
    }

    return (
        <QuoteFrom onAddQuote={addQUoteHandler} />
    );
};

export default NewQuote;