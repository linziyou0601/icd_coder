import clientAPI from './_AxiosConfig'

const baseURL = 'http://localhost'
export default {
  getAnalyzedResult(diagnosis) {
    return clientAPI(baseURL).get('/users/' + diagnosis)
  },
  getAnalyzedResultMock(diagnosis) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({
        data: [
          {
            icd_code: '49390',
            icd_title: 'asthma',
            percentage: '1.000'
          },
          {
            icd_code: '4111',
            icd_title: 'coronari intermedi syndrom',
            percentage: '0.901'
          },
          {
            icd_code: '78039',
            icd_title: 'convuls',
            percentage: '0.874'
          },
          {
            icd_code: '5990',
            icd_title: 'infect site tract urinari',
            percentage: '0.849'
          },
          {
            icd_code: '4280',
            icd_title: 'congest failur heart',
            percentage: '0.830'
          }
        ]
      }), 3000)
    })
  }
}
