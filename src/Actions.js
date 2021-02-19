export const getposts = (payload) => {
    console.log("payload", payload);
    return {
        type: "posts",
        data: payload
    }
}