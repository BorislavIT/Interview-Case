import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { searchQueryParam } from "../../../utils/constants/globalSearchParams";
import { emptyString } from "../../../utils/constants/globalConstants";
import QuestionIcon from "../../../assets/icons/QuestionIcon";
import ShoppingCartIcon from "../../../assets/icons/ShoppingCartIcon";
import AmericanFlagIcon from "../../../assets/icons/AmericanFlagIcon";
import BellIcon from "../../../assets/icons/BellIcon";
import InputField from "../../InputField/InputField";

const TopNavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFieldValue = searchParams.get(searchQueryParam) ?? emptyString;
  const [alert, setAlert] = useState<boolean>(false);

  const onSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
    if (newValue !== emptyString) {
      searchParams.append(searchQueryParam, e.target.value);
    }
    searchParams.delete(searchQueryParam);
    setSearchParams(searchParams);
  };

  return (
    <div
      className={`w-full h-16 flex flex-row justify-between flex-nowrap  px-6 py-1.5  border-b border-gray-100 border-solid`}
    >
      <div className={`h-full w-80 flex items-center`}>
        <InputField
          placeholder={`Search`}
          value={searchFieldValue}
          onChange={onSearchFieldChange}
          className={`h-10`}
          inputClassName={`h-10`}
          divInputWrapper={`h-10 `}
          prefix={<AiOutlineSearch className={`h-5 w-5 mr-10`} />}
        />
      </div>
      <div className={`h-full flex items-center flex-row flex-nowrap`}>
        <div className={`flex items-center flex-row flex-nowrap gap-5 h-6`}>
          <div>
            <AmericanFlagIcon />
          </div>
          <div className={`text-button2/regular`}>USD</div>
          <div>
            <ShoppingCartIcon className={`fill-gray-400`} />
          </div>
          <div>
            <BellIcon alert={alert} setAlert={setAlert} />
          </div>
          <div>
            <QuestionIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
