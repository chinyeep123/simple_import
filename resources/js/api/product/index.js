import request from "@/utils/request";

export const listProducts = (queryParams) => {
    return request({
        url: "/api/v1/products",
        method: "get",
        params: queryParams,
    });
};

export const importProducts = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return request({
        url: "/api/v1/products/import",
        method: "post",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export function downloadTemplate() {
    return request({
        url: "/api/v1/products/template/download",
        method: "get",
        responseType: "arraybuffer",
    });
}
