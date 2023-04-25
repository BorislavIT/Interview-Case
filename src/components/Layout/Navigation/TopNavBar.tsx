import { ChangeEvent, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { checkIfMobile } from "../../../utils/functions/utils";
import { searchQueryParam } from "../../../utils/constants/globalSearchParams";
import { ResolutionContext } from "../../../contexts/ResolutionContext";
import { emptyString } from "../../../utils/constants/globalConstants";
import { GiHamburgerMenu } from "react-icons/gi";
import QuestionIcon from "../../../assets/icons/QuestionIcon";
import ShoppingCartIcon from "../../../assets/icons/ShoppingCartIcon";
import AmericanFlagIcon from "../../../assets/icons/AmericanFlagIcon";
import BellIcon from "../../../assets/icons/BellIcon";
import InputField from "../../InputField/InputField";

const TopNavBar = () => {
  const resolutionContext = useContext(ResolutionContext);
  const [alert, setAlert] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFieldValue = searchParams.get(searchQueryParam) ?? emptyString;

  const isMobile = checkIfMobile();

  const onSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    searchParams.delete(searchQueryParam);
    if (newValue !== emptyString) {
      searchParams.append(searchQueryParam, e.target.value);
    }
    setSearchParams(searchParams);
  };

  const onMobileBurgerClicked = () => {
    resolutionContext.setMobileBurgerClicked(!resolutionContext.mobileBurgerClicked);
  };

  return (
    <div
      className={`w-full h-16 flex flex-row justify-between flex-nowrap  px-6 py-1.5  border-b border-gray-100 border-solid gap-3 relative`}
    >
      {resolutionContext.mobileBurgerClicked && (
        <div
          className={`fixed w-screen bg-gray-50 z-50 h-full flex flex-row flex-wrap left-0 top-16 grow-0 content-start`}
        >
          <div className={`w-full p-6 border-b-[3px] border-gray-200`}>Currency</div>
          <div className={`w-full p-6 border-b-[3px] border-gray-200`}>Shopping cart</div>
          <div className={`w-full p-6 border-b-[3px] border-gray-200`}>Alarms</div>
          <div className={`w-full p-6 border-b-[3px] border-gray-200`}>Help</div>
        </div>
      )}
      <div className={`h-full w-80 flex items-center`}>
        <InputField
          placeholder={`Search`}
          value={searchFieldValue}
          onChange={onSearchFieldChange}
          prefix={<AiOutlineSearch className={`h-5 w-5 mr-10`} />}
        />
      </div>
      <div className={`h-full flex items-center flex-row flex-nowrap  z-10`}>
        {!isMobile && (
          <div className={`flex items-center flex-row flex-nowrap gap-5 h-6`}>
            <div className={`text-button2/regular cursor-pointer flex flex-row flex-nowrap gap-2 items-center`}>
              <div>
                <AmericanFlagIcon />
              </div>
              <div className={`text-body3/regular`}>USD</div>
            </div>
            <div>
              <ShoppingCartIcon className={`fill-gray-400 cursor-pointer`} />
            </div>
            <div>
              <BellIcon alert={alert} setAlert={setAlert} className={`cursor-pointer`} />
            </div>
            <div>
              <QuestionIcon className={`fill-gray-400 cursor-pointer`} />
            </div>
          </div>
        )}

        {isMobile && (
          <div onClick={onMobileBurgerClicked}>
            <GiHamburgerMenu size={20} className={`fill-gray-400 cursor-pointer`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
