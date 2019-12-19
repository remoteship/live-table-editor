const filterRows = (rows: Array<any>, filterWord: string): Array<any> => {
  filterWord = filterWord.toLowerCase()
  return !filterWord
    ? rows
    : rows.filter(tr => {
      return tr.some(td => td.toLowerCase().includes(filterWord));
    });
}

export default filterRows
