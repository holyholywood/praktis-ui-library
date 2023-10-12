import * as XLSX from "xlsx";

type exportSpreadsheetOption<T, P> = {
  extension?: "xls" | "xlsx";
  fileName?: string;
  sheetName?: string;
  /**
   * Format the data if data format is customized
   * @param data T extends Array
   * @returns P extends Array
   */
  formatter?: (data: T) => P;
};

class spreadSheet {
  public static export<T extends Array<any>, P extends Array<any>>(data: T, { sheetName = "sheet 1", fileName = "export", extension = "xls", formatter }: exportSpreadsheetOption<T, P>) {
    try {
      const exportData = formatter ? formatter(data) : data;

      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
      XLSX.writeFile(workbook, `${fileName}.${extension}`);
    } catch (error) {
      throw error;
    }
  }
}

export default spreadSheet;
