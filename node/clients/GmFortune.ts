// import { InstanceOptions, IOContext, JanusClient } from '@vtex/api'


// export default class GmFortuneClient extends JanusClient {
//   constructor(context: IOContext, options?: InstanceOptions) {
//     super('http://httpstat.us', context, options)
//   }

//   public async getStatus(status: number): Promise<string> {
//     return this.http.get(status.toString(), {
//       metric: 'status-get',
//     })
//   }

//   public async getStatusWithHeaders(
//     status: number
//   ): Promise<IOResponse<string>> {
//     return this.http.getRaw(status.toString(), {
//       metric: 'status-get-raw',
//     })
//   }
// }
