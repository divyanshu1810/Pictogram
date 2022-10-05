import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config)

export const previewClient = createClient({
    ...config,
    useCdn:false,
    token:'sksqFKWzEk4KD0IMFdGRSPV9wZzS2fZCj7tsXU0GRmwlhbfsXXioYXPP7awuPozlCp04ucgGw19c3yjzRc6izXrAg8sGaXRvQm7rSV5r5cm8RvZDptFmHRw2M5CAouDSlcRQifMAz92UHwW6jGTSde0ypvGOUogRV9pxyGHzl2vGhCilNak1'
})

export const getClient = (usePreview) => usePreview ? previewClient : sanityClient;