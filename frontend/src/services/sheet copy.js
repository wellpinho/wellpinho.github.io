import axios from 'axios'

const api = axios.create({
  // cacesse o sheet.best
  // para criar sua conta e no seu google drive compartilhe sua planinha
  // passando a url ao sheet
  baseURL: 'sua-url-do-sheet'
})

export default api