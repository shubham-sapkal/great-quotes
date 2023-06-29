
import QuoteList from '../components/quotes/QuoteList';

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


const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;