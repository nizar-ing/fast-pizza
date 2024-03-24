import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`);
        setQuery("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Search Order #' value={query} onChange={(event) => setQuery(event.target.value)}/>
        </form>
    )
}

export default SearchOrder;
