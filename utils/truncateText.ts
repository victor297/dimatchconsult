export const trucateText = (str: string) =>{
    if (str.length<23) {
        return str;
    }
    else {
        return str.substring(0,23) + "..."
    }
}