import Input from "../../Input";
import searchParamQueryName from "../searchParamQueryName";
import { useQueryParameters, useReplaceQueryParameters } from "./queryParameters";
import { Wrapper } from "./styled";

export default () => {
    const query = useQueryParameters(searchParamQueryName);
    const replaceQueryParameters = useReplaceQueryParameters();

    const onInputChange = ({ target }) => {
        replaceQueryParameters({
            key: searchParamQueryName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
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