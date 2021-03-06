/**
 * @packageDocumentation
 * @hidden
 */

import axios, { AxiosRequestConfig, AxiosProxyConfig, AxiosResponse } from 'axios'
import { createHttpClient, getUserAgentHeader } from 'contentful-sdk-core'
import cloneDeep from 'lodash/cloneDeep'

import { Agent as httpAgent } from 'http'
import { Agent as httpsAgent } from 'https'

export type ClientParams = {
  /**
   * Contentful CMA Access Token
   */
  accessToken: string
  /**
   * Requests will be made over http instead of the default https
   * @default false
   */
  insecure?: boolean
  /**
   * If we should retry on errors and 429 rate limit exceptions
   * @default true
   */
  retryOnError?: boolean
  /**
   * API host
   * @default api.contentful.com
   */
  host?: string
  /**
   * direct file upload host
   * @default upload.contentful.com
   */
  hostUpload?: string
  /**
   * Optional Node.js HTTP agent for proxying
   * @see <a href="https://nodejs.org/api/http.html#http_class_http_agent">Node.js docs</a> and <a href="https://www.npmjs.com/package/https-proxy-agent">https-proxy-agent</a>
   */
  httpAgent?: httpAgent
  /**
   * Optional Node.js HTTP agent for proxying
   * @see <a href="https://nodejs.org/api/http.html#http_class_http_agent">Node.js docs</a> and <a href="https://www.npmjs.com/package/https-proxy-agent">https-proxy-agent</a>
   */
  httpsAgent?: httpsAgent
  /**
   * Optional Axios proxy
   * @see <a href="https://github.com/mzabriskie/axios#request-config"> axios docs </a>
   */
  proxy?: AxiosProxyConfig
  /**
   * Optional additional headers
   */
  headers?: { [key: string]: unknown }
  /**
   * A log handler function to process given log messages & errors.
   * Receives the log level (error, warning & info) and the actual log data (Error object or string).
   * @see The default can be found at: https://github.com/contentful/contentful-sdk-core/blob/master/lib/create-http-client.js
   */
  logHandler?: (level: string, data: Error | string) => void
  /**
   * Gets called on every request triggered by the SDK
   */
  requestLogger?: (config: AxiosRequestConfig) => void
  /**
   * Gets called on every response
   */
  responseLogger?: (response: AxiosResponse) => void
  /**
   * Application name and version e.g myApp/version
   */
  application?: string
  /**
   * Integration name and version e.g react/version
   */
  integration?: string
  /**
   * Optional number of milliseconds before the request times out.
   * @default 30000
   */
  timeout?: number
  /**
   * Optional number of retries before failure
   * @default 5
   */
  retryLimit?: number
  /**
   * Optional maximum content length in bytes
   * @default 1073741824 i.e 1GB
   */
  maxContentLength?: number

  feature?: string
}

export const defaultHostParameters = {
  defaultHostname: 'api.contentful.com',
  defaultHostnameUpload: 'upload.contentful.com',
}

/**
 * @private
 */
export function createCMAHttpClient(params: ClientParams, plainClient = false) {
  const sdkMain = plainClient ? 'contentful-management-plain.js' : 'contentful-management.js'
  const userAgentHeader = getUserAgentHeader(
    // @ts-expect-error
    `${sdkMain}/${__VERSION__}`,
    params.application,
    params.integration,
    params.feature
  )

  const requiredHeaders = {
    'Content-Type': 'application/vnd.contentful.management.v1+json',
    'X-Contentful-User-Agent': userAgentHeader,
  }

  params = {
    ...defaultHostParameters,
    ...cloneDeep(params),
  }

  if (!params.accessToken) {
    throw new TypeError('Expected parameter accessToken')
  }

  params.headers = {
    ...params.headers,
    ...requiredHeaders,
  }

  return createHttpClient(axios, params)
}
