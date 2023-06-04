import axios from "axios";

const AxiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
});

type URLParameterType = {
  [key: string]: number | string | boolean | null;
};

const convertParams = (object?: URLParameterType): string => {
  let result: string = "";
  if (!object) {
    return result;
  }
  Object.keys(object).forEach((item, index, self) => {
    result += item + "=" + object[item] + (index < self.length - 1 ? "&" : "");
  });
  return "?" + result;
};

/**
 * BASE API Class
 */
class BASE_API {
  private base_url = process.env.NEXT_PUBLIC_BASE_API ?? "https://oms-dev.praktis.co";

  async get<T>(url: string, params?: URLParameterType): Promise<T> {
    return (await AxiosInstance.get(this.base_url + url + convertParams(params))).data.data;
  }
  async post(url: string) {
    return (await AxiosInstance.get(this.base_url + url)).data;
  }
  async patch(url: string) {
    return (await AxiosInstance.get(this.base_url + url)).data;
  }
  async delete(url: string) {
    return (await AxiosInstance.get(this.base_url + url)).data;
  }
}

const Fetch = new BASE_API();

export default Fetch;
