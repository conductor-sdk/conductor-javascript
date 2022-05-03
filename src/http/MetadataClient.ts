import {HttpBaseClient} from "./HttpBaseClient"

export class MetadataClient extends HttpBaseClient {
  async getWorkflowDefinition (workflowName: string, version?: number) {
    const query = version ? '?' + new URLSearchParams({
      version: version.toString()
    }) : ''
    const res = await this.request(`metadata/workflow/${workflowName}?${query}`)
    return res.json()
  }
}
