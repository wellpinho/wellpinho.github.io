import axios from 'axios'

export const save = async (data) => {
  const config = {
    method: 'post',
    url: 'https://sheet.best/api/sheets/8b523f43-52c0-4253-8aa5-30c16e76299a',
    headers: {
      "Content-Type": "application/json",
    },
    data
  }

  return axios(config)
    .then(res => {
      console.log('Dados da planilha: ', res)
      console.log('url ENV: ', this.url)
      return true
    })
    .catch(err => {
      console.log(err)
      return false
    })
}
