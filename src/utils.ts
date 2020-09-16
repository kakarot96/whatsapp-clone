import { useMediaQuery } from "@material-ui/core";

export const useViewport = ()=>{
    const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true });
    return isMobile
}