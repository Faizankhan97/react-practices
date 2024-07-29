import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
import axios from "axios";

const useRestrauntMenu = (resId) =>{
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await axios.get(MENU_API + resId + "&submitAction=ENTER");
    setResInfo(data?.data?.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return resInfo;
}

export default useRestrauntMenu;