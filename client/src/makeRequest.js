import axios from "axios";

export const makeRequest = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        Authorization: "bearer " + 'e39b1ded62496745520491cee3814fbaaf270da3750d674b816caf8a2c4d4c8f73aeae063979337dbc8aa3a9fcebe3605ae55011eac64b279e3282d8a5d34b9ec6b106faeadea5a933500547090385df377d65701bf7dd675adfed1781ed4c1909a15096bbde9e49e663bef88f465e35902d1084fe17dd125c52f6dbe19c7d75',
    },
});