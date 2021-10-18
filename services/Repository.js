import clientAPI from './_AxiosConfig'

const LoremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

const baseURL = 'http://localhost'

export default {
  getAnalyzedResult(diagnosis) {
    return clientAPI(baseURL).post('/analyze', { data: diagnosis })
  },
  getAnalyzedResultMock(diagnosis) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({
        data: [
          {
            code: '49390',
            title: 'asthma',
            description: LoremText,
            percentage: '1.000'
          },
          {
            code: '4111',
            title: 'coronari intermedi syndrom',
            description: LoremText,
            percentage: '0.901'
          },
          {
            code: '78039',
            title: 'convuls',
            description: LoremText,
            percentage: '0.874'
          },
          {
            code: '5990',
            title: 'infect site tract urinari',
            description: LoremText,
            percentage: '0.849'
          },
          {
            code: '4280',
            title: 'congest failur heart',
            description: LoremText,
            percentage: '0.830'
          }
        ]
      }), 3000)
    })
  }
}
