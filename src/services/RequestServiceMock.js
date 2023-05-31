import apiClient from "@/services/Axios";

let request = {
    getSearchData(text){
        console.log("RequestServiceMock -> getSearchData", text);
        return apiClient.get("/data/search.json", {text});
    },
    getTestJson(){
        return apiClient.get("/data/test.json")
    }
}

export default request