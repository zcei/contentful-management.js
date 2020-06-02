import { AxiosInstance } from 'axios';
import { CollectionProp, DefaultElements, BasicMetaSysProps, MetaLinkProps } from '../types/common-types';
export declare type WebhookProps = {
    /**
     * System metadata
     */
    sys: BasicMetaSysProps & {
        space: {
            sys: MetaLinkProps;
        };
    };
    /**
     * Webhook name
     */
    name: string;
    /**
     * Webhook url
     */
    url: string;
    /**
     * Username for basic http auth
     */
    httpBasicUsername: string;
    /**
     * Password for basic http auth
     */
    httpBasicPassword: string;
    /**
     * Headers that should be appended to the webhook request
     */
    headers: {
        [key: string]: string;
    };
    /**
     * Topics the webhook wants to subscribe to
     */
    topics: string[];
    /**
     * Transformation to apply
     */
    transformation?: {
        method?: string;
        contentType?: string;
        includeContentLength?: boolean;
        body?: object;
    };
};
export interface WebHooks extends WebhookProps, DefaultElements<WebhookProps> {
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @return Object returned from the server with updated changes.
     * ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getWebhook('<webhook_id>'))
     * .then((webhook) => {
     *  webhook.name = 'new webhook name'
     *  return webhook.update()
     * })
     * .then((webhook) => console.log(`webhook ${webhook.sys.id} updated.`))
     * .catch(console.error)
     * ```
     */
    update(): Promise<WebHooks>;
    /**
     * Deletes this object on the server.
     * @return Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getWebhook('<webhook_id>'))
     * .then((webhook) => webhook.delete())
     * .then((webhook) => console.log(`webhook ${webhook.sys.id} updated.`))
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
    /**
     * List of the most recent webhook calls. See https://www.contentful.com/developers/docs/references/content-management-api/#/reference/webhook-calls/webhook-call-overviews for more details.
     * @return Promise for list of calls
     * ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getWebhook('<webhook_id>'))
     * .then((webhook) => webhook.getCalls())
     * .then((response) => console.log(response.items)) // webhook calls
     * .catch(console.error)
     * ```
     */
    getCalls(): Promise<Record<string, unknown>>;
    /**
     * Webhook call with specific id. See https://www.contentful.com/developers/docs/references/content-management-api/#/reference/webhook-calls/webhook-call-overviews for more details
     * @return Promise for call details
     * ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getWebhook('<webhook_id>'))
     * .then((webhook) => webhook.getCall('<call-id>'))
     * .then((webhookCall) => console.log(webhookCall))
     * .catch(console.error)
     * ```
     */
    getCall(id: string): Promise<Record<string, unknown>>;
    /**
     * Overview of the health of webhook calls. See https://www.contentful.com/developers/docs/references/content-management-api/#/reference/webhook-calls/webhook-call-overviews for more details.
     * @return Promise for health info
     * ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getWebhook('<webhook_id>'))
     * .then((webhook) => webhook.getHealth())
     * .then((webhookHealth) => console.log(webhookHealth))
     * .catch(console.error)
     * ```
     */
    getHealth(): Promise<Record<string, unknown>>;
}
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw webhook data
 * @return Wrapped webhook data
 */
export declare function wrapWebhook(http: AxiosInstance, data: WebhookProps): {
    update: () => Promise<unknown>;
    delete: () => Promise<void>;
    getCalls: () => Promise<Record<string, unknown>>;
    getCall: (id: string) => Promise<Record<string, unknown>>;
    getHealth: () => Promise<Record<string, unknown>>;
} & WebhookProps & {
    toPlainObject(): WebhookProps;
};
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw webhook collection data
 * @return Wrapped webhook collection data
 */
export declare function wrapWebhookCollection(http: AxiosInstance, data: CollectionProp<WebhookProps>): CollectionProp<WebhookProps> & {
    toPlainObject(): CollectionProp<WebhookProps>;
};