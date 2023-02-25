import { useHistory, useLocation } from "react-router-dom";
import Input from "../../Input";
import searchParamQueryName from "../searchParamQueryName";
import { Wrapper } from "./styled";

export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchParamQueryName);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);
        if (target.value.trim() === "") {
            searchParams.delete(searchParamQueryName);
        } else {
            searchParams.set(searchParamQueryName, target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Wrapper>
            <Input
            placeholder="Filtruj zadania"
            value={query || ""}
            onChange={onInputChange}
        />
        </Wrapper>
    )
};