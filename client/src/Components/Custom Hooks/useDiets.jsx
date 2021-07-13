import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../Redux/actions";



function useDiets (){
    const dispatch = useDispatch()
    const dietsLoaded = useSelector(state => state.dietsLoaded)

    useEffect(() => {
        dispatch(getTypes())
      }, []);

      return dietsLoaded
}

export default useDiets