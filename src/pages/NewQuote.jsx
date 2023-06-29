
import QuoteFrom from '../components/quotes/QuoteForm';

const NewQuote = () => {

    const addQUoteHandler = quoteData => {
        console.log(quoteData);
    }

    return (
        <QuoteFrom onAddQuote={addQUoteHandler} />
    );
};

export default NewQuote;